import RegistrationForm from '@components/Auth/RegistrationForm';

const RegistrationPage: React.FC = () => {
  return (
    <section className="mx-auto bg-orange-50 p-8">
      <div className="flex gap-8">
        <div className="w-[592px] bg-yellow rounded-60"></div>
        <div>
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
