import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border: 2.5px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.container};
  padding: 1.2rem 2.4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.4rem;
  text-shadow: ${({ theme }) => theme.shadows.item};
  border-radius: 32px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 300px;
`;
