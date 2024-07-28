import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addPetSchema } from '@src/schemas/addPetSchemas';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import CustomInput from '../Custom/Input';
import CustomButton from '../Custom/Button';
import RadioButtons from './RadioButtons';
// import { toast } from 'react-hot-toast';

interface PetFormInputs {
  title: string;
  name: string;
  imgURL: string;
  species: string;
  birthday: string;
  sex: string;
}

const AddPetForm: React.FC = () => {
  const [sexPet, setSexPet] = useState<string>('female');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PetFormInputs>({
    resolver: yupResolver(addPetSchema),
  });

  const onSubmit: SubmitHandler<PetFormInputs> = async (data) => {
    data.sex = sexPet;
    console.log(data);
  };

  const handleBack = () => {
    navigate('/profile');
  };

  return (
    <div className="w-[562px] bg-white rounded-60 py-[60px] px-20">
      <h2 className="font-bold text-[32px]">
        Add my pet / <span className="text-lightGrey ml-2 text-base">Personal details</span>
      </h2>

      <RadioButtons setSexPet={setSexPet} />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <CustomInput placeholder="Title" register={register('title')} error={errors.title} />
        <CustomInput placeholder="Pet's Name" register={register('name')} error={errors.name} />

        <div className="flex gap-2 h-12">
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
