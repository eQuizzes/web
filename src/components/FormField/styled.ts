import styled, { css } from 'styled-components';

import { InputProps } from './interface';

export const FormFieldWrapper = styled.div`
  width: 100%;

  textarea {
    min-height: 150px;
  }
`;

export const Label = styled.label`
  position: relative;
  width: 100%;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.primary};
  opacity: 0.64;

  height: 2.2rem;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: -1;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 1.8rem;
  font-style: normal;

  padding: 1.4rem 2.6rem;

  transition: 240ms ease-in-out;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    background: ${(props) => props.theme.colors.background};
    border: 3px solid ${(props) => props.theme.colors.primary};
    border-radius: 2rem;
    transform: scaleX(0);
    transition: 360ms ease-in-out;
  }
`;

export const Input = styled.input<InputProps>`
  background: transparent;
  color: ${(props) => props.theme.colors.primary};
  display: block;
  width: 100%;
  height: 5.2rem;
  font-size: 2rem;
  box-shadow: var(--box-shadow);

  outline: 0;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 32px;

  padding: 1.2rem 2.4rem;

  resize: none;

  &:focus + ${Span} {
    z-index: 1;
    opacity: 1;
    left: 1.6rem;
    top: 0;
    transform: scale(0.6) translateY(-1.5rem);

    &:before {
      transform: scaleX(1);
    }
  }

  ${({ hasValue }) =>
    hasValue &&
    css`
      + ${Span} {
        z-index: 1;
        opacity: 1;
        left: 1.6rem;
        top: 0;
        transform: scale(0.6) translateY(-1.5rem);

        &:before {
          transform: scaleX(1);
        }
      }
    `};

  ${({ hasChildren }) =>
    hasChildren &&
    css`
      padding-right: 8rem;
    `};
`;

export const ButtonCircle = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  width: auto;
  padding: 0.8em;
  padding-right: 2.4rem;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: var(--box-shadow);
  transition: all 260ms ease-in-out;

  svg {
    width: 37px;
    height: 37px;
    color: ${(props) => props.theme.colors.background};
    border-radius: 32px;
    border: 3px solid ${(props) => props.theme.colors.background};
    background: ${(props) => props.theme.colors.primary};
    stroke-width: 2.6px;
    transition: all 260ms ease-in-out;
  }

  &:focus-within,
  &:hover {
    padding-right: 0.8em;
    padding-left: 2.4rem;

    svg {
      transform: rotate(360deg);
    }
  }
`;
