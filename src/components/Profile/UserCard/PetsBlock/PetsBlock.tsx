import AddPet from './AddPet';
import PetsList from './PetsList';

const PetsBlock: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-10">
        <p className="font-bold text-lg">My pets</p>
        <AddPet />
      </div>
      <PetsList />
    </div>
  );
};

export default PetsBlock;
