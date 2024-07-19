import RegistrationForm from '@components/Auth/RegistrationForm';
import PetBlock from '@components/Auth/PetBlock';

import registerImages from '@assets/img/register/registerImages';

const RegistrationPage: React.FC = () => {
  return (
    <section className="mx-auto bg-orange-50 p-8">
      <div className="flex gap-8">
        <PetBlock
          images={registerImages}
          imageWidth="512px"
          imageHeight="660px"
          className="w-[592px] h-[703px] rounded-60"
        />

        <RegistrationForm />
      </div>
    </section>
  );
};

export default RegistrationPage;
