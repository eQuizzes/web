import styled from 'styled-components';
import { PageDefaultProps } from './Landing';

export const Main = styled.main<PageDefaultProps>`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  &:after {
    content: '';
    background-image: url('${({ background }) => background}');
    background-size: 100vh;
    background-repeat: no-repeat;
    background-position: center top;
    background-attachment: fixed;
    opacity: 0.08;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    z-index: -1;

    @media (min-width: 768px) {
      background-size: 100vw;
    }
  }
`;
