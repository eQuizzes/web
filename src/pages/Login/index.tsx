import React from 'react';

import FormField from '../../components/FormField';
import Button from '../../components/Button';
import PageDefault from '../../components/PageDefault';

import useForm from '../../hooks/useForm';

import iconRecovery from '../../assets/images/icons/recoveryPassword.svg';

import { Title, Description, Form, FieldsWrapper, LinkLogin } from './styled';
import { Link } from 'react-router-dom';

function Login() {
  const valuesInitials = {
    username: '',
    password: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageDefault>
      <Title>Entre</Title>
      <Description>Deixe seu aprendizado mais engajado</Description>

      <Form>
        <FieldsWrapper>
          <FormField
            label="Usuário"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          <FormField
            label="Senha"
            name="password"
            value={values.password}
            onChange={handleChange}
          >
            <Link to="/recoveryPassword" title="Recuperar sua senha">
              <img src={iconRecovery} alt="Ícone para recuperação de senha" />
            </Link>
          </FormField>
        </FieldsWrapper>
        <Button color="primary">Entrar</Button>
      </Form>
      <LinkLogin to="/newRegister" title="Cadastre-se agora mesmo">
        Não tem cadastro? <b>Venha com a gente</b>
      </LinkLogin>
    </PageDefault>
  );
}

export default Login;
