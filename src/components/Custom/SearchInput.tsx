import Icon from '../Icon/Icon';
import { useFormContext } from 'react-hook-form';
import { SearchInputProps, SearchInputFormValues } from './types';

const SearchInput: React.FC<SearchInputProps> = ({ name, placeholder, onSubmit, className }) => {
  const { register, handleSubmit, setValue, watch } = useFormContext<SearchInputFormValues>();

  const currentValue = watch(name);

  const handleClear = () => {
    setValue(name, '');
  };

  const onSearchSubmit = (data: SearchInputFormValues) => {
    const searchValue = data[name];

    if (searchValue && searchValue.trim()) {
      onSubmit(searchValue);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSearchSubmit)} className={`relative flex items-center ${className}`}>
      <input
        {...register(name)}
        placeholder={placeholder || 'Search...'}
        type="text"
        className={`border p-4 rounded-30 w-full placeholder-lightBlack ${className}`}
      />
      {currentValue && (
        <button type="button" onClick={handleClear} className="absolute right-10 text-gray-400 focus:outline-none">
          <Icon id="icon-close" className="w-5 h-5" />
        </button>
      )}
      <button type="submit" className="absolute right-4 text-gray-400 focus:outline-none">
        <Icon id="icon-search" className="w-5 h-5" />
      </button>
    </form>
  );
};

export default SearchInput;
