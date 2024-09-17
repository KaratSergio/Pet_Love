import { useEffect, useState } from 'react';
import { fetchNews } from '@redux/news/news-thunk';
import { selectNews } from '@redux/news/news-selectors';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import NewsItem from './NewsItem';
import Pagination from '../Pagination/Pagination';

const NewsList: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  const dispatch = useAppDispatch();
  const news = useAppSelector(selectNews);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(news.length / itemsPerPage);

  useEffect(() => {
    dispatch(fetchNews({ page: currentPage, limit: itemsPerPage, keyword: searchQuery }));
  }, [dispatch, currentPage, searchQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-16">
        {news.length > 0 ? news.map((item) => <NewsItem key={item._id} item={item} />) : <div>No results found</div>}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="mt-[60px]"
        />
      )}
    </div>
  );
};

export default NewsList;
