import React from 'react';

import { ButtonStyled } from './styled';

import { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
