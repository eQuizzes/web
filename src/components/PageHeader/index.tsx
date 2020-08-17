import React from 'react';
import { FiMenu } from 'react-icons/fi';

import logoImg from '../../assets/images/FavIcon.svg';

import { Button, Header, Logo } from './styled';

function PageHeader() {
  return (
    <Header>
      <Button>
        <Logo src={logoImg} alt="Logo English Quiz" />
      </Button>

      <Button title="Toggle Menu">
        <FiMenu />
      </Button>
    </Header>
  );
}

export default PageHeader;
