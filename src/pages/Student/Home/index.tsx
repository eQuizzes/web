import React, { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { useHistory } from 'react-router';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageStudent from '../../../components/PageStudent';

import { useAuth } from '../../../contexts/auth';
import api from '../../../services/api';

import {
  ContainerLarge,
  ContainerSmall,
  TwoContainers,
  Description,
  SubTitle,
  Name,
  Data,
} from './styled';

import { IStudentLandingApi, IStudentLanding } from './interface';

const Home: React.FC = () => {
  const [pin, setPin] = useState('');
  const [landingObject, setLandingObject] = useState<IStudentLanding>({
    greaterAssertiveness: '0.0',
    realizedQuizzes: 0,
    nameStudent: '',
  });

  const { addToast } = useToasts();
  const { user } = useAuth();
  const history = useHistory();

  function handleValidationCodeAccessQuiz() {
    api
      .post('movQuizAluno', {
        codigoAcesso: pin,
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

  function handleGetDataHomeStudent() {
    if (user?.studentId === 0) return;

    api
      .get(`aluno/home/${user?.studentId}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'info',
            autoDismiss: false,
          });
          return;
        }

        const dataLanding = response.data as IStudentLandingApi;

        setLandingObject({
          greaterAssertiveness: dataLanding.maiorAcertividade,
          nameStudent: dataLanding.nomeAluno,
          realizedQuizzes: dataLanding.quizzesRealizados,
        });
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

  useEffect(handleGetDataHomeStudent, [user]);

  return (
    <PageStudent type="icon">
      <ContainerLarge>
        <Name>{landingObject.nameStudent}</Name>
        <TwoContainers>
          <ContainerSmall>
            <Data>{landingObject.greaterAssertiveness}%</Data>
            <Description>Maior assertividade</Description>
          </ContainerSmall>
          <ContainerSmall>
            <Data>{landingObject.realizedQuizzes}</Data>
            <Description>Quizzers realizados</Description>
          </ContainerSmall>
        </TwoContainers>
        <FormField
          label="Código da Sala"
          name="pin"
          value={pin}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPin(e.target.value)
          }
          handleListInPressKey={[
            {
              key: 'Enter',
              handleFunction: handleValidationCodeAccessQuiz,
            },
          ]}
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
