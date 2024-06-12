import { memo, useRef } from 'react';
import { TaskModal, type TaskModalRef } from '@/molecule/TaskModal';
import { BaseComponent, NewTaskButton } from './TaskHeader.styled';

export const TasksHeader = memo(() => {
  const modalRef = useRef<TaskModalRef>(null);
  const onAdd = () => modalRef.current?.open();
  return (
    <>
      <BaseComponent>
        <NewTaskButton onClick={onAdd}>Add New</NewTaskButton>
      </BaseComponent>
      <TaskModal ref={modalRef} />
    </>
  );
});
