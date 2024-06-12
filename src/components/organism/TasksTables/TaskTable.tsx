import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useDeleteTask, useTasksList } from '@/api/tasks';
import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@/atom/Table';
import { type Task } from '@/models/tasks';
import { TaskModal, type TaskModalRef } from '@/molecule/TaskModal';
import { type Maybe } from '@/util/types';
import { TASKS_LIST_PER_PAGE } from './constants';
import { ActionButton, ActionsContainer, BaseComponent, TableWrapper } from './TaskTable.styled';

export const TaskTable = () => {
  const modalRef = useRef<TaskModalRef>(null);
  const observerTarget = useRef(null);
  const { data, fetchNextPage, hasNextPage } = useTasksList({ perPage: TASKS_LIST_PER_PAGE });
  const { mutate } = useDeleteTask();

  const tasks = useMemo(
    () => data?.pages?.reduce<Array<Task>>((acc, curr) => [...acc, ...curr.todos], []),
    [data?.pages],
  );

  useEffect(() => {
    let observer: Maybe<IntersectionObserver> = null;
    if (typeof window !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        },
        { threshold: 1 },
      );

      if (observerTarget.current) {
        observer.observe(observerTarget.current);
      }
    }

    return () => {
      if (observerTarget.current && observer) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [fetchNextPage, hasNextPage]);

  const onEdit = useCallback(
    (task: Task) => () => {
      modalRef.current?.open(task);
    },
    [],
  );
  const onDelete = useCallback((id: number) => () => mutate(id), []);
  return (
    <>
      <BaseComponent>
        <TableWrapper>
          <Table>
            <TableHead>
              <TableRow isHeader>
                <TableHeaderCell width="300px">Name</TableHeaderCell>
                <TableHeaderCell width="500px">Description</TableHeaderCell>
                <TableHeaderCell>Completed</TableHeaderCell>
                <TableHeaderCell textAlign="center">Action</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks?.map((task) => (
                <TableRow key={task.id}>
                  <TableDataCell>{task.userId}</TableDataCell>
                  <TableDataCell>{task.todo}</TableDataCell>
                  <TableDataCell>{task.completed ? 'Completed' : 'Not yet'}</TableDataCell>
                  <TableDataCell>
                    <ActionsContainer>
                      <ActionButton buttonType="positive" onClick={onEdit(task)}>
                        Edit
                      </ActionButton>
                      <ActionButton buttonType="negative" onClick={onDelete(task.id)}>
                        Delete
                      </ActionButton>
                    </ActionsContainer>
                  </TableDataCell>
                </TableRow>
              ))}
              <TableRow ref={observerTarget} />
            </TableBody>
          </Table>
        </TableWrapper>
      </BaseComponent>
      <TaskModal ref={modalRef} />
    </>
  );
};
