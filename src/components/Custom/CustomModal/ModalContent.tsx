import { useAppSelector } from '@hooks/redux-hooks';
import { selectModalContent } from '@redux/modal/selectors';

import ProfileEdit from '@components/Profile/ProfileEdit';

const ModalContent: React.FC = () => {
  const modalContent = useAppSelector(selectModalContent);

  if (!modalContent) return null;

  switch (modalContent.content) {
    case 'EditProfile':
      return <ProfileEdit />;
    default:
      return null;
  }
};

export default ModalContent;
