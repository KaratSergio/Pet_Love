import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationSchema } from '@schemas/authSchemas';
import { Link } from 'react-router-dom';

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
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-[592px] py-[77px] px-[84px] rounded-60">
      <h2 className="text-[54px] font-bold">Registration</h2>
      <p className="text-lg font-medium">Thank you for your interest in our platform.</p>
      <div className="flex flex-col gap-4 mt-8">
        <CustomInput placeholder="Name" type="text" register={register('name')} error={errors.name} />
        <CustomInput placeholder="Email" type="email" register={register('email')} error={errors.email} />
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
        className="h-[52px] mt-16 w-full py-4 bg-yellow text-white rounded-30"
        disabled={isLoading}
      >
        {isLoading ? 'Registering...' : 'REGISTRATION'}
      </CustomButton>
      <p className="text-lightBlack font-medium text-sm text-center mt-4">
        Already have an account?{' '}
        <Link to="/login" className="text-yellow font-semibold">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegistrationForm;
