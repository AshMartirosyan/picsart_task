import styled from 'styled-components';
import { IconButton } from '../Button';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100000;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.card};
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 0 20px;
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: -10px;
  right: -10px;
`;
