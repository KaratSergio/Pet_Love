import { FieldError } from 'react-hook-form';

export interface Location {
  _id: string;
  cityEn: string;
  countyEn: string;
  stateEn: string;
  useCounty: string;
}

export interface Option {
  label: string;
  value: string;
}

export interface CustomSelectProps {
  name: string;
  options: Option[];
  placeholder: string;
  error?: FieldError;
}
