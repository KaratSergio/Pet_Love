import { FieldError, RegisterOptions } from 'react-hook-form';

interface SelectInputProps {
  register: (options?: RegisterOptions) => any;
  options: { value: string; label: string }[];
  className?: string;
  error?: FieldError;
}

const SelectInput: React.FC<SelectInputProps> = ({ register, options, className, error }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <select
        className={`py-3 px-4 border rounded-full w-full ${error ? 'border-red-500' : 'border-gray-300'}`}
        {...register()}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && typeof error.message === 'string' && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default SelectInput;
