import styled, { css } from 'styled-components';
import { FiMoreVertical, FiX } from 'react-icons/fi';

import {
  RadioButtonContainer,
  RadioButtonWrapper,
  Label,
} from '../../../../components/RadioButton/styled';

import { SettingsProps } from './interface';

export const MoreVertical = styled(FiMoreVertical)`
  width: 4.8rem;
  height: 4.8rem;
  cursor: pointer;
  transform: scale(1);
  transition: all 320ms ease-in-out;

  &:hover {
    transform: scale(0.9);
  }
`;

export const SettingsWrapper = styled.ul<SettingsProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 2vw;
  bottom: 0;
  padding: 1.6rem;
  border: 3px solid ${(props) => props.theme.colors.primary};
  border-top: 0;
  border-top-right-radius: 3.2rem;
  border-bottom-right-radius: 3.2rem;
  background: ${(props) => props.theme.colors.backgroundGradient};
  grid-gap: 3.2rem;
  transform: translateX(-100%);
  transition: all 260ms ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);
    `}

  ${RadioButtonWrapper} {
    margin-top: 1.6rem;
    grid-gap: 1.6rem;

    ${RadioButtonContainer}, ${Label} {
      width: 100%;
    }

    ${Label} {
      text-align: center;
      font-size: 2.4rem;
      font-weight: 600;
    }
  }
`;

export const SubTitle = styled.li`
  display: flex;
  align-items: center;
  font-size: 2.4rem;
`;

export const Option = styled.li`
  margin-top: 3.2rem;
`;

export const Legend = styled.p`
  font-size: 2rem;
`;

export const Close = styled(FiX)`
  height: 4.8rem;
  width: 4.8rem;
  border-radius: 4.8rem;
  border: 3px solid ${(props) => props.theme.colors.primary};
  box-shadow: var(--box-shadow);
  background: ${(props) => props.theme.colors.backgroundGradient};
  padding: 0.2rem;
  stroke: 2px;
  cursor: pointer;
  transform: scale(1);
  transition: all 320ms ease-in-out;
  margin-left: auto;
  margin-right: 0.8rem;
  margin-bottom: 0.8rem;

  &:hover {
    transform: scale(0.9);
  }
`;
