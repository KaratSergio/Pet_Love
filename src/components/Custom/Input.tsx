import { InputFieldProps } from './types';

const CustomInput: React.FC<InputFieldProps> = ({ placeholder, register, error, type = 'text' }) => (
  <div>
    {error && <p className="text-red-500">{error.message}</p>}
    <input
      {...register}
      placeholder={placeholder}
      type={type}
      className="border p-4 rounded-30 w-full placeholder-lightBlack h-[52px]"
    />
  </div>
);

export default CustomInput;
