import { InputFieldProps } from './types';

const InputField: React.FC<InputFieldProps> = ({ placeholder, register, error, type = 'text' }) => (
  <div>
    {error && <p className="text-red-500">{error.message}</p>}
    <input
      {...register}
      placeholder={placeholder}
      type={type}
      className="border border-borderColor py-4 px-18 mb-18 rounded-xl w-full placeholder-mainBlack leading-22px"
    />
  </div>
);

export default InputField;
