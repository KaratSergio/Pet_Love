import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <ul className="flex max-w-[734px] w-full">
      <li className="mr-[10px] border rounded-[30px] px-5 py-[15px]">
        <Link to="/news">News</Link>
      </li>
      <li className="mr-[10px] border rounded-[30px] px-5 py-[15px]">
        <Link to="/notices">Find pet</Link>
      </li>
      <li className="mr-[142px] border rounded-[30px] px-5 py-[15px]">
        <Link to="/friends">Our friends</Link>
      </li>
      <li className="border rounded-[30px] mr-2 px-5 py-[15px]">
        <Link to="/login">LOG IN</Link>
      </li>
      <li className="border rounded-[30px] px-5 py-[15px]">
        <Link to="/registration">REGISTRATION</Link>
      </li>
    </ul>
  );
};

export default Navbar;
