import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiLogOut, FiMenu, FiX } from 'react-icons/fi';

import logoImg from '../../../../assets/images/FavIcon.svg';

import { HeaderContainer, Logo, Button, Text } from './styled';

import { HeaderProps } from './interface';

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
          <Button>
            <FiLogOut />
          </Button>
        ) : (
          <Link to="/student/home" title="Ir para Home">
            <Button>
              <Logo src={logoImg} alt="Logo English Quiz" />
            </Button>
          </Link>
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
