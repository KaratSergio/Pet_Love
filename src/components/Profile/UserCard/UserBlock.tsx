import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@hooks/redux-hooks';
import { fetchCurrentUserFull } from '@redux/users/users-thunk';
import { selectUser } from '@redux/users/users-selectors';
import Icon from '@components/Icon/Icon';

const UserBlock: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    dispatch(fetchCurrentUserFull());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex ml-[165px] mr-[127px] justify-center items-center bg-lightYellow rounded-full size-[110px]">
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
      <p className="text-sm underline text-center font-medium">Upload photo</p>
      <div className="mt-5 w-full">
        <p className="font-bold text-lg">My information</p>
        <ul className="mt-5 w-full flex flex-col gap-[14px]">
          <li className="flex items-center border border-navBorder rounded-30 h-[52px] p-4">{user?.name || 'Name'}</li>
          <li className="flex items-center border border-navBorder rounded-30 h-[52px] p-4">
            {user?.email || 'Email'}
          </li>
          <li className="flex items-center border border-navBorder rounded-30 h-[52px] p-4">{user?.phone || '+380'}</li>
        </ul>
      </div>
    </div>
  );
};

export default UserBlock;
