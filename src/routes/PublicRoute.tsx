import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@hooks/redux-hooks';
import { selectUser } from '@src/redux/users/users-selectors';

const PublicRoute = () => {
  const user = useAppSelector(selectUser);

  return user ? <Navigate to="/profile" replace /> : <Outlet />;
};

export default PublicRoute;
