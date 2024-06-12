import { memo, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useUsersList } from '@/api/users';
import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@/atom/Table';
import { Pagination } from '@/molecule/Pagination';
import { USERS_LIST_PER_PAGE } from './constants';
import { ActionButton, ActionContainer, BaseComponent, TableWrapper } from './UserTable.styled';

export const UsersTable = memo(() => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { data } = useUsersList({
    page: Number(searchParams.get('page')),
    perPage: USERS_LIST_PER_PAGE,
    search: searchParams.get('search'),
    sort: { sortBy: searchParams.get('sortBy') || '', order: searchParams.get('order') || '' },
  });

  const onSeeMore = useCallback((userId: number) => () => navigate(`/details/${userId}`), []);

  return (
    <BaseComponent>
      <TableWrapper>
        <Table>
          <TableHead>
            <TableRow isHeader>
              <TableHeaderCell width="300px">Name</TableHeaderCell>
              <TableHeaderCell width="500px">Email</TableHeaderCell>
              <TableHeaderCell>Age</TableHeaderCell>
              <TableHeaderCell textAlign="center">Actions</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.users.map((user) => (
              <TableRow key={user.id}>
                <TableDataCell>{user.firstName}</TableDataCell>
                <TableDataCell>{user.email}</TableDataCell>
                <TableDataCell>{user.age}</TableDataCell>
                <TableDataCell>
                  <ActionContainer>
                    <ActionButton onClick={onSeeMore(user.id)}>See More</ActionButton>
                  </ActionContainer>
                </TableDataCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
      <Pagination total={data?.total || 0} perPage={USERS_LIST_PER_PAGE} />
    </BaseComponent>
  );
});
