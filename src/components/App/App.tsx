import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@hooks/redux-hooks';
import Loader from '@helpers/Loader';
import Layout from '../Layout/Layout';

import Modal from '../Custom/CustomModal/Modal';
import ModalContent from '../Custom/CustomModal/ModalContent';
import { closeModal } from '@redux/modal/modalSlice';
import { selectModalIsVisible } from '@redux/modal/selectors';

import PrivateRoute from '@routes/PrivateRoute';
import PublicRoute from '@routes/PublicRoute';

const Home = lazy(() => import('@pages/HomePage'));
const News = lazy(() => import('@pages/NewsPage'));
const Notices = lazy(() => import('@pages/NoticesPage'));
const Friends = lazy(() => import('@pages/FriendsPage'));
const Login = lazy(() => import('@pages/LoginPage'));
const Registration = lazy(() => import('@pages/RegistrationPage'));
const Profile = lazy(() => import('@pages/ProfilePage'));

function App() {
  const isVisible = useAppSelector(selectModalIsVisible);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Suspense fallback={<Loader loading={true} />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route element={<PrivateRoute />}>
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="login" element={<Login />} />
              <Route path="registration" element={<Registration />} />
            </Route>
            <Route path="home" element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="notices" element={<Notices />} />
            <Route path="friends" element={<Friends />} />
          </Route>
        </Routes>
      </Suspense>

      <Modal isVisible={isVisible} onClose={handleClose}>
        <ModalContent />
      </Modal>
    </>
  );
}

export default App;
