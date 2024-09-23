import Select, { SingleValue } from 'react-select';
import { Controller, useFormContext } from 'react-hook-form';
import { Option } from './types';

interface SelectProps {
  name: string;
  options: Option[];
  placeholder: string;
}

const CustomSelect: React.FC<SelectProps> = ({ name, options, placeholder }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          {...field}
          options={options}
          placeholder={placeholder}
          className="react-select-container"
          classNamePrefix="react-select"
          onChange={(selectedOption: SingleValue<Option>) => field.onChange(selectedOption ? selectedOption.value : '')}
          value={options.find((option) => option.value === field.value) || null}
        />
      )}
    />
  );
};

export const CategorySelect: React.FC<{ options: Option[] }> = ({ options }) => (
  <CustomSelect name="category" options={options} placeholder="Category" />
);

export const SexSelect: React.FC<{ options: Option[] }> = ({ options }) => (
  <CustomSelect name="sex" options={options} placeholder="By gender" />
);

export const SpeciesSelect: React.FC<{ options: Option[] }> = ({ options }) => (
  <CustomSelect name="species" options={options} placeholder="By type" />
);

export const LocationSelect: React.FC<{ options: Option[] }> = ({ options }) => (
  <CustomSelect name="location" options={options} placeholder="Location" />
);
