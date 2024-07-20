import Icon from '../../Icon/Icon';
import { Link } from 'react-router-dom';
import { LogoProps } from './types';

const Logo: React.FC<LogoProps> = ({ isHomePage }) => {
  return (
    <Link to="/home" className={`text-[28px] font-bold flex items-end text-center ${isHomePage ? 'text-white' : ''}`}>
      petl
      <Icon
        className="mx-[2px] mb-2"
        id="icon-like"
        color={isHomePage ? 'fill-white' : 'fill-yellow'}
        strokeColor={isHomePage ? 'stroke-white' : 'stroke-yellow'}
      />
      ve
    </Link>
  );
};

export default Logo;
