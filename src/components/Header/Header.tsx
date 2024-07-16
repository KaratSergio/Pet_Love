import { useLocation } from 'react-router-dom';
import { useAppSelector } from '@hooks/redux-hooks';
import { selectUser } from '@redux/users/users-selectors';

import Logo from './NavBar/Logo';
import Nav from './NavBar/Nav';
import AuthNav from './NavBar/AuthNav';
import UserNav from './NavBar/UserNav';

const Header: React.FC = () => {
  const location = useLocation();
  const user = useAppSelector(selectUser);
  const isHomePage = location.pathname === '/home';

  return (
    <div
      className={`w-full max-w-[1280px] p-16 flex items-center justify-between ${
        isHomePage ? 'bg-yellow rounded-t-60' : 'bg-orange-50'
      }`}
    >
      <Logo isHomePage={isHomePage} />
      <Nav />
      {user ? <UserNav /> : <AuthNav />}
    </div>
  );
};

export default Header;
