import Icon from '../Icon/Icon';
import { PaginationProps } from './types';

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, className }) => {
  const pages = [];

  if (totalPages <= 1) return null;

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage > 1 && currentPage < totalPages) {
      pages.push(currentPage - 1, currentPage, currentPage + 1);
    } else if (currentPage === 1) {
      pages.push(1, 2, 3);
    } else if (currentPage === totalPages) {
      pages.push(totalPages - 2, totalPages - 1, totalPages);
    }

    if (currentPage > 2) {
      pages.unshift('...');
    }

    if (currentPage < totalPages - 1) {
      pages.push('...');
    }
  }

  const arrowColor = (disabled: boolean) => (disabled ? 'fill-lightBlack' : 'fill-black');

  return (
    <div className={`flex space-x-2 ${className}`}>
      <button onClick={() => onPageChange(1)} disabled={currentPage === 1} className="btn px-[9px]">
        <Icon id="icon-chevron-left" color={arrowColor(currentPage === 1)} width="w-[7px]" height="h-[14px]" />
        <Icon id="icon-chevron-left" color={arrowColor(currentPage === 1)} width="w-[7px]" height="h-[14px]" />
      </button>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="btn px-[13px]">
        <Icon id="icon-chevron-left" color={arrowColor(currentPage === 1)} width="w-[7px]" height="h-[14px]" />
      </button>
      {pages.map((page, index) =>
        typeof page === 'number' ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`rounded-full ${
              currentPage === page ? 'bg-yellow border-yellow' : 'bg-transparent border-alfaBlack'
            } border rounded px-[13px] py-1`}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="btn px-[10px]">
            {page}
          </span>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="btn px-[13px]"
      >
        <Icon
          id="icon-chevron-right"
          color={arrowColor(currentPage === totalPages)}
          width="w-[7px]"
          height="h-[14px]"
        />
      </button>
      <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} className="btn px-[9px]">
        <Icon
          id="icon-chevron-right"
          color={arrowColor(currentPage === totalPages)}
          width="w-[7px]"
          height="h-[14px]"
        />
        <Icon
          id="icon-chevron-right"
          color={arrowColor(currentPage === totalPages)}
          width="w-[7px]"
          height="h-[14px]"
        />
      </button>
    </div>
  );
};

export default Pagination;
