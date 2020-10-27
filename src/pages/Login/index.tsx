import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormField from '../../components/FormField';
import Button from '../../components/Button';
import PageDefault from '../../components/PageDefault';
import iconRecovery from '../../assets/images/icons/recoveryPassword.svg';

import { Title, Description, Form, FieldsWrapper, LinkLogin } from './styled';
import { useAuth } from '../../contexts/auth';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function loginStudent() {
    signIn(username, password);
  }

  return (
    <PageDefault>
      <Title>Login</Title>
      <Description>Deixe seu aprendizado mais engajado</Description>

      <Form>
        <FieldsWrapper>
          <FormField
            label="Usuário"
            name="username"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
            maxLength={15}
          />
          <FormField
            label="Senha"
            name="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            maxLength={32}
          >
            <Link to="/recoveryPassword" title="Recuperar sua senha">
              <img src={iconRecovery} alt="Ícone para recuperação de senha" />
            </Link>
          </FormField>
        </FieldsWrapper>
        <Button onClick={loginStudent}>Entrar</Button>
      </Form>
      <LinkLogin to="/newRegister" title="Cadastre-se agora mesmo">
        Não tem cadastro? <b>Venha com a gente!</b>
      </LinkLogin>
    </PageDefault>
  );
}

export default Login;
