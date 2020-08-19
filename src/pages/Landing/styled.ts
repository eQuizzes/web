import styled from 'styled-components';

import { LandingPageProps } from './Landing';

export const LandingPage = styled.main<LandingPageProps>`
  background-image: url('${({ background }) => background}');
  background-repeat: no-repeat;
  background-position: right bottom;
  background-attachment: fixed;
  padding: 0 2.4rem;
  width: 100vw;
  max-width: 900px;

  @media (min-width: 779px) {
    background-image: none;
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

export const Article = styled.article``;

export const Title = styled.h1`
  margin-top: 5rem;
  text-align: left;
  font-size: 4.2rem;
  font-weight: bold;
  text-shadow: ${(props) => props.theme.shadows.item};
`;

export const Description = styled.p`
  font-size: 1.6rem;
  margin-top: 16px;
  text-shadow: ${(props) => props.theme.shadows.item};
`;

export const Section = styled.section`
  height: 45vh;
  max-height: 300px;
  justify-content: space-between;
  margin-bottom: 8rem;
`;
