import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = ({ onClose, children, className }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const disableScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    const enableScroll = () => {
      document.body.style.overflow = '';
    };

    window.addEventListener('keydown', handleEsc);
    disableScroll();

    return () => {
      window.removeEventListener('keydown', handleEsc);
      enableScroll();
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="fixed z-50 inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center" onClick={onClose}>
      <div
        className={`bg-white relative max-w-[600px] rounded-30 w-full p-16 modal-mob modal-pad ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute flex justify-center items-center top-5 right-5 text-4xl h-8 w-8" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};

export default Modal;
