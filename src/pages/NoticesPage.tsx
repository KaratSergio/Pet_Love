import { useState } from 'react';
import Title from '@components/Custom/Title';
import NoticesList from '@components/Notices/NoticesList';
import Pagination from '@components/Pagination/Pagination';
import NoticesFilters from '@components/Filters/NoticesFilters';

const NoticesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="mx-auto w-full max-w-desktop p-8 bg-orange-50">
      <Title />
      <NoticesFilters />
      <NoticesList />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </section>
  );
};

export default NoticesPage;
