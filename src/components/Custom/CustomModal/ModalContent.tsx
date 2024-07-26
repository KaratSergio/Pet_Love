import { useAppSelector, useAppDispatch } from '@hooks/redux-hooks';
import { selectModalContent } from '@redux/modal/selectors';
import { closeModal } from '@redux/modal/modalSlice';

import ModalEditUser from '../../Profile/UserCard/ModalEditUser/ModalEditUser';

const ModalContent: React.FC = () => {
  const dispatch = useAppDispatch();
  const modalContent = useAppSelector(selectModalContent);

  const handleClose = () => {
    dispatch(closeModal());
  };

  if (!modalContent) return null;

  switch (modalContent.content) {
    case 'EditProfile':
      return <ModalEditUser onClose={handleClose} />;
    default:
      return null;
  }
};

export default ModalContent;
