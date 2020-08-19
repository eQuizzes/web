import styled from 'styled-components';

export const ButtonStyled = styled.button`
  font-size: 2.4rem;
  padding: 1.2rem 2.4rem;
  background: transparent;
  color: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadows.container};
  text-shadow: ${(props) => props.theme.shadows.item};
  border: 2.5px solid ${(props) => props.theme.colors.primary};
  border-radius: 32px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 300px;
`;
