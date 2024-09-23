import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import {
  fetchCategoriesThunk,
  fetchSexesThunk,
  fetchSpeciesThunk,
  fetchCitiesThunk,
} from '@redux/notices/notices-thunk';
import { selectCategories, selectSexes, selectSpecies, selectLocations } from '@redux/notices/notices-selectors';
import { transformOptions, transformOptionsLocation } from '@utils/dataTransformers';
import SearchField from './SearchField';
import { CategorySelect, SexSelect, SpeciesSelect, LocationSelect } from './SelectField';
import RadioGroup from './RadioGroup';
import NewsList from '../Notices/NoticesList';

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
      filter: '',
    },
  });

  const [filters, setFilters] = useState({
    category: '',
    sex: '',
    species: '',
    location: '',
    filter: '',
  });

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
    dispatch(fetchSexesThunk());
    dispatch(fetchSpeciesThunk());
    dispatch(fetchCitiesThunk());
  }, [dispatch]);

  const handleReset = () => {
    methods.reset();
    setFilters({
      category: '',
      sex: '',
      species: '',
      location: '',
      filter: '',
    });
  };

  useEffect(() => {
    const subscription = methods.watch((value) => {
      setFilters({
        category: value.category ?? '',
        sex: value.sex ?? '',
        species: value.species ?? '',
        location: value.location ?? '',
        filter: value.filter ?? '',
      });
    });
    return () => subscription.unsubscribe();
  }, [methods]);

  return (
    <>
      <FormProvider {...methods}>
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <SearchField name="search" placeholder="Search..." />
          <CategorySelect options={transformOptions(categories)} />
          <SexSelect options={transformOptions(sexes)} />
          <SpeciesSelect options={transformOptions(species)} />
          <LocationSelect options={transformOptionsLocation(locations)} />

          <div className="col-span-1 md:col-span-2 lg:col-span-4 flex items-center space-x-4 mt-4">
            <RadioGroup />
            {methods.watch('filter') && (
              <button
                type="button"
                onClick={handleReset}
                className="ml-auto bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Reset
              </button>
            )}
          </div>
        </form>
      </FormProvider>

      <NewsList searchQuery={methods.watch('search')} currentPage={1} perPage={6} filters={filters} />
    </>
  );
};

export default NoticesFilters;
