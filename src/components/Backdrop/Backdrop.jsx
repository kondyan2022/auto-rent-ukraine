import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { ModalOverlay } from './Backdrop.styled';

const Backdrop = ({
  closeOnClick = true,
  closeOnEscape = true,
  closeModal,
  loader = false,
  children,
}) => {
  const modalRoot = useRef(document.querySelector('#root-modal'));

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === 'Escape' && closeOnClick) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    disablePageScroll();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      enablePageScroll();
    };
  }, [closeModal, closeOnClick]);

  return createPortal(
    <ModalOverlay
      loader={loader}
      onClick={(e) => {
        if (e.target === e.currentTarget && closeOnEscape) {
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
