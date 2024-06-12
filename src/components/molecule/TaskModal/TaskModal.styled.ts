import styled from 'styled-components';
import { Button } from '@/atom/Button';
import { TextArea } from '@/atom/TextArea';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  padding-top: 24px;
`;

export const TaskDescription = styled(TextArea)`
  width: 100%;

  textarea {
    resize: none;
  }
`;

export const SubmitButton = styled(Button)`
  align-self: center;
  width: 100%;
`;
