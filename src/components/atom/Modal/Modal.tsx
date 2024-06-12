import { memo, type FC, type PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '@/assets/icons/close.svg';
import { CloseButton, ModalContent, Overlay } from './Modal.styled';
import { ModalProps } from './types';

export const Modal: FC<PropsWithChildren<ModalProps>> = memo(({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        {children}
      </ModalContent>
    </Overlay>,
    document.body,
  );
});
