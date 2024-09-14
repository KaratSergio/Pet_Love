import Title from '@components/Custom/Title';
import NewsList from '@components/News/NewsList';

const NewsPage: React.FC = () => {
  return (
    <section className="m-auto max-w-desktop p-8 bg-orange-50">
      <Title />
      <NewsList />
    </section>
  );
};

export default NewsPage;
