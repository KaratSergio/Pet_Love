import { useEffect } from 'react';
import { fetchNews } from '@redux/news/news-thunk';
import { selectNews } from '@redux/news/news-selectors';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import NewsItem from './NewsItem';

const NewsList: React.FC<{ searchQuery: string; currentPage: number; itemsPerPage: number }> = ({
  searchQuery,
  currentPage,
  itemsPerPage,
}) => {
  const dispatch = useAppDispatch();
  const news = useAppSelector(selectNews);

  useEffect(() => {
    dispatch(fetchNews({ page: currentPage, limit: itemsPerPage, keyword: searchQuery }));
  }, [dispatch, currentPage, searchQuery, itemsPerPage]);

  return (
    <div className="flex flex-wrap justify-center gap-x-8 gap-y-16">
      {news.length > 0 ? news.map((item) => <NewsItem key={item._id} item={item} />) : <div>No results found</div>}
    </div>
  );
};

export default NewsList;
