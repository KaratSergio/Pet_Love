import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useAppSelector } from '@hooks/redux-hooks';
import Title from '@components/Custom/Title';
import NoticesList from '@components/Notices/NoticesList';
import Pagination from '@components/Pagination/Pagination';
import NoticesFilters from '@components/Filters/NoticesFilters';
import { selectTotalPages } from '@redux/notices/notices-selectors';

const NoticesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(6);
  const [searchQuery] = useState('');
  const [filters] = useState({
    category: '',
    sex: '',
    species: '',
    location: '',
    filter: '',
  });

  const totalPages = useAppSelector(selectTotalPages);

  const methods = useForm();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <FormProvider {...methods}>
      <section className="mx-auto w-full max-w-desktop p-8 bg-orange-50">
        <Title mainTitleClassName="sm:text-[54px]" />
        <NoticesFilters />
        <NoticesList currentPage={currentPage} perPage={perPage} searchQuery={searchQuery} filters={filters} />
        <div className="flex justify-center mt-[60px]">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </section>
    </FormProvider>
  );
};

export default NoticesPage;
