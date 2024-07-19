import LoginForm from '@components/Auth/LoginForm';
import PetBlock from '@components/Auth/PetBlock';

import loginImages from '@assets/img/login/loginImages';

const LoginPage: React.FC = () => {
  return (
    <section className="mx-auto bg-orange-50 p-8">
      <div className="flex gap-8">
        <PetBlock
          images={loginImages}
          imageWidth="502px"
          imageHeight="630px"
          className="w-[592px] h-[677px] rounded-60"
        />

        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
