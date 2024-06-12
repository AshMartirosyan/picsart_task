import type { FC } from 'react';
import { BaseComponent } from './Button.styled';
import type { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({
  icon,
  iconPosition = 'right',
  children,
  buttonType = 'positive',
  ...rest
}) => {
  return (
    <BaseComponent buttonType={buttonType} {...rest}>
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </BaseComponent>
  );
};
