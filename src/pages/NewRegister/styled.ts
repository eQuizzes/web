import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Title = styled.h2`
  padding: 2rem 24px 8px;
  font-size: 4.6rem;
`;

export const Description = styled.p`
  padding: 0 24px 4rem;
  font-size: 1.8rem;
`;

export const Form = styled.form`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  button {
    margin: 32px auto 16px auto;
  }
`;

export const TwoColumns = styled.div`
  flex-direction: row;
  column-gap: 12px;
`;

export const LinkLogin = styled(Link)`
  padding: 0 24px;
  margin: 0 auto;
`;
