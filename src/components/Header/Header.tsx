import Navbar from './Navbar/Navbar';
import Icon from '../Icon/Icon';

const Header: React.FC = () => {
  return (
    <div className="w-full max-w-[1280px] bg-orange-50 p-8 flex items-center justify-between">
      <p className="text-[28px] font-bold">
        petl
        <Icon id="icon-like-on" color="fill-yellow" strokeColor="stroke-yellow" />
        ve
      </p>
      <Navbar />
    </div>
  );
};

export default Header;
