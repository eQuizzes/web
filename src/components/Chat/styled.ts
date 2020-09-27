import styled from 'styled-components';

export const ContainerIcon = styled.div`
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 3.2rem;
  background: ${(props) => props.theme.colors.backgroundGradient};
  box-shadow: var(--box-shadow);
  padding: 0.4rem 0.8rem;

  svg {
    stroke-width: 1.5px;
  }
`;
