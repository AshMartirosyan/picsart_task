import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonType = 'positive' | 'negative';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  buttonType?: ButtonType;
}
