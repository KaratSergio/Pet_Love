import { Notice } from '@redux/notices/notices-types';

export interface NoticesListProps {
  currentPage: number;
  perPage: number;
  searchQuery: string;
  filters: {
    category: string;
    sex: string;
    species: string;
    location: string;
    filter: string;
  };
}

export interface NoticesItemProps {
  notice: Notice;
  onToggleFavorite?: () => void;
  size?: 'large' | 'small';
}

export interface DetailsListProps {
  details: { label: string; value: string }[];
}
