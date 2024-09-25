import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import {
  fetchCategoriesThunk,
  fetchSexesThunk,
  fetchSpeciesThunk,
  fetchCitiesThunk,
} from '@redux/notices/notices-thunk';
import { selectCategories, selectSexes, selectSpecies } from '@redux/notices/notices-selectors';
import { transformOptions } from '@utils/dataTransformers';
import { CategorySelect, SexSelect, SpeciesSelect } from './SelectField';
import RadioGroup from './RadioGroup';
import NewsList from '../Notices/NoticesList';
import SearchInput from '../Custom/SearchInput';

const NoticesFilters: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const sexes = useAppSelector(selectSexes);
  const species = useAppSelector(selectSpecies);

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
    const fetchData = async () => {
      await Promise.all([
        dispatch(fetchCategoriesThunk()),
        dispatch(fetchSexesThunk()),
        dispatch(fetchSpeciesThunk()),
        dispatch(fetchCitiesThunk()),
      ]);
    };
    fetchData();
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

  const handleLocationSearch = (searchTerm: string) => {
    setFilters((prev) => ({ ...prev, location: searchTerm }));
  };

  const handleSearchSubmit = (searchTerm: string) => {
    setFilters((prev) => ({ ...prev, search: searchTerm }));
  };

  return (
    <>
      <FormProvider {...methods}>
        <form className="bg-lightYellow rounded-30 px-8 py-10 mb-10">
          <div className="flex gap-4 custom-border pb-5">
            <SearchInput
              name="search"
              placeholder="Search..."
              onSubmit={handleSearchSubmit}
              className="w-[265px] h-[48px] hover:border-yellow"
            />
            <CategorySelect options={transformOptions(categories)} />
            <SexSelect options={transformOptions(sexes)} />
            <SpeciesSelect options={transformOptions(species)} />
            <SearchInput
              name="location"
              placeholder="Location"
              onSubmit={handleLocationSearch}
              className="w-[227px] h-[48px] hover:border-yellow"
            />
          </div>

          <div className="pt-5 flex">
            <RadioGroup />
            {methods.watch('filter') && (
              <button
                type="button"
                onClick={handleReset}
                className="ml-auto bg-red-500 text-black h-[48px] px-4 py-2 rounded-md"
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
