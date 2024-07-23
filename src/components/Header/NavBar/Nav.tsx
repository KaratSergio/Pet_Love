import { Link, useLocation } from 'react-router-dom';

const Nav: React.FC<{ className?: string }> = ({ className }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';
  const linkClasses = isHomePage ? 'text-white border-lightWhite' : 'border-navBorder';
  const isActive = (path: string) => location.pathname === path;

  return (
    <ul className={`flex font-medium ${className}`}>
      <li
        className={`mr-[10px] flex border rounded-30 ${
          isActive('/news') ? 'border-yellow' : linkClasses
        } hover:border-yellow focus:border-yellow`}
      >
        <Link to="/news" className="px-5 py-[15px]">
          News
        </Link>
      </li>
      <li
        className={`mr-[10px] flex border rounded-30 ${
          isActive('/notices') ? 'border-yellow' : linkClasses
        } hover:border-yellow focus:border-yellow`}
      >
        <Link to="/notices" className="px-5 py-[15px]">
          Find pet
        </Link>
      </li>
      <li
        className={`border flex rounded-30 ${
          isActive('/friends') ? 'border-yellow' : linkClasses
        } hover:border-yellow focus:border-yellow`}
      >
        <Link to="/friends" className="px-5 py-[15px]">
          Our friends
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
