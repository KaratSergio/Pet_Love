import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from '@helpers/Loader';
import Layout from '../Layout/Layout';

// import PrivateRoute from '@routes/PrivateRoute';

const Home = lazy(() => import('@pages/HomePage'));
const News = lazy(() => import('@pages/NewsPage'));
const Notices = lazy(() => import('@pages/NoticesPage'));
const Friends = lazy(() => import('@pages/FriendsPage'));
const Login = lazy(() => import('@pages/LoginPage'));
const Registration = lazy(() => import('@pages/RegistrationPage'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader loading={true} />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="notices" element={<Notices />} />
            <Route path="friends" element={<Friends />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
