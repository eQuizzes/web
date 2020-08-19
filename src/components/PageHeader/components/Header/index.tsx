import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

import logoImg from '../../../../assets/images/FavIcon.svg';

import { HeaderContainer, Logo, Button } from './styled';

import { HeaderProps } from './interface';

const Header: React.FC<HeaderProps> = ({ isMenuIcon, title, onClick }) => {
  return (
    <HeaderContainer>
      <Button>
        <Logo src={logoImg} alt="Logo English Quiz" />
      </Button>

      <Button title={title} onClick={onClick}>
        {isMenuIcon ? <FiMenu /> : <FiX />}
      </Button>
    </HeaderContainer>
  );
};

export default Header;
