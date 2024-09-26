export interface Notice {
  _id: string;
  imgURL: string;
  title: string;
  popularity: number;
  name: string;
  birthday: string;
  sex: string;
  species: string;
  category: string;
  comment: string;
  isFavorite?: boolean;
  price?: number;
}

export interface Location {
  _id: string;
  cityEn: string;
  countyEn: string;
  stateEn: string;
  useCounty: string;
}

export interface NoticesState {
  notices: {
    page: number;
    perPage: number;
    totalPages: number;
    results: Notice[];
  };
  categories: string[];
  sexes: string[];
  species: string[];
  cities: Location[];
  isLoading: boolean;
  error: string | null;
  favoriteIds: string[];
}

export interface FetchNoticesParams {
  page: number;
  perPage: number;
  keyword?: string;
  category?: string;
  sex?: string;
  species?: string;
  location?: string;
  filter?: string;
}
