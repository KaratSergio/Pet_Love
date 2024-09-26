import { Controller, useFormContext } from 'react-hook-form';
import Icon from '../Icon/Icon';
import { RadioButtonProps } from './types';

const CustomRadioButton: React.FC<RadioButtonProps> = ({ name, value, label, setSelectedFilter }) => {
  const { control, setValue } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(name, e.target.value);
    setSelectedFilter(e.target.value);
  };

  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setValue(name, '');
    setSelectedFilter('');
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            {...field}
            value={value}
            checked={field.value === value}
            onChange={handleChange}
            className="hidden"
          />
          <span
            className={`p-[14px] h-[48px] bg-white rounded-30 flex hover:border items-center hover:border-yellow ${
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

export default CustomRadioButton;
