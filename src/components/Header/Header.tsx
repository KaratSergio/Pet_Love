import Navbar from './Navbar/Navbar';

const Header: React.FC = () => {
  return (
    <div className="w-full max-w-[1280px] p-8 flex items-center justify-between">
      <p className="text-[28px]">petlove</p>
      <Navbar />
    </div>
  );
};

export default Header;
