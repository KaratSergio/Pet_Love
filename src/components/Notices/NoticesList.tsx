import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import { fetchNoticesThunk, addFavoriteNoticeThunk, removeFavoriteNoticeThunk } from '@redux/notices/notices-thunk';
import { selectNotices, selectIsLoading, selectError } from '@redux/notices/notices-selectors';
import NoticesItem from './NoticesItem';
import { Notice } from '../../redux/notices/notices-types';

interface NoticesListProps {
  currentPage: number;
  perPage: number;
}

const NoticesList: React.FC<NoticesListProps> = ({ currentPage, perPage }) => {
  const dispatch = useAppDispatch();
  const notices = useAppSelector(selectNotices);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(fetchNoticesThunk({ page: currentPage, perPage }));
  }, [dispatch, currentPage, perPage]);

  const handleToggleFavorite = (noticeId: string) => {
    const notice = notices.results.find((notice: Notice) => notice._id === noticeId);

    if (notice?.isFavorite) {
      dispatch(removeFavoriteNoticeThunk(noticeId));
    } else {
      dispatch(addFavoriteNoticeThunk(noticeId));
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const results = notices?.results || [];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {Array.isArray(results) &&
        results.map((notice) => (
          <NoticesItem key={notice._id} notice={notice} onToggleFavorite={() => handleToggleFavorite(notice._id)} />
        ))}
    </div>
  );
};

export default NoticesList;
