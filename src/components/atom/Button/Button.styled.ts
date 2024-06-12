import styled from 'styled-components';
import { ButtonType } from './types';

export const BaseComponent = styled.button<{ buttonType: ButtonType }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 16px;
  background-color: ${({ buttonType }) => (buttonType === 'positive' ? '#4caf50' : '#ffffff')};
  border-color: #4caf50;
  border-style: solid;
  border-width: ${({ buttonType }) => (buttonType === 'positive' ? '0' : '2px')};
  border-radius: 8px;
  color: ${({ buttonType }) => (buttonType === 'positive' ? '#ffffff' : '#4caf50')};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.4;
  }
`;

BaseComponent.shouldForwardProp = (prop) => !['buttonType'].includes(prop);
