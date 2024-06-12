import { type ReactNode } from 'react';
import { type InputProps } from '@/atom/Input';
import { type Maybe } from '@/util/types';

export type SetActiveOptionFunction<T> = (item: T) => void;

export interface SelectItem {
  value: string;
  label: string;
}

export interface SelectProps<T> {
  initialValue?: Maybe<T>;
  children?: ReactNode;
  onSelect?: (item: T) => void;
  inputProps?: InputProps;
  error?: string;
}

export interface SelectState<T extends SelectItem> {
  activeOption: Maybe<T>;
  setActiveOption?: SetActiveOptionFunction<T>;
}
