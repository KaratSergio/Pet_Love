import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Loader from '@helpers/Loader';
import { Suspense } from 'react';

const Layout: React.FC = () => {
  return (
    <div className="m-auto max-w-desktop">
      <Header />
      <Suspense fallback={<Loader loading={true} />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
