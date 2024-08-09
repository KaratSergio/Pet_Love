import { useAppSelector } from '@hooks/redux-hooks';
import { selectFavoriteNotices } from '@redux/notices/notices-selectors';
import NoticesFavorite from '../Notices/NoticesFavorite';

const MyNotices: React.FC = () => {
  const favoriteNotices = useAppSelector(selectFavoriteNotices);

  return (
    <section className="flex flex-col py-10 pl-8 w-full">
      <div className="flex gap-2">
        <p className="p-[14px] text-white bg-yellow rounded-30">My favorite pets</p>
        <p className="py-[14px] px-[45px] bg-white rounded-30">Viewed</p>
      </div>
      <div className="flex w-full h-full justify-center items-center">
        {favoriteNotices.length === 0 ? (
          <p className="w-full max-w-[458px] text-center font-medium">
            Oops, <span className="text-yellow">looks like there aren&apos;t any furries</span> on our adorable page
            yet. Do not worry! View your pets on the &quot;find your favorite pet&quot; page and add them to your
            favorites.
          </p>
        ) : (
          <NoticesFavorite />
        )}
      </div>
    </section>
  );
};

export default MyNotices;
