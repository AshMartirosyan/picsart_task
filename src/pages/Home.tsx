import { Suspense } from 'react';
import loadable from '@loadable/component';
import { TableSkeleton } from '@/components/atom/TableSkeleton';

const TasksTable = loadable(() => import('@/organism/TasksTables').then((res) => res.TaskTable), {
  ssr: false,
});
const TasksHeader = loadable(
  () => import('@/organism/TasksHeader').then((res) => res.TasksHeader),
  { ssr: false },
);

const Home = () => {
  return (
    <Suspense fallback={<TableSkeleton />}>
      <TasksHeader />
      <TasksTable />
    </Suspense>
  );
};

export default Home;
