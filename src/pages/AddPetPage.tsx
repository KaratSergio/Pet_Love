import PetBlock from '@components/Custom/PetBlock';
import addPetImages from '@src/assets/img/addPetPage/addPetImages';

const AddPetPage: React.FC = () => {
  return (
    <section className="mx-auto bg-orange-50 p-8">
      <div className="flex gap-8">
        <PetBlock
          images={addPetImages}
          imageWidth="500px"
          imageHeight="630px"
          className="w-full max-w-[592px] h-[654px] rounded-60"
        />
      </div>
    </section>
  );
};

export default AddPetPage;
