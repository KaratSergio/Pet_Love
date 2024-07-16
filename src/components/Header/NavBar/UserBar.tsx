import Icon from '../../Icon/Icon';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '@hooks/redux-hooks';
import { selectUser } from '@redux/users/users-selectors';

const UserBar: React.FC = () => {
  const user = useAppSelector(selectUser);
  const location = useLocation();
  const isHomePage = location.pathname === '/home';
  const linkClasses = isHomePage ? 'text-white' : '';

  return (
    <Link to="/profile" className={`flex items-center font-bold text-xl gap-2 ${linkClasses}`}>
      {' '}
      <div className="flex justify-center items-center bg-lightYellow rounded-full size-[50px]">
        {user?.avatar ? (
          <img src={user.avatar} alt="User Avatar" className="rounded-full w-[50px] h-[50px] object-cover" />
        ) : (
          <Icon id="icon-user-photo" width="w-6" height="h-6" color="fill-yellow" strokeColor="stroke-yellow" />
        )}
      </div>
      {user?.name}
    </Link>
  );
};

export default UserBar;
