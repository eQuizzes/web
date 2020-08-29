import React from 'react';

import Header from './components/Header';
import LinkItem from './components/LinkItem';

import { HeaderWrapper, Navegation, Menu, LinkList } from './styled';

const PageHeader: React.FC = () => {
  function handleToggleMenu() {
    const menu = document.getElementById('menu');
    menu?.classList.toggle('open');
  }

  return (
    <HeaderWrapper>
      <Menu id="menu">
        <Header
          isMenuIcon={false}
          title="Fechar Menu"
          onClick={handleToggleMenu}
        />

        <Navegation>
          <LinkList>
            <LinkItem to="/newRegister" title="Cadastre-se" />
            <LinkItem to="/" title="Porque a gente?" />
          </LinkList>
        </Navegation>
      </Menu>
      <Header isMenuIcon={true} title="Abrir Menu" onClick={handleToggleMenu} />
    </HeaderWrapper>
  );
};

export default PageHeader;
