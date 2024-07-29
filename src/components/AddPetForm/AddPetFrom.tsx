import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, Resolver, FieldError } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addPetSchema } from '@src/schemas/addPetSchemas';

import CustomInput from '../Custom/Input';
import CustomButton from '../Custom/Button';
import RadioButtons from './RadioButtons';
import Icon from '@components/Icon/Icon';
import DateInput from '../Custom/DateInput';
import SelectInput from '../Custom/SelectInput';

interface PetFormInputs {
  title: string;
  name: string;
  imgURL: string;
  species: string;
  birthday: string;
  sex: string;
  avatar?: FileList;
}

const AddPetForm: React.FC = () => {
  const [sexPet, setSexPet] = useState<string>('female');
  const [preview, setPreview] = useState<string | null>(null);
  const [cloudinaryImageUrl, setCloudinaryImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<PetFormInputs>({
    resolver: yupResolver(addPetSchema) as Resolver<PetFormInputs>,
  });

  const onSubmit: SubmitHandler<PetFormInputs> = async (data) => {
    data.sex = sexPet;

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

        data.imgURL = avatarUrl;
        setCloudinaryImageUrl(avatarUrl);
      } catch (error) {
        console.error(error);
      }
    }

    console.log(data);
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

  const previewImg = preview || cloudinaryImageUrl;

  const handleBack = () => {
    navigate('/profile');
  };

  return (
    <div className="relative w-[592px] h-[654px] bg-white rounded-60 py-[60px] px-20">
      <h2 className="font-bold text-[32px] mb-16 leading-[18px] tracking-[-0.02em]">
        Add my pet / <span className="text-lightGrey ml-2 text-base">Personal details</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="">
        <RadioButtons className="absolute top-[130px]" setSexPet={setSexPet} />

        <div className="rounded-full size-[86px] m-auto flex items-center justify-center bg-lightYellow overflow-hidden">
          {previewImg ? (
            <img src={previewImg} className="w-full h-full object-cover" alt="Pet Avatar" />
          ) : (
            <Icon
              id="icon-paw-print"
              width="w-[44px]"
              height="h-[44px]"
              color="fill-yellow"
              strokeColor="stroke-yellow"
            />
          )}
        </div>

        <div className="flex gap-2 mt-3 mb-[18px] justify-between">
          <input
            type="text"
            value={cloudinaryImageUrl || ''}
            placeholder="Enter URL"
            readOnly
            className="py-3 pr-5 pl-3 border h-[42px] w-[278px] rounded-full overflow-hidden text-ellipsis whitespace-nowrap"
          />
          <input ref={fileInputRef} type="file" onChange={handleFileChange} className="hidden" />
          <button
            type="button"
            onClick={handleButtonClick}
            className="flex gap-2 h-[42px] w-[150px] items-center bg-lightYellow rounded-30 px-4 py-3 text-sm"
          >
            Upload photo
            <Icon id="icon-upload-cloud" strokeColor="stroke-yellow" />
          </button>
          {errors.avatar && <p className="text-red-500">{errors.avatar?.message}</p>}
        </div>

        <CustomInput className="h-[52px]" placeholder="Title" register={register('title')} error={errors.title} />
        <CustomInput
          className="my-[18px] h-[52px]"
          placeholder="Pet's Name"
          register={register('name')}
          error={errors.name}
        />

        <div className="flex gap-3">
          <DateInput
            className="w-[210px]"
            placeholder="Birthday"
            register={register('birthday')}
            error={errors.birthday as FieldError}
          />

          <SelectInput
            className="w-[210px]"
            register={() => register('species')}
            options={[
              { value: 'dog', label: 'Dog' },
              { value: 'cat', label: 'Cat' },
              { value: 'monkey', label: 'Monkey' },
              { value: 'bird', label: 'Bird' },
            ]}
            error={errors.species as FieldError}
          />
        </div>

        <div className="flex gap-2 h-12 mt-10 justify-end">
          <CustomButton
            type="button"
            onClick={handleBack}
            className="flex items-center bg-alfaBlack rounded-30 py-[14px] px-[67px]"
          >
            Back
          </CustomButton>
          <CustomButton type="submit" className="flex items-center bg-yellow text-white rounded-30 py-[14px] px-[58px]">
            Submit
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default AddPetForm;
