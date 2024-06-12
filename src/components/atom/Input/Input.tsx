import { forwardRef, useImperativeHandle, useRef } from 'react';
import {
  BaseComponent,
  ErrorText,
  HelperText,
  IconContainer,
  InputContainer,
  StyledInput,
} from './Input.styled';
import { InputProps } from './types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ helperText, icon, error, ...rest }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current!, []);

    const handleClick = () => {
      inputRef.current?.focus();
    };

    return (
      <BaseComponent onClick={handleClick}>
        {helperText && <HelperText>{helperText}</HelperText>}
        <InputContainer>
          <StyledInput ref={inputRef} {...rest} hasIcon={!!icon} />
          {icon && <IconContainer>{icon}</IconContainer>}
        </InputContainer>
        {error && <ErrorText>{error}</ErrorText>}
      </BaseComponent>
    );
  },
);
