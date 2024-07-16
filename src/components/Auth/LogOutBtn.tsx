import { useAppDispatch } from '@hooks/redux-hooks';
import { signOutUser } from '@redux/users/users-thunk';
import { LogoutButtonProps } from './types';

const LogOutBtn: React.FC<LogoutButtonProps> = ({ className }) => {
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

export default LogOutBtn;
