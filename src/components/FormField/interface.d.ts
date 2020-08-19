import { Link } from 'react-router-dom';

export interface InputProps {
  hasValue: boolean;
}

export interface FormFieldProps {
  value: string;
  name: string;
  label: string;
  onChange: FunctionComponentElement;
  link?: Link;
}
