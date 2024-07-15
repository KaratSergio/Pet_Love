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
