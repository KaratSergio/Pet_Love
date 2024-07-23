import { Link } from 'react-router-dom';

const AuthNav: React.FC = () => {
  return (
    <ul className="flex">
      <li className="rounded-30 mr-2 flex font-bold text-white bg-yellow hover:bg-lightYellow hover:text-yellow transition duration-300">
        <Link to="/login" className="px-5 py-[15px]">
          LOG IN
        </Link>
      </li>
      <li className="rounded-30 flex font-bold text-yellow bg-lightYellow hover:bg-lightOrange transition duration-300">
        <Link to="/register" className="px-5 py-[15px]">
          REGISTRATION
        </Link>
      </li>
    </ul>
  );
};

export default AuthNav;
