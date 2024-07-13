import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchema } from '@schemas/authSchemas';
import { Link } from 'react-router-dom';

import CustomInput from '../Custom/Input';
import CustomButton from '../Custom/Button';
import PasswordField from './PasswordField';

import { LogInFormInputs } from './types';

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInFormInputs>({
    resolver: yupResolver(logInSchema),
  });

  const onSubmit: SubmitHandler<LogInFormInputs> = (data) => {
    console.log('Log In Data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-white max-w-[592px] py-[118px] px-[84px] rounded-60">
      <h2 className="text-[54px] font-bold">Log in</h2>
      <p className="text-lg font-medium">Welcome! Please enter your credentials to login to the platform:</p>
      <div className="flex flex-col gap-4 mt-8">
        <CustomInput placeholder="Email" type="email" register={register('email')} error={errors.email} />
        <PasswordField placeholder="Password" register={register('password')} error={errors.password} />
      </div>
      <CustomButton type="submit" className="h-[52px] mt-16 w-full py-4 bg-yellow text-white rounded-30">
        LOG IN
      </CustomButton>
      <p className="text-lightBlack font-medium text-sm text-center mt-4">
        Don&apos;t have an account?{' '}
        <Link to="/register" className="text-yellow font-semibold">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
