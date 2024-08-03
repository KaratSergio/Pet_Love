interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex space-x-2">
      <button onClick={() => onPageChange(1)} disabled={currentPage === 1} className="btn btn-secondary">
        &lt;&lt;
      </button>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="btn btn-secondary">
        &lt;
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`btn ${currentPage === page ? 'btn-primary' : 'btn-secondary'}`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="btn btn-secondary"
      >
        &gt;
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="btn btn-secondary"
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;
