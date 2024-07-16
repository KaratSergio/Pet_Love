import { Link, useLocation } from 'react-router-dom';

const Nav: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';
  const linkClasses = isHomePage ? 'text-white border-lightWhite' : 'border-navBorder';

  return (
    <ul className="flex font-medium">
      <li className={`mr-[10px] border rounded-30 px-5 py-[15px] ${linkClasses}`}>
        <Link to="/news">News</Link>
      </li>
      <li className={`mr-[10px] border rounded-30 px-5 py-[15px] ${linkClasses}`}>
        <Link to="/notices">Find pet</Link>
      </li>
      <li className={`border rounded-30 px-5 py-[15px] ${linkClasses}`}>
        <Link to="/friends">Our friends</Link>
      </li>
    </ul>
  );
};

export default Nav;
