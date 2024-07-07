import Icon from '../Icon/Icon';
import React, { useState } from 'react';
import { PasswordInputFieldProps } from './types';

const PasswordInputField: React.FC<PasswordInputFieldProps> = ({ placeholder, register, error }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="relative">
      <input
        type={passwordVisible ? 'text' : 'password'}
        {...register}
        placeholder={placeholder}
        className="border border-borderColor py-4 px-18 mb-18 rounded-xl w-full placeholder-mainBlack leading-22px"
      />
      {error && <p className="text-red-500">{error.message}</p>}
      <div
        className="absolute right-4 top-7 transform -translate-y-1/2 cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        {passwordVisible ? <Icon id="icon-eye" /> : <Icon id="icon-eye-off" />}
      </div>
    </div>
  );
};

export default PasswordInputField;
