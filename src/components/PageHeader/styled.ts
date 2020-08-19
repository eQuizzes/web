import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
`;

export const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  padding: 0 24px;
  background: ${(props) => props.theme.colors.backgroundGradient};
  border-radius: 0 0 40px 40px;
  border-bottom: 3px solid ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadows.container};

  transform: translateY(-100%);
  transition: all 260ms ease-in-out;

  &.open {
    transform: translateY(0%);
  }
`;

export const Navegation = styled.nav`
  width: 100%;
  padding: 32px;
`;

export const LinkList = styled.ul`
  flex-direction: column;
`;

export const LinkItem = styled.li`
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 500;
  box-shadow: ${(props) => props.theme.shadows.container};
  text-shadow: ${(props) => props.theme.shadows.item};
`;
