import { InputFieldProps } from './types';

const CustomInput: React.FC<InputFieldProps> = ({ placeholder, register, error, type = 'text', className }) => (
  <div className="relative">
    <input
      {...register}
      placeholder={placeholder}
      type={type}
      className={`border p-4 rounded-30 w-full placeholder-lightBlack ${className}`}
    />
    {error && <p className="ml-[18px] mt-1 text-xs font-medium text-error">{error.message}</p>}
  </div>
);

export default CustomInput;
