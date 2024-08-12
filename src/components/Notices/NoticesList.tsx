import NoticesItem from './NoticesItem/NoticesItem';
import useNotices from '@hooks/useNotices';
import { NoticesListProps } from './types';

const NoticesList: React.FC<NoticesListProps> = ({ currentPage, perPage }) => {
  const { isLoading, error, notices, handleToggleFavorite } = useNotices(currentPage, perPage);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {notices.map((notice) => (
        <NoticesItem key={notice._id} notice={notice} onToggleFavorite={() => handleToggleFavorite(notice._id)} />
      ))}
    </div>
  );
};

export default NoticesList;
