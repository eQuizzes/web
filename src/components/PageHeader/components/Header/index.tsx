import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiBell, FiLogOut, FiMenu, FiX } from 'react-icons/fi';

import logoImg from '../../../../assets/images/FavIcon.svg';

import { HeaderContainer, Logo, Button, Text } from './styled';

import { HeaderProps } from './interface';
import { useAuth } from '../../../../contexts/auth';

const Header: React.FC<HeaderProps> = ({
  isMenuIcon,
  title,
  onClick,
  student,
  type,
  text,
}) => {
  const hasText = Boolean(text);
  const history = useHistory();
  const { signOut } = useAuth();

  function handleBackNavigation() {
    history.goBack();
  }

  return (
    <HeaderContainer>
      {student ? (
        type === 'back' ? (
          <Button onClick={handleBackNavigation}>
            <FiArrowLeft />
          </Button>
        ) : type === 'exit' ? (
          <Button onClick={signOut}>
            <FiLogOut />
          </Button>
        ) : (
          <Button>
            <FiBell />
          </Button>
        )
      ) : (
        <Link to="/" title="Ir para Home">
          <Button>
            <Logo src={logoImg} alt="Logo English Quiz" />
          </Button>
        </Link>
      )}

      {student && hasText && <Text>{text}</Text>}

      <Button title={title} onClick={onClick}>
        {isMenuIcon ? <FiMenu /> : <FiX />}
      </Button>
    </HeaderContainer>
  );
};

export default Header;
