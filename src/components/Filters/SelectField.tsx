import Select, { StylesConfig } from 'react-select';
import { Controller, useFormContext, FieldError } from 'react-hook-form';
import { CustomSelectProps, Option } from './types';

const customStyles: StylesConfig<Option> = {
  control: (provided) => ({
    ...provided,
    width: '200px',
    height: '48px',
    borderRadius: '30px',
    borderColor: 'white',
    boxShadow: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    '&:hover': {
      borderColor: '#F6B83D',
      cursor: 'pointer',
    },
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: '0',
    marginLeft: '8px',
  }),
  option: (provided, state) => ({
    ...provided,
    borderRadius: '15px',
    backgroundColor: state.isFocused ? '#f0f0f0' : 'white',
    color: 'black',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'gray',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '15px',
    marginTop: '5px',
  }),
};

const CustomSelect: React.FC<CustomSelectProps> = ({ name, options, placeholder, error }) => {
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
          styles={customStyles}
          className={`rounded-full ${error ? 'border-red-500' : 'border-gray-300'}`}
          classNamePrefix="react-select"
          onChange={(selectedOption) => {
            field.onChange(selectedOption ? (selectedOption as Option).value : '');
          }}
          value={options.find((option) => option.value === field.value) || null}
        />
      )}
    />
  );
};

export const CategorySelect: React.FC<{ options: Option[]; error?: FieldError }> = ({ options, error }) => (
  <CustomSelect name="category" options={options} placeholder="Category" error={error} />
);

export const SexSelect: React.FC<{ options: Option[]; error?: FieldError }> = ({ options, error }) => (
  <CustomSelect name="sex" options={options} placeholder="By gender" error={error} />
);

export const SpeciesSelect: React.FC<{ options: Option[]; error?: FieldError }> = ({ options, error }) => (
  <CustomSelect name="species" options={options} placeholder="By type" error={error} />
);
