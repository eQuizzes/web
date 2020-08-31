import { ChangeEvent } from 'react';

export interface StepThreeProps {
  handleConfirmRegister: function();
  handleStep: function(
    1 | 2 | 3,
    1 | 2 | 3
  );
}
