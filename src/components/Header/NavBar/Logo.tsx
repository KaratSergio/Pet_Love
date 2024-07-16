import Icon from '../../Icon/Icon';
import { Link } from 'react-router-dom';
import { LogoProps } from './types';

const Logo: React.FC<LogoProps> = ({ isHomePage }) => {
  return (
    <Link to="/home" className={`text-[28px] font-bold flex items-center ${isHomePage ? 'text-white' : ''}`}>
      petl
      <Icon
        className="mx-[2px]"
        id="icon-like"
        color={isHomePage ? 'fill-white' : 'fill-yellow'}
        strokeColor={isHomePage ? 'stroke-white' : 'stroke-yellow'}
      />
      ve
    </Link>
  );
};

export default Logo;
