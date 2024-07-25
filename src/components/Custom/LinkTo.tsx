import { Link } from 'react-router-dom';
import { LinkToProps } from './types';

const LinkTo: React.FC<LinkToProps> = ({ to, className, children }) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default LinkTo;
