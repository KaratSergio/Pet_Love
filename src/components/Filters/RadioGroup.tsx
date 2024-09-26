import CustomRadioButton from '../Custom/CustomRadioButton';

const filterOptions = [
  { value: 'popular', label: 'Popular' },
  { value: 'unpopular', label: 'Unpopular' },
  { value: 'cheap', label: 'Cheap' },
  { value: 'expensive', label: 'Expensive' },
];

const RadioGroup: React.FC<{ setSelectedFilter: (filter: string) => void }> = ({ setSelectedFilter }) => {
  return (
    <div className="flex gap-2">
      {filterOptions.map((option) => (
        <CustomRadioButton
          key={option.value}
          name="filter"
          value={option.value}
          label={option.label}
          setSelectedFilter={setSelectedFilter}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
