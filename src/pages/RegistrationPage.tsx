import registerImages from '@assets/img/register/registerImages';
import { Link } from 'react-router-dom';

import RegistrationForm from '@components/Auth/RegistrationForm';
import PetBlock from '@components/Auth/PetBlock';
import Title from '@components/Custom/Title';

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

        <div className="bg-white w-[592px] h-[654px] py-[77px] px-[84px] rounded-60">
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
