import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  text-align: center;
  height: 4rem;
  font-weight: 600;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: ${({ theme }) => theme.shadows.item};
`;
