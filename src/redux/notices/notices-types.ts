export interface Notice {
  id: string;
  image: string;
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
  notices: Notice[];
  categories: Category[];
  sexes: Sex[];
  species: Species[];
  locations: Location[];
  isLoading: boolean;
  error: string | null;
}
