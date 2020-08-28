import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  text-align: center;
  height: 4rem;
  font-weight: 600;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.primary};
  text-shadow: 1px 2px 4px ${(props) => props.theme.shadows.item};
`;
