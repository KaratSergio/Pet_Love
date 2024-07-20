import RegistrationForm from '@components/Auth/RegistrationForm';
import PetBlock from '@components/Auth/PetBlock';

import registerImages from '@assets/img/register/registerImages';

const RegistrationPage: React.FC = () => {
  return (
    <section className="mx-auto bg-orange-50 p-8">
      <div className="flex gap-8">
        <PetBlock
          images={registerImages}
          imageWidth="480px"
          imageHeight="600px"
          className="w-[592px] h-[654px] rounded-60"
        />

        <RegistrationForm />
      </div>
    </section>
  );
};

export default RegistrationPage;
