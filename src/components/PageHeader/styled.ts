import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.backgroundGradient};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.8rem;
  border-radius: 50%;
  font-size: 3.2rem;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 6rem;
  height: 6rem;
`;
