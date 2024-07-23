import { useState, useRef, useEffect } from 'react';
import { useForm, SubmitHandler, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileSchema } from '@schemas/profileSchema';

import { ProfileFormInput } from './types';
import { selectUser } from '@redux/users/users-selectors';
import { updateCurrentUser } from '@redux/users/users-thunk';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';

import CustomInput from '../Custom/Input';
import CustomButton from '../Custom/Button';
import Icon from '../Icon/Icon';

import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

const cloudURL = import.meta.env.VITE_CLOUDINARY_URL;
const presetKey = import.meta.env.VITE_CLOUDINARY_PRESET;

const ProfileEdit: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [cloudinaryImageUrl, setCloudinaryImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectUser);

  const cld = new Cloudinary({ cloud: { cloudName: 'ddsnh5o3h' } });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProfileFormInput>({
    resolver: yupResolver(profileSchema) as Resolver<ProfileFormInput>,
  });

  useEffect(() => {
    if (currentUser) {
      setValue('name', currentUser.name || '');
      setValue('email', currentUser.email || '');
      setValue('phone', currentUser.phone || '');
      setCloudinaryImageUrl(currentUser.avatar || null);
    }
  }, [currentUser, setValue]);

  const onSubmit: SubmitHandler<ProfileFormInput> = async (data) => {
    const payload: { name: string; email: string; phone: string; avatar?: string } = {
      name: data.name || '',
      email: data.email || '',
      phone: data.phone || '',
    };

    if (data.avatar && data.avatar.length > 0) {
      const file = data.avatar[0];
      const uploadUrl = `${cloudURL}/upload`;

      const uploadFormData = new FormData();
      uploadFormData.append('file', file);
      uploadFormData.append('upload_preset', presetKey as string);

      try {
        const uploadResponse = await fetch(uploadUrl, {
          method: 'POST',
          body: uploadFormData,
        });

        if (!uploadResponse.ok) {
          throw new Error('Failed to upload image');
        }

        const uploadData = await uploadResponse.json();
        const avatarUrl = uploadData.secure_url;

        payload.avatar = avatarUrl;
        setCloudinaryImageUrl(avatarUrl);
      } catch (error) {
        console.error(error);
      }
    }

    dispatch(updateCurrentUser(payload));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setValue('avatar', files);
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

  const img = cld
    .image(cloudinaryImageUrl || 'smile')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(500).height(500));

  return (
    <div className="flex flex-col p-[50px] w-[480px] rounded-30">
      <p className="text-lg font-bold mb-5">Edit information</p>
      <div className="rounded-full size-[86px] m-auto flex items-center justify-center bg-lightYellow">
        {preview || cloudinaryImageUrl ? (
          <AdvancedImage cldImg={img} className="rounded-full w-[86px] h-[86px]" />
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
        <input ref={fileInputRef} type="file" onChange={handleFileChange} className="hidden" />
        <button
          type="button"
          onClick={handleButtonClick}
          className="flex gap-2 h-[42px] w-[152px] items-center bg-lightYellow rounded-30 px-4 py-3 text-sm"
        >
          Upload photo
          <Icon id="icon-upload-cloud" strokeColor="stroke-yellow" />
        </button>
        {errors.avatar && <p className="text-red-500">{errors.avatar.message}</p>}
      </div>
      <div className="flex flex-col mt-5 gap-[14px]">
        <form className="flex flex-col gap-[14px]" onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            className="border-yellow h-[52px]"
            placeholder="Name"
            register={register('name')}
            error={errors.name}
          />
          <CustomInput
            className="border-yellow h-[52px]"
            placeholder="name@gmail.com"
            register={register('email')}
            error={errors.email}
          />
          <CustomInput
            className="border-yellow h-[52px]"
            placeholder="+380"
            register={register('phone')}
            error={errors.phone}
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
