import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 0 24px;
`;

export const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  width: 100%;
  padding: 0 24px;
  background: ${(props) => props.theme.colors.backgroundGradient};
  border-radius: 0 0 40px 40px;
  border-bottom: 3px solid ${(props) => props.theme.colors.primary};
  box-shadow: var(--box-shadow);

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
