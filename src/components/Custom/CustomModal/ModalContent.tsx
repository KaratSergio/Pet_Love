import { useAppSelector, useAppDispatch } from '@hooks/redux-hooks';
import { selectModalContent } from '@redux/modal/selectors';
import { closeModal } from '@redux/modal/modalSlice';

import ProfileEdit from '@components/Profile/ProfileEdit';

const ModalContent: React.FC = () => {
  const dispatch = useAppDispatch();
  const modalContent = useAppSelector(selectModalContent);

  const handleClose = () => {
    dispatch(closeModal());
  };

  if (!modalContent) return null;

  switch (modalContent.content) {
    case 'EditProfile':
      return <ProfileEdit onClose={handleClose} />;
    default:
      return null;
  }
};

export default ModalContent;
