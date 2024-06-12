import { Suspense } from 'react';
import loadable from '@loadable/component';
import { TableSkeleton } from '@/atom/TableSkeleton';

const UserFilters = loadable(
  () => import('@/organism/UserFilters').then((res) => res.UserFilters),
  { ssr: false },
);
const UsersTable = loadable(() => import('@/organism/UsersTable').then((res) => res.UsersTable), {
  ssr: false,
});

const UsersList = () => {
  return (
    <Suspense fallback={<TableSkeleton />}>
      <UserFilters />
      <UsersTable />
    </Suspense>
  );
};

export default UsersList;
