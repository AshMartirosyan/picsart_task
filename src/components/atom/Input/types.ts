import type { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  helperText?: string;
  icon?: ReactNode;
  error?: string;
}
