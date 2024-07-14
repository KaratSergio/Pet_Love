import HomeImage from '@components/Home/HomeImage';
import HomeTitle from '@components/Home/HomeTitle';

const HomePage: React.FC = () => {
  return (
    <section className="mx-auto flex flex-col">
      <HomeTitle />
      <HomeImage />
    </section>
  );
};

export default HomePage;
