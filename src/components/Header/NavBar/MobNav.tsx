import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useAppSelector } from '@hooks/redux-hooks';
import { selectUser } from '@redux/users/users-selectors';

import Icon from '@components/Icon/Icon';
import AuthNav from './AuthNav';
import UserNav from './UserNav';

const MobNav: React.FC<{ className?: string }> = ({ className }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const user = useAppSelector(selectUser);

  return (
    <>
      {/* burger-btn */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 p-2 text-white rounded-full lg:hidden"
        aria-label="Open menu"
      >
        <Icon id="icon-menu" color="fill-white" />
      </button>

      {/* mob-menu*/}
      <div
        className={`fixed top-0 right-0 z-40 w-3/4 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${className}`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4 p-2 text-gray-800" aria-label="Close menu">
          <Icon id="icon-close" color="fill-black" />
        </button>
        <ul className="flex flex-col items-start p-4 font-medium">
          <li className={`mb-4 w-full ${isActive('/news') ? 'border-yellow' : 'border-gray-300'} border rounded-lg`}>
            <Link to="/news" className="block w-full px-5 py-3" onClick={toggleMenu}>
              News
            </Link>
          </li>
          <li className={`mb-4 w-full ${isActive('/notices') ? 'border-yellow' : 'border-gray-300'} border rounded-lg`}>
            <Link to="/notices" className="block w-full px-5 py-3" onClick={toggleMenu}>
              Find pet
            </Link>
          </li>
          <li className={`w-full ${isActive('/friends') ? 'border-yellow' : 'border-gray-300'} border rounded-lg`}>
            <Link to="/friends" className="block w-full px-5 py-3" onClick={toggleMenu}>
              Our friends
            </Link>
          </li>
        </ul>

        {user ? <UserNav className="flex flex-col p-4" /> : <AuthNav className="flex flex-col p-4" />}
      </div>
    </>
  );
};

export default MobNav;
