import styled from 'styled-components';

export const ButtonStyled = styled.button`
  font-size: 2.4rem;
  padding: 1.2rem 2.4rem;
  background: ${(props) => props.theme.colors.backgroundGradient};
  color: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadows.container};
  text-shadow: ${(props) => props.theme.shadows.item};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 32px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 300px;
  transition: all 260ms ease-in-out;

  &:hover,
  &:focus {
    border-left-width: 4px;
    border-right-width: 4px;
    border-top-color: transparent;
    border-bottom-color: transparent;
  }

  a {
    font-size: inherit;
    display: block;
    width: 100%;
  }
`;
