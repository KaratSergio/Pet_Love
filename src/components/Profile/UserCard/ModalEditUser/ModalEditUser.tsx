import { useState, useRef, useEffect } from 'react';
import { useForm, SubmitHandler, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileSchema } from '@schemas/profileSchema';

import { ProfileFormInput, ProfileEditProps } from '../../types';
import { selectUser } from '@redux/users/users-selectors';
import { updateCurrentUser } from '@redux/users/users-thunk';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';

import CustomInput from '@components/Custom/Input';
import CustomButton from '@components/Custom/Button';
import Icon from '@components/Icon/Icon';

const ModalEditUser: React.FC<ProfileEditProps> = ({ onClose }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [cloudinaryImageUrl, setCloudinaryImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectUser);

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
      setPreview(null);
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
      const uploadUrl = `${import.meta.env.VITE_CLOUDINARY_URL}/upload`;

      const uploadFormData = new FormData();
      uploadFormData.append('file', file);
      uploadFormData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_PRESET as string);

      try {
        const uploadResponse = await fetch(uploadUrl, {
          method: 'POST',
          body: uploadFormData,
        });

        if (!uploadResponse.ok) {
          console.error('Upload response:', uploadResponse);
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
    onClose();
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

  const currentAvatarUrl = currentUser?.avatar || '';
  const previewImg = preview || currentAvatarUrl;

  return (
    <div className="flex flex-col p-[50px] w-[480px] rounded-30">
      <p className="text-lg font-bold mb-5">Edit information</p>
      <div className="rounded-full w-[86px] h-[86px] m-auto flex items-center justify-center bg-lightYellow overflow-hidden">
        {previewImg ? (
          <img src={previewImg} className="w-full h-full object-cover" alt="User Avatar" />
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
      <div className="flex gap-2 mt-3">
        {cloudinaryImageUrl && (
          <input
            type="text"
            value={cloudinaryImageUrl}
            readOnly
            className="py-3 pr-5 pl-3 border border-yellow h-[42px] w-[220px] rounded-full overflow-hidden text-ellipsis whitespace-nowrap"
          />
        )}
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
          <CustomButton className="w-full h-[52px] text-white bg-yellow py-4 rounded-30" type="submit">
            Save
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default ModalEditUser;
