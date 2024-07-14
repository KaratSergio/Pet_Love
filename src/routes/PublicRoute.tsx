import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@hooks/redux-hooks';
import { selectUser } from '@redux/auth/auth-selectors';

const PublicRoute = () => {
  const user = useAppSelector(selectUser);

  return user ? <Navigate to="/profile" replace /> : <Outlet />;
};

export default PublicRoute;
