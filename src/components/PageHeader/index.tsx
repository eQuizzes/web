import React from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import Header from './components/Header';
import LinkItem from './components/LinkItem';
import Button from '../Button';

import FormField from '../FormField';

import useForm from '../../hooks/useForm';

import {
  ButtonsWrapper,
  HeaderWrapper,
  Navigation,
  LinkList,
  Menu,
} from './styled';

import { HeaderProps } from './interface';
import api from '../../services/api';
import { useToasts } from 'react-toast-notifications';

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

const PageHeader: React.FC<HeaderProps> = ({
  type = 'icon',
  studentOn,
  text,
}) => {
  const valuesInitials = {
    pin_menu: '',
  };

  const hasStudentOn = Boolean(studentOn);
  const { url } = useRouteMatch();
  const routeActive = url.replace('/student/', '');
  const { handleChange, values } = useForm(valuesInitials);
  const { addToast } = useToasts();
  const history = useHistory();

  function isHomePage(path: string): boolean {
    const isPageHome = path === 'home' && routeActive === '';

    return isPageHome;
  }

  function handleToggleMenu() {
    const menu = document.getElementById('menu');
    menu?.classList.toggle('open');
  }

  function handleValidationCodeAccessQuiz() {
    api
      .post('movQuizAluno', {
        codigoAcesso: values.pin_menu,
        nomeAluno: '',
      })
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'info',
            autoDismiss: true,
          });
          return;
        }

        history.push(
          `/quiz/${response.data.movQuizId}/${response.data.quizId}`
        );
      })
      .catch((error) => {
        console.error(error.message);
        addToast(
          'Houve um erro inesperado na validação do código, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
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
                return (
                  <LinkItem
                    key={link.route}
                    to={`/${link.route}`}
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
              onClick={handleValidationCodeAccessQuiz}
            >
              <FiChevronRight />
            </FormField>
            {!hasStudentOn && (
              <Button color="primary">
                <Link to="/login" title="Faça o login">
                  Entrar
                </Link>
              </Button>
            )}
          </ButtonsWrapper>
        </Navigation>
      </Menu>
      <Header
        isMenuIcon={true}
        title="Abrir Menu"
        onClick={handleToggleMenu}
        student={hasStudentOn}
        type={type}
        text={text}
      />
    </HeaderWrapper>
  );
};

export default PageHeader;
