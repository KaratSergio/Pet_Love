import { useAppDispatch } from '@hooks/redux-hooks';
import { signOutUser } from '@redux/auth/auth-thunk';

const LogoutButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(signOutUser());
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
