import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationSchema } from '@schemas/authSchemas';

import { signUpUser } from '@redux/users/users-thunk';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import { selectIsLoading, selectError } from '@redux/users/users-selectors';

import CustomInput from '../Custom/Input';
import CustomButton from '../Custom/Button';
import PasswordField from './PasswordField';

import { RegistrationFormInputs } from './types';

const RegistrationForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormInputs>({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<RegistrationFormInputs> = (data) => {
    dispatch(signUpUser(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 mt-8">
        <CustomInput
          className="h-[42px] md:h-[52px] text-sm md:text-base"
          placeholder="Name"
          type="text"
          register={register('name')}
          error={errors.name}
        />
        <CustomInput
          className="h-[42px] md:h-[52px] text-sm md:text-base"
          placeholder="Email"
          type="email"
          register={register('email')}
          error={errors.email}
        />
        <PasswordField placeholder="Password" register={register('password')} error={errors.password} />
        <PasswordField
          placeholder="Confirm password"
          register={register('confirmPassword')}
          error={errors.confirmPassword}
        />
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <CustomButton
        type="submit"
        className="h-[42px] md:h-[52px] mt-8 w-full bg-yellow text-white rounded-30"
        disabled={isLoading}
      >
        {isLoading ? 'Registering...' : 'REGISTRATION'}
      </CustomButton>
    </form>
  );
};

export default RegistrationForm;
