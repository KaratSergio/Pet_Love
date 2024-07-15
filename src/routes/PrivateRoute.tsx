import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@hooks/redux-hooks';
import { selectUser } from '@src/redux/users/users-selectors';

const PrivateRoute = () => {
  const user = useAppSelector(selectUser);

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
