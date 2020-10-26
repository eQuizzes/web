import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
`;

export const Title = styled.h2`
  padding: 2rem 24px 8px;
  font-size: 4.6rem;
  width: 100%;
`;

export const Description = styled.p`
  padding: 0 24px;
  font-size: 1.8rem;
  width: 100%;
`;

export const Form = styled.form`
  padding: 40px 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 12px;
  flex: 1;
  width: 100%;
`;

export const TwoColumns = styled.div`
  flex-direction: column;
  row-gap: 12px;
  margin: auto;
  max-width: 800px;
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  margin-bottom: 2.4rem;
  margin: auto;
  max-width: 800px;
  width: 100%;

  button {
    margin: 8px auto;
  }
`;
