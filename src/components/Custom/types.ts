import { ReactNode } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface CustomModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export interface InputFieldProps {
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  type?: string;
  className?: string;
}

export interface PasswordInputFieldProps {
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export interface TitleProps {
  mainTitle?: string;
  subTitle?: string;
  className?: string;
  mainTitleClassName?: string;
  subTitleClassName?: string;
}

export interface LinkToProps {
  to: string;
  className?: string;
  children: React.ReactNode;
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
