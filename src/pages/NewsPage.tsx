import Title from '@components/Custom/Title';
import NewsList from '@components/News/NewsList';

const NewsPage: React.FC = () => {
  return (
    <section className="m-auto max-w-desktop px-16 py-8 bg-orange-50">
      <Title />
      <NewsList />
    </section>
  );
};

export default NewsPage;
