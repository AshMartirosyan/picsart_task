import { useQuery } from '@tanstack/react-query';
import { ListResponse, PaginationParams, SearchParams } from '@/models/api';
import { User } from '@/models/users';
import { Maybe } from '@/util/types';
import { $apiClient } from '.';

const USERS_LIST_QUERY_KEY = 'USERS_LIST_QUERY_KEY';
const USER_DETAILS_QUERY_KEY = 'USERS_LIST_QUERY_KEY';
type UsersListDto = Pick<User, 'id' | 'firstName' | 'email' | 'age'>;

interface SortOption {
  sortBy: string;
  order: string;
}

interface UsersListSearchParams {
  page?: Maybe<number>;
  perPage?: Maybe<number>;
  search?: Maybe<string>;
  sort?: Partial<SortOption>;
}

export interface UsersResponse<T extends User> extends ListResponse {
  users: Array<T>;
}

export const useUsersList = ({ page, perPage, search, sort }: UsersListSearchParams) => {
  const paginationParams: PaginationParams = {
    skip: ((page || 1) - 1) * (perPage || 10),
    limit: perPage || 10,
  };

  let searchParams: SearchParams;

  if (search) {
    searchParams = {
      q: search || '',
    };
  }

  let sortBy: Maybe<SortOption> = null;

  if (sort?.sortBy && sort.order) {
    sortBy = sort as SortOption;
  }

  const url = search ? '/users/search/' : '/users';

  return useQuery({
    queryKey: [USERS_LIST_QUERY_KEY, page, perPage, search, sortBy?.order, sort?.sortBy],
    queryFn: () =>
      $apiClient.get<UsersResponse<UsersListDto>>(url, {
        params: {
          ...paginationParams,
          ...searchParams,
          select: 'id,firstName,age,email',
          ...sortBy,
        },
      }),
    select: (data) => data.data,
    placeholderData: (prev) => prev,
  });
};

export const useUserDetails = (userId?: string) => {
  return useQuery({
    queryKey: [USER_DETAILS_QUERY_KEY, userId],
    queryFn: () =>
      $apiClient.get<User>(`/users/${userId}`, {
        params: {
          select: 'id,firstName,lastName,age,email,image,address',
        },
      }),
    select: (data) => data.data,
    enabled: !!userId,
  });
};
