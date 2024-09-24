import { Controller, useFormContext } from 'react-hook-form';
import Icon from '../Icon/Icon';

const CustomRadioButton: React.FC<{ name: string; value: string; label: string }> = ({ name, value, label }) => {
  const { control, setValue } = useFormContext();

  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setValue(name, '');
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <label className="inline-flex items-center cursor-pointer">
          <input type="radio" {...field} value={value} checked={field.value === value} className="hidden" />
          <span
            className={`p-[14px] bg-white rounded-30 flex items-center ${
              field.value === value ? 'bg-yellow text-white' : 'text-gray-700'
            }`}
          >
            {label}
            {field.value === value && (
              <Icon
                id="icon-close"
                strokeColor="stroke-white"
                color="fill-yellow"
                className="ml-2 cursor-pointer"
                onClick={handleIconClick}
              />
            )}
          </span>
        </label>
      )}
    />
  );
};

const RadioGroup: React.FC = () => {
  return (
    <div className="flex gap-2">
      <CustomRadioButton name="filter" value="popular" label="Popular" />
      <CustomRadioButton name="filter" value="unpopular" label="Unpopular" />
      <CustomRadioButton name="filter" value="cheap" label="Cheap" />
      <CustomRadioButton name="filter" value="expensive" label="Expensive" />
    </div>
  );
};

export default RadioGroup;
