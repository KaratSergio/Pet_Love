import { Link } from 'react-router-dom';

const AuthNav: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <ul className={`flex ${className}`}>
      <li className="rounded-30 mr-2 flex font-bold text-white bg-yellow hover:bg-lightYellow hover:text-yellow transition duration-300">
        <Link to="/login" className="px-5 py-[15px] h-[50px] flex items-center justify-center">
          LOG IN
        </Link>
      </li>
      <li className="rounded-30 flex font-bold text-yellow bg-lightYellow hover:bg-lightOrange transition duration-300">
        <Link to="/register" className="px-5 py-[15px] h-[50px] flex items-center justify-center">
          REGISTRATION
        </Link>
      </li>
    </ul>
  );
};

export default AuthNav;
