import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import { fetchNoticesThunk, toggleFavoriteNoticeThunk } from '@redux/notices/notices-thunk';
import { selectNotices, selectIsLoading, selectError } from '@redux/notices/notices-selectors';

import NoticesItem from './NoticesItem';

const NoticesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const notices = useAppSelector(selectNotices);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(fetchNoticesThunk());
  }, [dispatch]);

  const handleToggleFavorite = (noticeId: string) => {
    dispatch(toggleFavoriteNoticeThunk(noticeId));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notices.map((notice) => (
        <NoticesItem key={notice.id} notice={notice} onToggleFavorite={() => handleToggleFavorite(notice.id)} />
      ))}
    </div>
  );
};

export default NoticesList;
