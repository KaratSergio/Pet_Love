import { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import { fetchNoticesThunk, addFavoriteNoticeThunk, removeFavoriteNoticeThunk } from '@redux/notices/notices-thunk';
import { selectNotices, selectIsLoading, selectError } from '@redux/notices/notices-selectors';
import { Notice } from '@redux/notices/notices-types';

interface UseNoticesResult {
  isLoading: boolean;
  error: string | null;
  notices: Notice[];
  handleToggleFavorite: (noticeId: string) => void;
}

const useNotices = (currentPage: number, perPage: number): UseNoticesResult => {
  const dispatch = useAppDispatch();
  const notices = useAppSelector(selectNotices);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(fetchNoticesThunk({ page: currentPage, perPage }));
  }, [dispatch, currentPage, perPage]);

  const handleToggleFavorite = useCallback(
    (noticeId: string) => {
      const notice = notices.results.find((notice: Notice) => notice._id === noticeId);

      if (notice?.isFavorite) {
        dispatch(removeFavoriteNoticeThunk(noticeId));
      } else {
        dispatch(addFavoriteNoticeThunk(noticeId));
      }
    },
    [dispatch, notices.results]
  );

  return {
    isLoading,
    error,
    notices: notices.results || [],
    handleToggleFavorite,
  };
};

export default useNotices;
