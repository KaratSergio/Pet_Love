import { Notice } from '@redux/notices/notices-types';

export interface NoticesListProps {
  currentPage: number;
  perPage: number;
}

export interface NoticesItemProps {
  notice: Notice;
  onToggleFavorite?: () => void;
  size?: 'large' | 'small';
}

export interface DetailsListProps {
  details: { label: string; value: string }[];
}
