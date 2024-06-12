import { Task } from '@/models/tasks';

export interface TaskModalRef {
  open: (task?: Task) => void;
}

export interface TaskForm {
  userId: number;
  todo: string;
  completed: boolean;
}
