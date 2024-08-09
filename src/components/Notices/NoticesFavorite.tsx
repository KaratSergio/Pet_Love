import { toggleFavorite } from '@redux/notices/notices-slice';
import { useAppSelector, useAppDispatch } from '@hooks/redux-hooks';
import { selectFavoriteNotices } from '@redux/notices/notices-selectors';

import NoticesItem from './NoticesItem';

const NoticesFavorite: React.FC = () => {
  const favoriteNotices = useAppSelector(selectFavoriteNotices);
  const dispatch = useAppDispatch();

  const handleToggleFavorite = (id: string) => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div className="flex flex-wrap gap-6">
      {favoriteNotices.map((notice) => (
        <NoticesItem
          key={notice._id}
          notice={notice}
          onToggleFavorite={() => handleToggleFavorite(notice._id)}
          size="small"
        />
      ))}
    </div>
  );
};

export default NoticesFavorite;
