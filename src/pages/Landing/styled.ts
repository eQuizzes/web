import styled from 'styled-components';

import { HeaderWrapper } from '../../components/PageHeader/styled';

import { LandingPageProps } from './Landing';

export const LandingPage = styled.main<LandingPageProps>`
  padding: 0 2.4rem;
  width: 100%;

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

  ${HeaderWrapper} {
    padding: 0;
  }
`;

export const FistFold = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  article a {
    margin-top: 1.6rem;

    span {
      font-weight: 500;
    }
  }
`;

export const Article = styled.article`
  @media (min-width: 768px) {
    width: 768px;
    max-width: 768px;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  margin-top: 5rem;
  text-align: left;
  font-size: 4.2rem;
  font-weight: bold;
  text-shadow: var(--text-shadow);

  @media (min-width: 768px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: 1.6rem;
  margin-top: 16px;
  text-shadow: var(--text-shadow);
`;

export const Section = styled.section`
  height: 45vh;
  max-height: 300px;
  justify-content: space-between;
  margin-bottom: 8rem;
`;
