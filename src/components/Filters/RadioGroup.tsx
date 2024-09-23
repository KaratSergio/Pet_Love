import { Controller, useFormContext } from 'react-hook-form';

const CustomRadioButton: React.FC<{ name: string; value: string; label: string }> = ({ name, value, label }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <label className="inline-flex items-center cursor-pointer">
          <input type="radio" {...field} value={value} checked={field.value === value} className="hidden" />
          <span
            className={`ml-2 p-2 border border-gray-300 rounded ${
              field.value === value ? 'bg-blue-600 text-white' : 'text-gray-700'
            }`}
          >
            {label}
          </span>
        </label>
      )}
    />
  );
};

const RadioGroup: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <CustomRadioButton name="filter" value="popular" label="Popular" />
      <CustomRadioButton name="filter" value="unpopular" label="Unpopular" />
      <CustomRadioButton name="filter" value="cheap" label="Cheap" />
      <CustomRadioButton name="filter" value="expensive" label="Expensive" />
    </div>
  );
};

export default RadioGroup;
