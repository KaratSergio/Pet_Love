export interface AuthState {
  user: {
    name: string;
    email: string;
    token: string;
  } | null;
  isLoading: boolean;
  error: string | null;
}
