export interface WorkDay {
  _id: string;
  isOpen: boolean;
  from?: string;
  to?: string;
}

export interface Friend {
  _id: string;
  title: string;
  url: string;
  addressUrl: string;
  imageUrl: string;
  logo: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  workDays: WorkDay[];
  hours: string;
}

export interface FriendsState {
  friends: Friend[];
  isLoading: boolean;
  error: string | null;
}

export interface FriendsItemProps {
  friend: Friend;
}
