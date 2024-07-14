import { useLocation, Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Icon from '../Icon/Icon';

const Header: React.FC = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/home';

  return (
    <div
      className={`w-full max-w-[1280px] p-8 flex items-center justify-between ${
        isHomePage ? 'bg-yellow rounded-t-[60px]' : 'bg-orange-50'
      }`}
    >
      <Link to="/home" className="text-[28px] font-bold flex items-center">
        petl
        <Icon
          id="icon-like-on"
          color={isHomePage ? 'fill-white' : 'fill-yellow'}
          strokeColor={isHomePage ? 'stroke-white' : 'stroke-yellow'}
        />
        ve
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
