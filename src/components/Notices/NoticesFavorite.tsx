import { useAppSelector, useAppDispatch } from '@hooks/redux-hooks';
import { selectFavoriteNotices } from '@redux/notices/notices-selectors';
import { removeFavoriteNoticeThunk } from '@redux/notices/notices-thunk';

import NoticesItem from './NoticesItem/NoticesItem';

const NoticesFavorite: React.FC = () => {
  const dispatch = useAppDispatch();
  const favoriteNotices = useAppSelector(selectFavoriteNotices);

  const handleToggleFavorite = (noticeId: string) => {
    dispatch(removeFavoriteNoticeThunk(noticeId));
  };

  if (favoriteNotices.length === 0) {
    return <div>No favorite notices found.</div>;
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-8">
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
