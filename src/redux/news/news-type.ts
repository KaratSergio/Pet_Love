export interface News {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  id: string;
}

export interface NewsApiResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: News[];
}

export interface NewsState {
  news: NewsApiResponse | null;
  isLoading: boolean;
  error: string | null;
  totalPages: number;
}

export interface NewsItemProps {
  item: News;
}
