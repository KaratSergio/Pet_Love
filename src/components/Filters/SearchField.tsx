import { useController, useFormContext } from 'react-hook-form';

interface SearchFieldProps {
  name: string;
  placeholder: string;
}

const SearchField: React.FC<SearchFieldProps> = ({ name, placeholder }) => {
  const { control } = useFormContext();
  const { field } = useController({ name, control });

  return <input {...field} placeholder={placeholder} className="border p-2 rounded-md" />;
};

export default SearchField;
