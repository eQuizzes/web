import styled from 'styled-components';

import { LandingPageProps } from './Landing';

export const LandingPage = styled.main<LandingPageProps>`
  background-image: url('${({ background }) => background}');
  background-repeat: no-repeat;
  background-position: 2.4rem 34rem;
  padding: 0 2.4rem;
`;

export const FistFold = styled.div`
  height: 100vh;

  a {
    margin-top: 1.6rem;

    span {
      font-weight: 500;
    }
  }
`;

export const Title = styled.h1`
  margin: 10rem 0;
  font-size: 4.6rem;
  font-weight: bold;
  text-shadow: var(--shadow-item);
`;