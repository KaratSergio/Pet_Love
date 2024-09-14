export interface News {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  id: string;
}

export interface NewsState {
    news: News[];
    isLoading: boolean;
    error: string | null;
}