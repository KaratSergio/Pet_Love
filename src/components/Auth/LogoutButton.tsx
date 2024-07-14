import { useAppDispatch } from '@hooks/redux-hooks';
import { signOutUser } from '@redux/auth/auth-thunk';

const LogoutButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(signOutUser());
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">
      Logout
    </button>
  );
};

export default LogoutButton;
