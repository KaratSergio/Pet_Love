import { useLocation } from 'react-router-dom';
import { useAppSelector } from '@hooks/redux-hooks';
import { selectUser } from '@redux/users/users-selectors';

import Logo from './NavBar/Logo';
import Nav from './NavBar/Nav';
import AuthNav from './NavBar/AuthNav';
import UserNav from './NavBar/UserNav';
import MobNav from './NavBar/MobNav';

const Header: React.FC = () => {
  const location = useLocation();
  const user = useAppSelector(selectUser);
  const isHomePage = location.pathname === '/home';

  return (
    <div
      className={`w-full max-w-[1280px] p-8 flex items-center justify-between ${
        isHomePage ? 'bg-yellow rounded-t-60' : 'bg-orange-50'
      }`}
    >
      <Logo isHomePage={isHomePage} />
      <Nav className="hidden lg:flex" />
      {user ? <UserNav className="hidden sm:flex" /> : <AuthNav className="hidden sm:flex sm:mr-[54px]" />}
      <MobNav className="block lg:hidden" />
    </div>
  );
};

export default Header;
