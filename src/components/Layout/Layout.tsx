import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout: React.FC = () => {
  return (
    <div className="m-auto max-w-desktop p-8">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
