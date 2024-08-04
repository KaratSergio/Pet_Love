import { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import {
  fetchCategoriesThunk,
  fetchSexesThunk,
  fetchSpeciesThunk,
  fetchCitiesThunk,
} from '@redux/notices/notices-thunk';
import { selectCategories, selectSexes, selectSpecies, selectLocations } from '@redux/notices/notices-selectors';

import Select from 'react-select';
import SearchField from './SearchField';

const NoticesFilters: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const sexes = useAppSelector(selectSexes);
  const species = useAppSelector(selectSpecies);
  const locations = useAppSelector(selectLocations);

  const methods = useForm({
    defaultValues: {
      category: '',
      sex: '',
      species: '',
      location: '',
      search: '',
    },
  });

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
    dispatch(fetchSexesThunk());
    dispatch(fetchSpeciesThunk());
    dispatch(fetchCitiesThunk());
  }, [dispatch]);

  return (
    <FormProvider {...methods}>
      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <SearchField name="searchField" placeholder="Search..." />
        <Select
          options={categories}
          placeholder="Category"
          className="react-select-container"
          classNamePrefix="react-select"
        />
        <Select options={sexes} placeholder="Sex" className="react-select-container" classNamePrefix="react-select" />
        <Select
          options={species}
          placeholder="Species"
          className="react-select-container"
          classNamePrefix="react-select"
        />
        <Select
          options={locations}
          placeholder="Location"
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </form>
    </FormProvider>
  );
};

export default NoticesFilters;
