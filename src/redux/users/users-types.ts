export interface UserState {
  user: {
    name: string;
    email: string;
    token: string;
    avatar?: string;
    phone?: string;
    noticesViewed?: any[];
    noticesFavorites?: any[];
    pets?: any[];
  } | null;
  isLoading: boolean;
  error: string | null;
}
