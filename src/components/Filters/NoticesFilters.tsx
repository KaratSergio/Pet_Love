import { useEffect } from 'react';
import { useForm, FormProvider, useFormContext, Controller } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import {
  fetchCategoriesThunk,
  fetchSexesThunk,
  fetchSpeciesThunk,
  fetchCitiesThunk,
} from '@redux/notices/notices-thunk';
import { selectCategories, selectSexes, selectSpecies } from '@redux/notices/notices-selectors';

import Select, { SingleValue } from 'react-select';
import SearchField from './SearchField';

const RadioButton: React.FC<{ name: string; value: string; label: string }> = ({ name, value, label }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <label className="inline-flex items-center">
          <input
            type="radio"
            {...field}
            value={value}
            checked={field.value === value}
            className="form-radio text-blue-600"
          />
          <span className="ml-2">{label}</span>
        </label>
      )}
    />
  );
};

interface Option {
  label: string;
  value: string;
}

const transformOptions = (options: any[]): Option[] => {
  return options.map((option) => ({
    label: option.name,
    value: option.id,
  }));
};

const NoticesFilters: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const sexes = useAppSelector(selectSexes);
  const species = useAppSelector(selectSpecies);
  // const locations = useAppSelector(selectLocations);

  const methods = useForm({
    defaultValues: {
      category: '',
      sex: '',
      species: '',
      location: '',
      search: '',
      filter: '',
    },
  });

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
    dispatch(fetchSexesThunk());
    dispatch(fetchSpeciesThunk());
    dispatch(fetchCitiesThunk());
  }, [dispatch]);

  const handleReset = () => {
    methods.reset({
      category: '',
      sex: '',
      species: '',
      location: '',
      search: '',
      filter: '',
    });
  };

  const filterValue = methods.watch('filter');

  return (
    <FormProvider {...methods}>
      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <SearchField name="search" placeholder="Search..." />

        <Controller
          name="category"
          control={methods.control}
          render={({ field }) => (
            <Select
              {...field}
              options={transformOptions(categories)}
              placeholder="Category"
              className="react-select-container"
              classNamePrefix="react-select"
              onChange={(selectedOption: SingleValue<Option>) =>
                field.onChange(selectedOption ? selectedOption.value : '')
              }
              value={transformOptions(categories).find((option) => option.value === field.value) || null}
            />
          )}
        />

        <Controller
          name="sex"
          control={methods.control}
          render={({ field }) => (
            <Select
              {...field}
              options={transformOptions(sexes)}
              placeholder="By gender"
              className="react-select-container"
              classNamePrefix="react-select"
              onChange={(selectedOption: SingleValue<Option>) =>
                field.onChange(selectedOption ? selectedOption.value : '')
              }
              value={transformOptions(sexes).find((option) => option.value === field.value) || null}
            />
          )}
        />

        <Controller
          name="species"
          control={methods.control}
          render={({ field }) => (
            <Select
              {...field}
              options={transformOptions(species)}
              placeholder="By type"
              className="react-select-container"
              classNamePrefix="react-select"
              onChange={(selectedOption: SingleValue<Option>) =>
                field.onChange(selectedOption ? selectedOption.value : '')
              }
              value={transformOptions(species).find((option) => option.value === field.value) || null}
            />
          )}
        />

        <SearchField name="search location" placeholder="Location" />

        <div className="col-span-1 md:col-span-2 lg:col-span-4 flex items-center space-x-4 mt-4">
          <RadioButton name="filter" value="popular" label="Popular" />
          <RadioButton name="filter" value="unpopular" label="Unpopular" />
          <RadioButton name="filter" value="cheap" label="Cheap" />
          <RadioButton name="filter" value="expensive" label="Expensive" />
          {filterValue && (
            <button type="button" onClick={handleReset} className="ml-auto bg-red-500 text-white px-4 py-2 rounded-md">
              Reset
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default NoticesFilters;
