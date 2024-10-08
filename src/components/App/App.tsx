import { lazy } from 'react';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@hooks/redux-hooks';

import Modal from '../Custom/CustomModal/Modal';
import ModalContent from '../Custom/CustomModal/ModalContent';
import { closeModal, resetModal } from '@redux/modal/modalSlice';
import { selectModalIsVisible } from '@redux/modal/selectors';

import Layout from '../Layout/Layout';
import PrivateRoute from '@routes/PrivateRoute';
import PublicRoute from '@routes/PublicRoute';
import { Toaster } from 'react-hot-toast';

const Home = lazy(() => import('@pages/HomePage'));
const News = lazy(() => import('@pages/NewsPage'));
const Notices = lazy(() => import('@pages/NoticesPage'));
const Friends = lazy(() => import('@pages/FriendsPage'));
const Login = lazy(() => import('@pages/LoginPage'));
const Register = lazy(() => import('@pages/RegistrationPage'));
const Profile = lazy(() => import('@pages/ProfilePage'));
const AddPet = lazy(() => import('@pages/AddPetPage'));
const NotFound = lazy(() => import('@src/pages/NotFoundPage'));

function App() {
  const isVisible = useAppSelector(selectModalIsVisible);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetModal());
  }, [dispatch]);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route element={<PrivateRoute />}>
            <Route path="profile" element={<Profile />} />
            <Route path="add-pet" element={<AddPet />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="home" element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="notices" element={<Notices />} />
          <Route path="friends" element={<Friends />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <Modal isVisible={isVisible} onClose={handleClose}>
        <ModalContent />
      </Modal>
    </>
  );
}

export default App;
