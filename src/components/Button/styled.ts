import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border: 2.5px solid ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.background};
  box-shadow: ${(props) => props.theme.shadows.container};
  padding: 1.2rem 2.4rem;
  color: ${(props) => props.theme.colors.primary};
  font-size: 2.4rem;
  text-shadow: ${(props) => props.theme.shadows.item};
  border-radius: 32px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 300px;
`;
