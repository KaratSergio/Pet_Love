export interface Notice {
  _id: string;
  imgURL: string;
  title: string;
  popularity: number;
  petName: string;
  birthDate: string;
  sex: string;
  type: string;
  category: string;
  comment: string;
  isFavorite: boolean;
}

export interface Category {
  value: string;
  label: string;
}

export interface Sex {
  value: string;
  label: string;
}

export interface Species {
  value: string;
  label: string;
}

export interface Location {
  value: string;
  label: string;
}

export interface NoticesState {
  notices: {
    page: number;
    perPage: number;
    totalPages: number;
    results: Notice[];
  };
  categories: Category[];
  sexes: Sex[];
  species: Species[];
  cities: Location[];
  isLoading: boolean;
  error: string | null;
}
