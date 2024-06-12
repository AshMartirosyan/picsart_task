import { forwardRef, useCallback, useImperativeHandle, useMemo, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useCreateTask, useEditTask } from '@/api/tasks';
import { Heading2 } from '@/atom/Base';
import { Input } from '@/atom/Input';
import { Modal } from '@/atom/Modal';
import { Task } from '@/models/tasks';
import { Maybe } from '@/util/types';
import { selectOptions } from './constants';
import { Form, SubmitButton, TaskDescription } from './TaskModal.styled';
import { TaskForm, TaskModalRef } from './types';
import { validationSchema } from './validation';
import { Select } from '../Select';

export const TaskModal = forwardRef<TaskModalRef>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState<Maybe<Task>>(null);

  const { mutate: editTask } = useEditTask(task?.id);
  const { mutate: createTask } = useCreateTask();

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    setValue,
  } = useForm<TaskForm>({ resolver: yupResolver(validationSchema) });

  useImperativeHandle(
    ref,
    () => ({
      open: (task) => {
        setIsOpen(true);
        task && setTask(task);
        setValue('completed', !!task?.completed);
      },
    }),
    [],
  );

  const selectInitialValue = useMemo(
    () => selectOptions.find((option) => option.value === String(task?.completed)),
    [task],
  );

  const onSubmit: SubmitHandler<TaskForm> = useCallback(
    (data) => {
      if (task) {
        editTask({ completed: data.completed });
      } else {
        createTask({ ...data });
      }
      setIsOpen(false);
    },
    [task],
  );

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Heading2>{!task ? 'New Task' : 'Edit Task'}</Heading2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          readOnly={!!task}
          placeholder="User Id"
          helperText="UserId"
          value={task?.userId}
          error={errors.userId?.message}
          {...register('userId', { required: 'This field is required' })}
        />
        <TaskDescription
          readOnly={!!task}
          placeholder="Write task Description"
          helperText="Task"
          defaultValue={task?.todo}
          error={errors.todo?.message}
          {...register('todo', { required: 'This field is required' })}
        />
        {task && (
          <Controller
            name="completed"
            control={control}
            rules={{
              required: 'This field is required',
              validate: (value) => {
                console.log({ value });
                return typeof value === 'boolean';
              },
            }}
            render={({ field: { onChange } }) => (
              <Select
                onSelect={(value) => onChange(value.value || null)}
                inputProps={{ placeholder: 'Select', helperText: 'Completed' }}
                error={errors.completed?.message}
                initialValue={selectInitialValue}>
                {selectOptions.map((item) => (
                  <Select.Option key={item.value} item={item} />
                ))}
              </Select>
            )}
          />
        )}
        <SubmitButton type="submit">Sumbit</SubmitButton>
      </Form>
    </Modal>
  );
});
