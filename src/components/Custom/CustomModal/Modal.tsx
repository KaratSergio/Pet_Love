import { useEffect } from 'react';
import { CustomModalProps } from '../types';
import Icon from '@components/Icon/Icon';
import CustomButton from '../Button';

const Modal: React.FC<CustomModalProps> = ({ isVisible, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isVisible) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-10 bg-gray-500 bg-opacity-25"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-30 overflow-hidden shadow-xl transform transition-all relative">
        <div>{children}</div>
        <div className="absolute top-0 right-0 m-5">
          <CustomButton onClick={onClose} type="button" className="w-5 h-5 ">
            <Icon id="icon-close" strokeColor="stroke-black" width="w-6" height="h-6" />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;
