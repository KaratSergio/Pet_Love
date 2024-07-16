import { useEffect } from 'react';
import Icon from '../Icon/Icon';
import { Link } from 'react-router-dom';
import { fetchCurrentUserFull } from '@redux/users/users-thunk';
import { selectUser } from '@redux/users/users-selectors';

import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import { openModal } from '@redux/modal/modalSlice';

import LogOutBtn from '../Auth/LogOutBtn';
import CustomButton from '../Custom/Button';

const ProfileCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    dispatch(fetchCurrentUserFull());
  }, [dispatch]);

  const handleOpenModal = () => {
    dispatch(openModal('EditProfile'));
  };

  return (
    <div className="w-full max-w-[520px] bg-white rounded-60 p-10">
      <div className="flex items-start">
        <div className="mr-[85px] flex gap-1 px-[14px] py-[10px] bg-yellow rounded-30">
          <p className="font-medium text-sm text-white">User</p>
          <Icon id="icon-user" width="w-[18px]" height="h-[18px]" color="fill-white" strokeColor="stroke-white" />
        </div>
        <div className="mr-[127px] flex flex-col gap-2">
          <div className="flex justify-center items-center bg-lightYellow rounded-full size-[110px]">
            {user?.avatar ? (
              <img src={user.avatar} alt="User Avatar" className="rounded-full w-[110px] h-[110px] object-cover" />
            ) : (
              <Icon
                id="icon-user-photo"
                width="w-[50px]"
                height="h-[50px]"
                color="fill-yellow"
                strokeColor="stroke-yellow"
              />
            )}
          </div>
          <p className="text-sm text-center underline font-medium">Upload photo</p>
        </div>
        <CustomButton
          type="button"
          onClick={handleOpenModal}
          className="flex justify-center items-center bg-lightYellow rounded-full size-[38px]"
        >
          <Icon id="icon-edit" width="w-[18px]" height="h-[18px]" strokeColor="stroke-yellow" />
        </CustomButton>
      </div>
      <div className="mt-5">
        <p className="font-bold text-lg">My information</p>
        <ul className="mt-5 w-full flex flex-col gap-[14px]">
          <li className="flex items-center border border-lightBlack rounded-30 h-[52px] p-4">{user?.name || 'Name'}</li>
          <li className="flex items-center border border-lightBlack rounded-30 h-[52px] p-4">
            {user?.email || 'Email'}
          </li>
          <li className="flex items-center border border-lightBlack rounded-30 h-[52px] p-4">
            {user?.phone || '+380'}
          </li>
        </ul>
      </div>

      <div className="flex justify-between items-center mt-10">
        <p className="font-bold text-lg">My pets</p>
        <Link
          to="/AddPet"
          className="flex gap-1 items-center rounded-30 px-5 py-[10px] font-medium text-white bg-yellow"
        >
          Add pet
          <Icon id="icon-plus" strokeColor="stroke-white" />
        </Link>
      </div>
      <LogOutBtn className="mt-20 px-[35px] py-[15px] bg-lightYellow rounded-30 font-bold text-yellow" />
    </div>
  );
};

export default ProfileCard;
