import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileSchema } from '@schemas/profileSchema';

import CustomInput from '../Custom/Input';
import { ProfileFormInput } from './types';

const ProfileEdit: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormInput>({
    resolver: yupResolver(profileSchema),
  });

  const onSubmit: SubmitHandler<ProfileFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col">
      <p>Edit information</p>
      <div className="rounded-full w-[86px] h-[86px] bg-lightYellow">Photo</div>
      <div className="flex">
        <div>path photo</div>
        <div>Upload photo</div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput placeholder="Name" register={register('name')} error={errors.name} />
        <CustomInput placeholder="name@gmail.com" register={register('email')} error={errors.email} />
        <CustomInput placeholder="+380" register={register('phoneNumber')} error={errors.phoneNumber} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProfileEdit;
