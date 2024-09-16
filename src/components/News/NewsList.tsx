import { useEffect, useState } from 'react';
import { fetchNews } from '@redux/news/news-thunk';
import { selectNews } from '@redux/news/news-selectors';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import NewsItem from './NewsItem';
import Pagination from '../Pagination/Pagination';

const NewsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector(selectNews);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = 66;

  useEffect(() => {
    dispatch(fetchNews({ page: currentPage, limit: itemsPerPage }));
  }, [dispatch, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-16">
        {news.map((item) => (
          <NewsItem key={item._id} item={item} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        className="mt-[60px]"
      />
    </div>
  );
};

export default NewsList;
