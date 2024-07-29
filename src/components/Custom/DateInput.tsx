import { UseFormRegister, FieldError } from 'react-hook-form';

interface DateInputProps {
  register: ReturnType<UseFormRegister<any>>;
  placeholder: string;
  className?: string;
  error?: FieldError;
}

const DateInput: React.FC<DateInputProps> = ({ register, placeholder, className, error }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <input
        type="date"
        placeholder={placeholder}
        className={`py-3 px-4 border rounded-full w-full ${error ? 'border-red-500' : 'border-gray-300'}`}
        {...register}
      />
      {error && typeof error.message === 'string' && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default DateInput;
