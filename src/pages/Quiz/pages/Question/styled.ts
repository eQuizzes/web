import styled from 'styled-components';

import logoSVG from '../../../../assets/images/iconTime.svg';

import { ButtonsProps } from './interface';

export const QuestionWrapper = styled.div`
  padding: 2.4rem 24px 4rem;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  flex: 1;
`;

export const Header = styled.div`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Number = styled.p`
  font-size: 3.2rem;
`;

export const Timer = styled.p`
  font-size: 3.2rem;
  background: url(${logoSVG});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2.4rem 1.6rem 2rem;
`;

export const QuestionStyles = styled.p`
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 2.4rem;
  text-shadow: var(--text-shadow);
  padding-top: 6.4rem;
  padding-bottom: 6.4rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Response = styled.p`
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 2.8rem;
  text-shadow: var(--text-shadow);
`;

export const Button = styled.button`
  border: 0.4rem solid ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.backgroundGradient};
  border-radius: 3.2rem;
  padding: 0.8rem 1.8rem;
  box-shadow: var(--box-shadow);
  text-shadow: var(--text-shadow);
  font: 600 2rem 'Roboto', sans-serif;
  color: ${(props) => props.theme.colors.primary};
  transition: all 260ms ease-in-out;
`;

export const ButtonsWrapper = styled.div<ButtonsProps>`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  grid-gap: 0.8rem;
  width: 100%;

  ${Button} {
    &:nth-child(${(props) => props.active}) {
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.background};
    }
  }
`;

export const ButtonsWrapperFull = styled(ButtonsWrapper)`
  flex-direction: column;
  grid-gap: 1.6rem;

  ${Button} {
    width: 100%;
    font-size: 2.2rem;
    text-align: center;
    justify-content: center;
  }
`;

export const ResponseWrapper = styled.div`
  width: 100%;
  max-width: 880px;
  margin: 0 auto;
  grid-gap: 2.4rem;

  > ${Button} {
    font-size: 2.4rem;
    font-weight: 500;
    align-items: center;
  }
`;

export const MessageWrapper = styled.div`
  width: 100%;
  padding: 24px;
  height: 100%;
  flex: 1;
`;

export const TextMessage = styled.p`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 3.2rem;
`;
