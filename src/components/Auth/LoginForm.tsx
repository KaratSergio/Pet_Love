import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchema } from '@schemas/authSchemas';
import { Link } from 'react-router-dom';

import { signInUser } from '@redux/users/users-thunk';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import { selectIsLoading, selectError } from '@redux/users/users-selectors';

import CustomInput from '../Custom/Input';
import CustomButton from '../Custom/Button';
import PasswordField from './PasswordField';

import { LogInFormInputs } from './types';

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInFormInputs>({
    resolver: yupResolver(logInSchema),
  });

  const onSubmit: SubmitHandler<LogInFormInputs> = (data) => {
    dispatch(signInUser(data));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full bg-white max-w-[592px] h-[654px] py-[118px] px-[84px] rounded-60"
    >
      <h2 className="text-[54px] font-bold">Log in</h2>
      <p className="text-lg font-medium">Welcome! Please enter your credentials to login to the platform:</p>
      <div className="flex flex-col gap-4 mt-8">
        <CustomInput
          className="h-[52px]"
          placeholder="Email"
          type="email"
          register={register('email')}
          error={errors.email}
        />
        <PasswordField placeholder="Password" register={register('password')} error={errors.password} />
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <CustomButton
        type="submit"
        className="h-[52px] mt-16 w-full py-4 bg-yellow text-white rounded-30"
        disabled={isLoading}
      >
        {isLoading ? 'Logging in...' : 'LOG IN'}
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
