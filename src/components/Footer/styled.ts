import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  text-align: center;
  height: 4rem;
  font-weight: 600;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.primary};
  text-shadow: ${(props) => props.theme.shadows.item};
`;
