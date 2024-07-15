import { useState, useRef } from 'react';
import { useForm, SubmitHandler, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileSchema } from '@schemas/profileSchema';
import { ProfileFormInput } from './types';

import { useAppDispatch } from '@hooks/redux-hooks';
import { updateCurrentUser } from '@redux/users/users-thunk';

import CustomInput from '../Custom/Input';
import CustomButton from '../Custom/Button';
import Icon from '../Icon/Icon';

const ProfileEdit: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProfileFormInput>({
    resolver: yupResolver(profileSchema) as Resolver<ProfileFormInput>,
  });

  const onSubmit: SubmitHandler<ProfileFormInput> = (data) => {
    const formData = new FormData();

    formData.append('name', data.name || '');
    formData.append('email', data.email || '');
    formData.append('phone', data.phoneNumber || '');
    if (data.photoFile && data.photoFile.length > 0) {
      formData.append('avatar', data.photoFile[0]);
    }

    dispatch(updateCurrentUser(formData));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setValue('photoFile', files);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col p-[50px] w-[480px] rounded-30">
      <p className="text-lg font-bold mb-5">Edit information</p>
      <div className="rounded-full size-[86px] m-auto flex items-center justify-center bg-lightYellow">
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="rounded-full w-[86px] h-[86px]"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        ) : (
          <Icon
            id="icon-user-photo"
            width="w-[40px]"
            height="h-[40px]"
            color="fill-yellow"
            strokeColor="stroke-yellow"
          />
        )}
      </div>
      <div className="flex gap-2 mt-3">
        <CustomInput
          className="border-yellow w-[216px] h-[42px]"
          placeholder="Path to photo"
          register={register('photoPath')}
          error={errors.photoPath}
        />

        <input ref={fileInputRef} type="file" onChange={handleFileChange} className="hidden" />

        <button
          type="button"
          onClick={handleButtonClick}
          className="flex gap-2 items-center bg-lightYellow rounded-30 px-4 py-3 text-sm"
        >
          Upload photo
          <Icon id="icon-upload-cloud" strokeColor="stroke-yellow" />
        </button>
        {errors.photoFile && <p className="text-red-500">{errors.photoFile.message}</p>}
      </div>
      <div className="flex flex-col mt-5 gap-[14px]">
        <form className="flex flex-col gap-[14px]" onSubmit={handleSubmit(onSubmit)}>
          <CustomInput className="border-yellow" placeholder="Name" register={register('name')} error={errors.name} />
          <CustomInput
            className="border-yellow"
            placeholder="name@gmail.com"
            register={register('email')}
            error={errors.email}
          />
          <CustomInput
            className="border-yellow"
            placeholder="+380"
            register={register('phoneNumber')}
            error={errors.phoneNumber}
          />
          <CustomButton className="w-full text-white bg-yellow py-4 rounded-30" type="submit">
            Save
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
