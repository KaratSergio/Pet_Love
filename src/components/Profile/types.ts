export interface ProfileFormInput {
  name?: string;
  email?: string;
  phone?: string;
  avatar?: FileList;
}

export interface ProfileEditProps {
  onClose: () => void;
}
