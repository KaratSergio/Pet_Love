import { useController, useFormContext } from 'react-hook-form';

interface SearchFieldProps {
  name: string;
  placeholder: string;
}

const SearchField: React.FC<SearchFieldProps> = ({ name, placeholder }) => {
  const { control } = useFormContext();
  const { field } = useController({ name, control });

  return <input {...field} placeholder={placeholder} className="p-2 h-[48px] w-[265px] rounded-30" />;
};

export default SearchField;
