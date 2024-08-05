import { useState } from 'react';
import { useAppSelector } from '@hooks/redux-hooks';
import Title from '@components/Custom/Title';
import NoticesList from '@components/Notices/NoticesList';
import Pagination from '@components/Pagination/Pagination';
import NoticesFilters from '@components/Filters/NoticesFilters';
import { selectTotalPages } from '@redux/notices/notices-selectors';

const NoticesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(6);
  const totalPages = useAppSelector(selectTotalPages);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="mx-auto w-full max-w-desktop p-8 bg-orange-50">
      <Title />
      <NoticesFilters />
      <NoticesList currentPage={currentPage} perPage={perPage} />
      <div className="flex justify-center mt-[60px]">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </section>
  );
};

export default NoticesPage;
