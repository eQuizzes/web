import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import Header from './components/Header';
import LinkItem from './components/LinkItem';
import Button from '../Button';

import FormField from '../FormField';

import useForm from '../../hooks/useForm';

import {
  HeaderWrapper,
  Navigation,
  Menu,
  LinkList,
  ButtonsWrapper,
} from './styled';

const PageHeader: React.FC = () => {
  const valuesInitials = {
    pin_menu: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

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

        <Navigation>
          <LinkList>
            <LinkItem to="/newRegister" title="Cadastre-se" />
            <LinkItem to="/about" title="Porque a gente?" />
          </LinkList>
          <ButtonsWrapper>
            <FormField
              label="Código da Sala"
              name="pin_menu"
              value={values.pin_menu}
              onChange={handleChange}
              onClick={() => {}}
            >
              <FiChevronRight />
            </FormField>
            <Button color="primary">
              <Link to="/login" title="Faça o login">
                Entrar
              </Link>
            </Button>
          </ButtonsWrapper>
        </Navigation>
      </Menu>
      <Header isMenuIcon={true} title="Abrir Menu" onClick={handleToggleMenu} />
    </HeaderWrapper>
  );
};

export default PageHeader;
