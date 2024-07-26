import EditUserBtn from './EditUserBtn';
import UserBlock from './UserBlock';
import PetsBlock from './PetsBlock/PetsBlock';

import LogOutBtn from '@components/Auth/LogOutBtn';
import Icon from '@components/Icon/Icon';

const UserCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-[520px] bg-white rounded-60 p-10">
      <div className="flex">
        <div className="absolute flex gap-1 px-[14px] py-[10px] bg-yellow rounded-30">
          <p className="font-medium text-sm text-white">User</p>
          <Icon id="icon-user" width="w-[18px]" height="h-[18px]" color="fill-white" strokeColor="stroke-white" />
        </div>
        <EditUserBtn />
      </div>
      <UserBlock />
      <PetsBlock />
      <LogOutBtn className="mt-20 flex items-center justify-center px-[35px] py-[15px] h-[50px] bg-lightYellow rounded-30 font-bold text-yellow" />
    </div>
  );
};

export default UserCard;
