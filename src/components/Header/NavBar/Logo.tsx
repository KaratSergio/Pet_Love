import Icon from '../../Icon/Icon';
import { Link } from 'react-router-dom';
import { LogoProps } from './types';

const Logo: React.FC<LogoProps> = ({ isHomePage }) => {
  return (
    <Link
      to="/home"
      className={`text-xl sm:text-[28px] h-10 sm:h-[50px] font-bold flex items-center text-center ${
        isHomePage ? 'text-white' : ''
      }`}
    >
      petl
      <Icon
        className="mx-[2px] mt-[2px] w-[14px] h-[12px] sm:w-[18px] sm:h-[16px] sm:mt-1"
        id="icon-like"
        color={isHomePage ? 'fill-white' : 'fill-yellow'}
        strokeColor={isHomePage ? 'stroke-white' : 'stroke-yellow'}
      />
      ve
    </Link>
  );
};

export default Logo;
