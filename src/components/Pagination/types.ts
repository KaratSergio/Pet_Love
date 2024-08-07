export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  className?: string;
  onPageChange: (page: number) => void;
}
