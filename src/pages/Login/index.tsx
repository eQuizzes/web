import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import FormField from '../../components/FormField';
import Button from '../../components/Button';
import PageDefault from '../../components/PageDefault';

import { useAuth } from '../../contexts/auth';

import iconRecovery from '../../assets/images/icons/recoveryPassword.svg';

import { Title, Description, Form, FieldsWrapper, LinkLogin } from './styled';
import storage from '../../utils/storage';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();
  const { addToast } = useToasts();

  function loginStudent() {
    signIn(username, password);
  }

  function handleHasExpirationToken() {
    if (window.location.href.search('tokenExpired') <= 0) return;

    addToast('Sua autenticação expirou, efetue o login novamente', {
      appearance: 'info',
      autoDismiss: true,
    });
    storage.removeValuesJTW();

    document.getElementById('id_username')?.focus();
  }

  useEffect(handleHasExpirationToken, [addToast]);

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
            type="password"
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
