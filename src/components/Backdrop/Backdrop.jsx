import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { ModalOverlay } from './Backdrop.styled';

const Backdrop = ({ closeModal, children }) => {
  const modalRoot = useRef(document.querySelector('#root-modal'));

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    disablePageScroll();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      enablePageScroll();
    };
  }, [closeModal]);

  return createPortal(
    <ModalOverlay
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      {children}
    </ModalOverlay>,
    modalRoot.current,
  );
};

export default Backdrop;
