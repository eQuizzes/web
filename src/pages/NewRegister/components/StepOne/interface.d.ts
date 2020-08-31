import { ChangeEvent } from 'react';

export interface StepOneProps {
  values: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
  };
  handleChange: FunctionComponentElement;
  handleStep: function(
    1 | 2 | 3,
    1 | 2 | 3
  );
}
