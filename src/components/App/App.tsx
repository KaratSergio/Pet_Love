import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import PrivateRoute from '@routes/PrivateRoute';
// import Navbar from '../Navbar/Navbar';
import Loader from '@helpers/Loader';

const Home = lazy(() => import('@pages/HomePage'));
const Notices = lazy(() => import('@pages/NoticesPage'));
const News = lazy(() => import('@pages/NewsPage'));

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Suspense fallback={<Loader loading={true} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Notices" element={<Notices />} />
          <Route path="/News" element={<News />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
