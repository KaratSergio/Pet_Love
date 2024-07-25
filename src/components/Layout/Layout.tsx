import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Loader from '@helpers/Loader';
import { Suspense } from 'react';

const Layout: React.FC = () => {
  return (
    <div className="m-auto max-w-desktop py-[10px] px-5 sm:px-8 sm:py-4">
      <Header />
      <Suspense fallback={<Loader loading={true} />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
