import { useState, useEffect } from 'react';
import Title from '@components/Custom/Title';
import NewsList from '@components/News/NewsList';
import SearchInput from '@components/Custom/SearchInput';
import { useAppDispatch } from '@hooks/redux-hooks';
import { fetchNews } from '@redux/news/news-thunk';

const NewsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    dispatch(fetchNews({ page: 1, limit: 6, keyword: searchQuery }));
  }, [dispatch, searchQuery]);

  return (
    <section className="m-auto max-w-desktop px-16 py-8 bg-orange-50">
      <div className="flex justify-between items-center mb-[60px] mt-[70px]">
        <Title />
        <SearchInput placeholder="Search" onSubmit={handleSearch} className="w-[230px] h-12" />
      </div>
      <NewsList searchQuery={searchQuery} />
    </section>
  );
};

export default NewsPage;
