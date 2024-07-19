export interface LogInFormInputs {
  email: string;
  password: string;
}

export interface RegistrationFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LogoutButtonProps {
  className?: string;
}

interface ImageSource {
  default: string;
  '2x': string;
  '3x': string;
  position: {
    top: string;
    left: string;
  };
}

export interface PetBlockProps {
  images: {
    mobile: ImageSource;
    tablet: ImageSource;
    desktop: ImageSource;
  };
  imageWidth?: string;
  imageHeight?: string;
  className?: string;
  style?: React.CSSProperties;
}