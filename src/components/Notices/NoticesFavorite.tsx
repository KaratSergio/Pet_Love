import { useAppSelector } from '@hooks/redux-hooks';
import { selectFavoriteNotices } from '@redux/notices/notices-selectors';

import NoticesItem from './NoticesItem';

const NoticesFavorite: React.FC = () => {
  const favoriteNotices = useAppSelector(selectFavoriteNotices);

  return (
    <div className="flex flex-wrap gap-6 mt-8">
      {favoriteNotices.map((notice) => (
        <NoticesItem key={notice._id} notice={notice} size="small" />
      ))}
    </div>
  );
};

export default NoticesFavorite;
