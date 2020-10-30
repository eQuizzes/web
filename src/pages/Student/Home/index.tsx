import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { useHistory } from 'react-router';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageStudent from '../../../components/PageStudent';
import { useAuth } from '../../../contexts/auth';

import useForm from '../../../hooks/useForm';
import api from '../../../services/api';

import {
  ContainerLarge,
  ContainerSmall,
  TwoContainers,
  Description,
  SubTitle,
  Class,
  Name,
  Data,
} from './styled';

const Home: React.FC = () => {
  const valuesInitials = {
    pin: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  const { addToast } = useToasts();
  const { user } = useAuth();
  const history = useHistory();

  function handleValidationCodeAccessQuiz() {
    api
      .post('movQuizAluno', {
        codigoAcesso: values.pin,
        alunoId: user?.studentId,
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
    <PageStudent type="icon">
      <ContainerLarge>
        <Name>Nome</Name>
        <Class>Turma</Class>
        <TwoContainers>
          <ContainerSmall>
            <Data>100%</Data>
            <Description>Maior assertividade</Description>
          </ContainerSmall>
          <ContainerSmall>
            <Data>14</Data>
            <Description>Quizzers realizados</Description>
          </ContainerSmall>
        </TwoContainers>
        <FormField
          label="Código da Sala"
          name="pin"
          value={values.pin}
          onChange={handleChange}
          onClick={handleValidationCodeAccessQuiz}
        >
          <FiChevronRight />
        </FormField>
      </ContainerLarge>

      <TwoContainers>
        <ContainerSmall>
          <SubTitle>Professor ao vivo</SubTitle>
          <Button color="primary-outline">Assistir</Button>
        </ContainerSmall>
        <ContainerSmall>
          <SubTitle>Recomendações de livros</SubTitle>
          <Button color="primary-outline">Conferir</Button>
        </ContainerSmall>
      </TwoContainers>
    </PageStudent>
  );
};

export default Home;
