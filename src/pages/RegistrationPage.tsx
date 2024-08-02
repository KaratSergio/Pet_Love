import registerImages from '@assets/img/register/registerImages';
import { Link } from 'react-router-dom';

import RegistrationForm from '@components/Auth/RegistrationForm';
import PetBlock from '@components/Custom/PetBlock';
import Title from '@components/Custom/Title';

const RegistrationPage: React.FC = () => {
  return (
    <section className="mx-auto bg-orange-50 p-8">
      <div className="flex flex-col gap-4 xl:flex-row md:gap-8">
        <PetBlock
          images={registerImages}
          imageWidth="480px"
          imageHeight="600px"
          className="w-full mx-auto sm:max-w-[592px] h-[302px] xl:h-[654px] rounded-60 mobile:h-[280px] mobile-adaptive:h-[280px] max-w-[335px]"
        />

        <div className="w-full mx-auto  max-w-[335px] bg-white sm:max-w-[592px] xl:h-[654px] py-8 px-4 md:py-[118px] md:px-[84px] rounded-60">
          <Title />
          <RegistrationForm />

          <p className="text-lightBlack font-medium text-sm text-center mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-yellow font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
