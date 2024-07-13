import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface ModalProps {
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
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
}

export interface PasswordInputFieldProps {
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}
