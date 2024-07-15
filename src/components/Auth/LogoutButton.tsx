import { useAppDispatch } from '@hooks/redux-hooks';
import { signOutUser } from '@redux/auth/auth-thunk';
import { LogoutButtonProps } from './types';

const LogoutButton: React.FC<LogoutButtonProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(signOutUser());
  };

  return (
    <button onClick={handleLogout} className={className}>
      LOG OUT
    </button>
  );
};

export default LogoutButton;
