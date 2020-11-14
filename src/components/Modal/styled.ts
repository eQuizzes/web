import styled, {css} from 'styled-components';
import { IModalWrapper } from './interface';

export const ModalWrapper = styled.div<IModalWrapper>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  transform: scale(0);
  transition: transform 320ms ease-in-out;
  grid-gap: 1.6rem;

  ${
    (props) => props.showModal && css`
      transform: scale(1);
      z-index: 99;
    `
  }
`;

export const Title = styled.h4`
  font-size: 3.2rem;
`;

export const Description = styled.h4`
  font-size: 2rem;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.6rem;
  width: 100%;

  button {
    margin: auto;
  }
`;
