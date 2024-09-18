import { useState, useEffect } from 'react';
import { fetchNews } from '@redux/news/news-thunk';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import { selectNewsApiResponse } from '@redux/news/news-selectors';

import Title from '@components/Custom/Title';
import NewsList from '@components/News/NewsList';
import SearchInput from '@components/Custom/SearchInput';
import Pagination from '@components/Pagination/Pagination';

const NewsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const newsResponse = useAppSelector(selectNewsApiResponse);
  const totalPages = newsResponse?.totalPages || 1;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(fetchNews({ page: currentPage, limit: itemsPerPage, keyword: searchQuery }));
  }, [dispatch, searchQuery, currentPage, itemsPerPage]);

  return (
    <section className="m-auto max-w-desktop px-5 py-6 sm:px-16 sm:py-8 bg-orange-50">
      <div className="sm:flex justify-between items-center mb-[60px] mt-[70px]">
        <Title mainTitleClassName="sm:text-[54px] mb-5 sm:mb-auto" />
        <SearchInput placeholder="Search" onSubmit={handleSearch} className="w-full h-[42px] sm:w-[230px] sm:h-12" />
      </div>

      <div className="flex flex-col items-center">
        <NewsList searchQuery={searchQuery} currentPage={currentPage} itemsPerPage={itemsPerPage} />
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            className="mt-[60px]"
          />
        )}
      </div>
    </section>
  );
};

export default NewsPage;
