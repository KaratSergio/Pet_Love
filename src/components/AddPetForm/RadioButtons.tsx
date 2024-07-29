import Icon from '../Icon/Icon';

interface RadioButtonsProps {
  setSexPet: (sex: string) => void;
  className?: string;
  //   sexPet: string;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({ setSexPet, className }) => {
  const handleChooseSex = (e: React.MouseEvent<HTMLLIElement>) => {
    const choosenValue = e.currentTarget.dataset.value!;
    setSexPet(choosenValue);
  };

  return (
    <ul className={`flex gap-2 ${className}`}>
      <li
        className="flex items-center justify-center bg-lightRed rounded-full size-10"
        data-value="female"
        onClick={handleChooseSex}
      >
        <Icon id="icon-female" width="w-6" height="h-6" strokeColor="stroke-red" />
      </li>
      <li
        className="flex items-center justify-center bg-lightBlue rounded-full size-10"
        data-value="male"
        onClick={handleChooseSex}
      >
        <Icon id="icon-male" width="w-6" height="h-6" strokeColor="stroke-blue" />
      </li>
      <li
        className="flex items-center justify-center bg-lightYellow rounded-full size-10"
        data-value="multiple"
        onClick={handleChooseSex}
      >
        <Icon id="icon-multiple" width="w-6" height="h-6" strokeColor="stroke-yellow" />
      </li>
    </ul>
  );
};

export default RadioButtons;
