import { InfiniteData, useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ListResponse } from '@/models/api';
import { Task } from '@/models/tasks';
import { $apiClient } from '.';

const TASKS_LIST_QUERY_KEY = 'TASKS_LIST_QUERY_KEY';
const DELETE_TASKS_MUTATION_KEY = 'DELETE_TASKS_MUTATION_KEY';
const EDIT_TASKS_MUTATION_KEY = 'EDIT_TASKS_MUTATION_KEY';

export interface TasksListSearchParams {
  perPage?: number;
}

interface TasksResponse extends ListResponse {
  todos: Array<Task>;
}

interface DeleteTaskResponse extends Task {
  isDeleted: boolean;
  deletedOn: string;
}

export const useTasksList = ({ perPage = 10 }: TasksListSearchParams) => {
  return useInfiniteQuery({
    queryKey: [TASKS_LIST_QUERY_KEY],
    queryFn: ({ pageParam = 0 }) =>
      $apiClient
        .get<TasksResponse>('/todos', {
          params: {
            skip: pageParam * perPage,
            limit: perPage,
          },
        })
        .then((res) => res.data),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) =>
      lastPage?.todos?.length < perPage ? undefined : pages.length,
  });
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [EDIT_TASKS_MUTATION_KEY],
    mutationFn: (data: Pick<Task, 'completed' | 'userId' | 'todo'>) =>
      $apiClient.post<Task>(`/todos/add`, data),
    onSuccess: (data) => {
      queryClient.setQueryData([TASKS_LIST_QUERY_KEY], (oldData: InfiniteData<TasksResponse>) => {
        const newPages = [{ todos: [{ ...data.data }] }].concat(oldData.pages);
        return {
          ...oldData,
          pages: newPages,
        };
      });
    },
  });
};

export const useEditTask = (id?: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [EDIT_TASKS_MUTATION_KEY],
    mutationFn: (data: Pick<Task, 'completed'>) => $apiClient.put<Task>(`/todos/${id}`, data),
    onSuccess: (data) => {
      queryClient.setQueryData([TASKS_LIST_QUERY_KEY], (oldData: InfiniteData<TasksResponse>) => {
        const mutatedPages = oldData.pages.map((page) => {
          const index = page.todos.findIndex((task) => task.id === data.data.id);
          return index > -1
            ? {
                ...page,
                todos: page.todos?.map((todo, idx) => (index === idx ? data?.data : todo)),
              }
            : page;
        });

        return {
          ...oldData,
          pages: mutatedPages,
        };
      });
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [DELETE_TASKS_MUTATION_KEY],
    mutationFn: (id: Task['id']) => $apiClient.delete<DeleteTaskResponse>(`/todos/${id}`),
    onSuccess: (data) => {
      queryClient.setQueryData([TASKS_LIST_QUERY_KEY], (oldData: InfiniteData<TasksResponse>) => {
        const mutatedPages = oldData.pages.map((page) => {
          const index = page.todos.findIndex((task) => task.id === data.data.id);
          return index > -1
            ? {
                ...page,
                todos: page.todos?.filter((todo, idx) => index !== idx),
              }
            : page;
        });

        return {
          ...oldData,
          pages: mutatedPages,
        };
      });
    },
  });
};
