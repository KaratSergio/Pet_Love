import { useState } from 'react';
import Icon from '../Icon/Icon';
import CustomInput from '../Custom/Input';
import { PasswordInputFieldProps } from '../Custom/types';

const PasswordField: React.FC<PasswordInputFieldProps> = ({ placeholder, register, error }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="relative">
      <CustomInput
        placeholder={placeholder}
        type={passwordVisible ? 'text' : 'password'}
        register={register}
        error={error}
      />
      <div
        className="absolute right-[15px] top-6 transform -translate-y-1/2 cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        {passwordVisible ? (
          <Icon id="icon-eye" strokeColor="stroke-yellow" />
        ) : (
          <Icon id="icon-eye-off" strokeColor="stroke-yellow" />
        )}
      </div>
    </div>
  );
};

export default PasswordField;
