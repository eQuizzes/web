import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
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

import { HeaderProps } from './interface';

const links = [
  {
    route: 'newRegister',
    title: 'Cadastre-se',
    logout: true,
  },
  {
    route: 'about',
    title: 'Porque a gente?',
    logout: true,
  },
  {
    route: 'home',
    title: 'Home',
  },
  {
    route: 'class',
    title: 'Turma',
  },
  {
    route: 'live',
    title: 'Live',
  },
  {
    route: 'account',
    title: 'Perfil',
  },
];

const PageHeader: React.FC<HeaderProps> = ({ type, studentOn, text }) => {
  const valuesInitials = {
    pin_menu: '',
  };

  const howType = type === undefined ? 'icon' : type;
  const hasStudentOn = Boolean(studentOn);
  const { url } = useRouteMatch();
  const routeActive = url.replace('/student/', '');
  const { handleChange, values } = useForm(valuesInitials);

  function isHomePage(path: string): boolean {
    const isPageHome = path === 'home' && routeActive === '';

    return isPageHome;
  }

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
          student={hasStudentOn}
          type={hasStudentOn ? 'exit' : 'icon'}
        />

        <Navigation>
          <LinkList>
            {links
              .filter(
                ({ route, logout }) =>
                  route !== routeActive &&
                  Boolean(logout) === !hasStudentOn &&
                  !isHomePage(route)
              )
              .map((link) => {
                const logged = Boolean(link?.logout) ? '' : '/student';
                return (
                  <LinkItem
                    key={link.route}
                    to={`${logged}/${link.route}`}
                    title={link.title}
                  />
                );
              })}
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
      <Header
        isMenuIcon={true}
        title="Abrir Menu"
        onClick={handleToggleMenu}
        student={hasStudentOn}
        type={howType}
        text={text}
      />
    </HeaderWrapper>
  );
};

export default PageHeader;
