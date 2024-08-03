import registerImages from '@assets/img/register/registerImages';
import { Link } from 'react-router-dom';

import RegistrationForm from '@components/Auth/RegistrationForm';
import PetBlock from '@components/Custom/PetBlock';
import Title from '@components/Custom/Title';

const RegistrationPage: React.FC = () => {
  return (
    <section className="mx-auto bg-orange-50 p-4 md:p-8">
      <div className="flex flex-col gap-4 xl:flex-row md:gap-8">
        <PetBlock
          images={registerImages}
          imageWidth="100%"
          imageHeight="100%"
          className="w-full mx-auto xl:max-w-[592px] md:max-w-[704px] h-[302px] xl:h-[654px] rounded-60 mobile:h-[280px] mobile-adaptive:h-[280px] max-w-[335px]"
        />

        <div className="w-full mx-auto  max-w-[335px] md:max-w-[704px] bg-white xl:max-w-[592px] xl:h-[654px] py-[55px] px-5 md:py-[71px] md:px-[140px] xl:py-[118px] xl:px-[84px]  rounded-60">
          <Title mainTitleClassName="text-[28px] md:text-[54px]" subTitleClassName="text-sm md:text-lg" />
          <RegistrationForm />

          <p className="text-lightBlack font-medium text-[12px] md:text-sm text-center mt-4">
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
