import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3.2rem 1fr;
  grid-gap: 1.6rem;
  background: ${(props) => props.theme.colors.backgroundGradient};
  box-shadow: var(--box-shadow);
  border-radius: 3.2rem;
  padding: 1.6rem;
`;

export const Info = styled.div`
  align-items: flex-start;
  grid-gap: 0.2rem;
`;

export const Name = styled.label`
  font-size: 2rem;
`;

export const DateOfBirth = styled.p`
  font-size: 1.4rem;
`;
