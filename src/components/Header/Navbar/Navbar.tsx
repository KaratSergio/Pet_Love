import { Link } from 'react-router-dom';
import { useAppSelector } from '@hooks/redux-hooks';
import { selectUser } from '@redux/auth/auth-selectors';

import LogoutButton from '../../Auth/LogoutButton';

const Navbar: React.FC = () => {
  const user = useAppSelector(selectUser);

  return (
    <ul className="flex max-w-[734px] w-full font-medium">
      <li className="mr-[10px] border rounded-[30px] px-5 py-[15px]">
        <Link to="/news">News</Link>
      </li>
      <li className="mr-[10px] border rounded-[30px] px-5 py-[15px]">
        <Link to="/notices">Find pet</Link>
      </li>
      <li className="mr-[142px] border rounded-[30px] px-5 py-[15px]">
        <Link to="/friends">Our friends</Link>
      </li>
      {user ? (
        <li>
          <LogoutButton className="rounded-30 mr-2 px-5 py-[15px] font-bold text-white bg-yellow" />
        </li>
      ) : (
        <li className="rounded-30 mr-2 px-5 py-[15px] font-bold text-white bg-yellow">
          <Link to="/login">LOG IN</Link>
        </li>
      )}
      {user ? (
        <li className="rounded-30 px-5 py-[15px] font-bold text-yellow bg-lightYellow">
          <Link to="/profile">MyProfile</Link>
        </li>
      ) : (
        <li className="rounded-30 px-5 py-[15px] font-bold text-yellow bg-lightYellow">
          <Link to="/registration">REGISTRATION</Link>
        </li>
      )}
    </ul>
  );
};

export default Navbar;
