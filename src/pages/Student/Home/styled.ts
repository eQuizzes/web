import styled from 'styled-components';

export const Name = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
`;

export const Class = styled.p`
  font-size: 1.4rem;
  margin-bottom: 2.4rem;
`;

export const TwoContainers = styled.div`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  grid-gap: 1.6rem;
  padding: 0 24px;
`;

export const Data = styled.p`
  font-size: 3.2rem;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;

export const SubTitle = styled.p`
  font-size: 1.8rem;
  text-align: center;
`;

export const ContainerSmall = styled.div`
  border-radius: 3.2rem;
  padding: 1.6rem;
  background: ${(props) => props.theme.colors.backgroundGradient};
  box-shadow: var(--box-shadow);
  grid-gap: 0.8rem;
  min-width: calc(50% - 1.6rem);
`;

export const ContainerLarge = styled.div`
  margin: 3.2rem 24px 2.4rem;
  border-radius: 3.2rem;
  padding: 1.6rem;
  background: ${(props) => props.theme.colors.backgroundGradient};
  box-shadow: var(--box-shadow);

  ${TwoContainers} {
    margin: 0 0 2.4rem;
  }
`;
