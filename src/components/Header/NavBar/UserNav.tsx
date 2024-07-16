import { useLocation } from 'react-router-dom';
import LogOutBtn from '../../Auth/LogOutBtn';
import UserBar from './UserBar';

const UserNav: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';
  const isVisible = isHomePage ? 'hidden' : '';

  return (
    <ul className="flex">
      <li>
        <LogOutBtn className={`rounded-30 mr-2 px-5 py-[15px] font-bold text-white bg-yellow ${isVisible}`} />
      </li>
      <li>
        <UserBar />
      </li>
    </ul>
  );
};

export default UserNav;
