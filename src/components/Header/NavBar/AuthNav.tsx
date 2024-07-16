import { Link } from 'react-router-dom';

const AuthNav: React.FC = () => {
  return (
    <ul className="flex">
      <li className="rounded-30 mr-2 px-5 py-[15px] font-bold text-white bg-yellow">
        <Link to="/login">LOG IN</Link>
      </li>
      <li className="rounded-30 px-5 py-[15px] font-bold text-yellow bg-lightYellow">
        <Link to="/registration">REGISTRATION</Link>
      </li>
    </ul>
  );
};

export default AuthNav;
