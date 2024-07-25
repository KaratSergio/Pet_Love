import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useAppSelector } from '@hooks/redux-hooks';
import { selectUser } from '@redux/users/users-selectors';

import Icon from '@components/Icon/Icon';
import AuthNav from './AuthNav';
import UserNav from './UserNav';

const MobNav: React.FC<{ className?: string }> = ({ className }) => {
  const user = useAppSelector(selectUser);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const location = useLocation();
  const isHomePage = location.pathname === '/home';
  const isActive = (path: string) => location.pathname === path;

  const bgClass = !isHomePage ? 'bg-yellow' : 'bg-white';
  const closeIconStroke = !isHomePage ? 'stroke-white' : 'stroke-black';
  const menuIconStroke = isHomePage ? 'stroke-white' : 'stroke-black';
  const textClass = !isHomePage ? 'text-white' : 'text-mainBlack';

  const getLinkClasses = (path: string) => {
    const activeClass = isActive(path) ? (!isHomePage ? 'border-white' : 'border-yellow') : 'border-gray-300';
    return `border rounded-30 ${activeClass} ${textClass}`;
  };

  return (
    <>
      {/* burger-btn */}
      <button
        onClick={toggleMenu}
        className="absolute top-8 right-10 sm:right-[60px] sm:top-[40px]  text-white rounded-full lg:hidden"
        aria-label="Open menu"
      >
        <Icon id="icon-menu" strokeColor={menuIconStroke} width="w-8" height="h-8" />
      </button>

      {/* mob-menu */}
      <div
        className={`flex flex-col items-center justify-end py-10 w-[218px] sm:w-[374px] fixed top-0 right-0 z-40 h-full shadow-lg transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${className} ${bgClass}`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4 p-2" aria-label="Close menu">
          <Icon id="icon-close" strokeColor={closeIconStroke} width="w-8" height="h-8" />
        </button>

        <ul className="flex flex-col gap-[10px] marker:font-medium">
          <li className={getLinkClasses('/news')}>
            <Link to="/news" className="flex justify-center items-center px-5 py-[15px] h-[50px]" onClick={toggleMenu}>
              News
            </Link>
          </li>
          <li className={getLinkClasses('/notices')}>
            <Link
              to="/notices"
              className="flex justify-center items-center px-5 py-[15px] h-[50px]"
              onClick={toggleMenu}
            >
              Find pet
            </Link>
          </li>
          <li className={getLinkClasses('/friends')}>
            <Link
              to="/friends"
              className="flex justify-center items-center px-5 py-[15px] h-[50px]"
              onClick={toggleMenu}
            >
              Our friends
            </Link>
          </li>
        </ul>

        {user ? (
          <UserNav className="mt-[395px]" />
        ) : (
          <AuthNav className="mt-[395px] flex flex-col items-center gap-2 sm:flex-row sm:gap-[10px]" />
        )}
      </div>
    </>
  );
};

export default MobNav;
