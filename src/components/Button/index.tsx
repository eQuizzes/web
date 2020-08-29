import React from 'react';

import { ButtonStyled } from './styled';

import { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = ({ children, color }) => {
  return <ButtonStyled color={color}>{children}</ButtonStyled>;
};

export default Button;
