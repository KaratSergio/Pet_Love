import loginImages from '@assets/img/login/loginImages';
import { Link } from 'react-router-dom';

import LoginForm from '@components/Auth/LoginForm';
import PetBlock from '@components/Custom/PetBlock';
import Title from '@components/Custom/Title';

const LoginPage: React.FC = () => {
  return (
    <section className="mx-auto bg-orange-50 p-8">
      <div className="flex gap-8">
        <PetBlock
          images={loginImages}
          imageWidth="500px"
          imageHeight="630px"
          className="w-full max-w-[592px] h-[654px] rounded-60"
        />

        <div className="w-full bg-white max-w-[592px] h-[654px] py-[118px] px-[84px] rounded-60">
          <Title />
          <LoginForm />

          <p className="text-lightBlack font-medium text-sm text-center mt-4">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="text-yellow font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
