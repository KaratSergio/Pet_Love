import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchema } from '@schemas/authSchemas';
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-8">
      <CustomInput
        className="h-[42px] md:h-[52px] text-sm md:text-base"
        placeholder="Email"
        type="email"
        register={register('email')}
        error={errors.email}
      />
      <PasswordField placeholder="Password" register={register('password')} error={errors.password} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <CustomButton
        type="submit"
        className="h-[42px] md:h-[52px] mt-16 w-full bg-yellow text-white rounded-30 text-sm md:text-base"
        disabled={isLoading}
      >
        {isLoading ? 'Logging in...' : 'LOG IN'}
      </CustomButton>
    </form>
  );
};

export default LoginForm;
