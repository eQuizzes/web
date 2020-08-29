import styled, { css } from 'styled-components';

import { ButtonProps } from './interface';

export const ButtonStyled = styled.button<ButtonProps>`
  font-size: 2.4rem;
  line-height: 1;
  padding: 1.2rem 2.4rem;
  box-shadow: var(--box-shadow);
  text-shadow: var(--text-shadow);
  border-radius: 32px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 300px;
  transition: all 260ms ease-in-out;

  a {
    font-size: inherit;
    display: block;
    width: 100%;
  }

  ${({ color }) => {
    switch (color) {
      case 'primary':
        return css`
          background: ${(props) => props.theme.colors.primary};
          color: ${(props) => props.theme.colors.background};
          font-weight: 600;
          border: 1px solid ${(props) => props.theme.colors.primary};
          transform: scale(1);

          &:hover,
          &:focus {
            transform: scale(0.98);
          }
        `;
      case 'primary-outline':
        return css`
          background: ${(props) => props.theme.colors.backgroundGradient};
          color: ${(props) => props.theme.colors.primary};
          border: 1px solid ${(props) => props.theme.colors.primary};

          &:hover,
          &:focus {
            border-left-width: 4px;
            border-right-width: 4px;
            border-top-color: transparent;
            border-bottom-color: transparent;
          }
        `;
    }
  }}
`;
