import React, { useState } from 'react';
import Lottie from 'lottie-react-web';
import { Link, useHistory } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';

import PageHeader from '../../components/PageHeader';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import api from '../../services/api';

import lottieBooks from '../../assets/lottie/books.json';

import {
  Description,
  LandingPage,
  FistFold,
  Section,
  Article,
  Title,
} from './styled';

function Landing() {
  const [codeAccessQuiz, setCodeAccessQuiz] = useState('');

  const history = useHistory();
  const { addToast } = useToasts();

  function handleValidationCodeAccessQuiz() {
    api
      .post('movQuizAluno', {
        codigoAcesso: codeAccessQuiz,
        nomeAluno: '',
      })
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'info',
            autoDismiss: false,
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
    <LandingPage>
      <FistFold>
        <PageHeader />
        <Title>A alternativa correta para seus estudos!</Title>

        <Lottie
          options={{
            autoplay: true,
            loop: true,
            animationData: lottieBooks,
          }}
        />

        <Article>
          <FormField
            label="Código da Sala"
            name="codeAccessQuiz"
            value={codeAccessQuiz}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCodeAccessQuiz(e.target.value)
            }
            onClick={handleValidationCodeAccessQuiz}
            maxLength={8}
          >
            <FiChevronRight />
          </FormField>

          <Link to="/login" title="Possui cadastro? Faça o login">
            Possui cadastro? <span>Faça o login</span>
          </Link>
        </Article>
      </FistFold>

      <Section>
        <Article>
          <Title>Venha com a gente!</Title>
          <Description>
            Que tal você fazer parte de nossa história? Tenha acessos e
            conteúdos exclusivos
          </Description>
        </Article>
        <Button color="primary-outline">
          <Link to="/newRegister" title="Cadastra-se">
            Cadastre-se
          </Link>
        </Button>
      </Section>

      <Section>
        <Article>
          <Title>Já tem uma conta?</Title>
          <Description>
            Incrível! Você já é parte de tudo isso! Conte conosco para auxilar
            seu inglês!
          </Description>
        </Article>
        <Button color="primary-outline">
          <Link to="/login" title="Faça o login">
            Entre
          </Link>
        </Button>
      </Section>

      <Footer />
    </LandingPage>
  );
}

export default Landing;
