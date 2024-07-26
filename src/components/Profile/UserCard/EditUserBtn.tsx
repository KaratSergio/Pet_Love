import CustomButton from '@components/Custom/Button';
import Icon from '@components/Icon/Icon';
import { useAppDispatch } from '@hooks/redux-hooks';
import { openModal } from '@redux/modal/modalSlice';

const EditUserBtn: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(openModal('EditProfile'));
  };

  return (
    <CustomButton
      type="button"
      onClick={handleOpenModal}
      className="absolute right-10 flex justify-center items-center bg-lightYellow rounded-full size-[38px]"
    >
      <Icon id="icon-edit" width="w-[18px]" height="h-[18px]" strokeColor="stroke-yellow" />
    </CustomButton>
  );
};

export default EditUserBtn;
