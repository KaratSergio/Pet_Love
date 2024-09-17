import Icon from '../Icon/Icon';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SearchInputProps, SearchInputFormValues } from './types';

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onSubmit, className }) => {
  const { register, handleSubmit, setValue, watch } = useForm<SearchInputFormValues>();

  const currentValue = watch('search', '');

  const handleClear = () => {
    setValue('search', '');
  };

  const onSearchSubmit: SubmitHandler<SearchInputFormValues> = (data) => {
    if (data.search.trim()) {
      onSubmit(data.search);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSearchSubmit)} className={`relative flex items-center ${className}`}>
      <input
        {...register('search')}
        placeholder={placeholder || 'Search...'}
        type="text"
        className={`border p-4 rounded-30 w-full placeholder-lightBlack ${className}`}
      />
      {currentValue && (
        <button type="button" onClick={handleClear} className="absolute right-10 text-gray-400 focus:outline-none">
          <Icon id="icon-close" className="w-5 h-5" />
        </button>
      )}
      <button type="submit" className="absolute right-3 text-gray-400 focus:outline-none">
        <Icon id="icon-search" className="w-5 h-5" />
      </button>
    </form>
  );
};

export default SearchInput;
