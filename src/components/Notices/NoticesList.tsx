import NoticesItem from './NoticesItem/NoticesItem';
import useNotices from '@hooks/useNotices';
import { NoticesListProps } from './types';

const NoticesList: React.FC<NoticesListProps> = ({ currentPage, perPage, searchQuery, filters }) => {
  const { isLoading, error, notices, handleToggleFavorite } = useNotices(currentPage, perPage, searchQuery, filters);

  const { selectedFilter } = filters;

  const filteredNotices = notices.filter((notice) => {
    let shouldInclude = true;

    if (selectedFilter === 'popular') {
      shouldInclude = notice.popularity >= 2;
    } else if (selectedFilter === 'unpopular') {
      shouldInclude = notice.popularity <= 1;
    } else if (selectedFilter === 'cheap') {
      shouldInclude = notice.price !== undefined && notice.price < 100;
    } else if (selectedFilter === 'expensive') {
      shouldInclude = notice.price !== undefined && notice.price >= 100;
    }

    return shouldInclude;
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {filteredNotices.map((notice) => (
        <NoticesItem key={notice._id} notice={notice} onToggleFavorite={() => handleToggleFavorite(notice._id)} />
      ))}
    </div>
  );
};

export default NoticesList;
