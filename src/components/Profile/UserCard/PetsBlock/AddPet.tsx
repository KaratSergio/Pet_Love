import LinkTo from '@components/Custom/LinkTo';
import Icon from '@components/Icon/Icon';

const AddPet: React.FC = () => {
  return (
    <LinkTo
      to="/add-pet"
      className="flex gap-1 items-center rounded-30 h-10 px-5 py-[10px] font-medium text-white bg-yellow"
    >
      Add pet
      <Icon id="icon-plus" strokeColor="stroke-white" />
    </LinkTo>
  );
};

export default AddPet;
