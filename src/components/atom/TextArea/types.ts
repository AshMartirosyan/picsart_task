import { TextareaHTMLAttributes } from 'react';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  helperText?: string;
  error?: string;
}
