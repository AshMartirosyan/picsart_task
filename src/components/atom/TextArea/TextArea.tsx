import { forwardRef, useImperativeHandle, useRef } from 'react';
import { BaseComponent, ErrorText, HelperText, StyledTextArea } from './TextArea.styled';
import type { TextAreaProps } from './types';

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ helperText, className, error, ...rest }, ref) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => textAreaRef.current!, []);

    const handleClick = () => {
      textAreaRef.current?.focus();
    };

    return (
      <BaseComponent className={className} onClick={handleClick}>
        {helperText && <HelperText>{helperText}</HelperText>}

        <StyledTextArea ref={textAreaRef} {...rest} />
        {error && <ErrorText>{error}</ErrorText>}
      </BaseComponent>
    );
  },
);
