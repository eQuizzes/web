import React, { useEffect } from 'react';

import Chat from '../../../../components/Chat';
import Settings from '../../components/Settings';
import Button from '../../../../components/Button';

import constantsLocalStorage from '../../../../constants/localStorage';

import { ButtonWrapper, InitWrapper, Title } from './styled';

import { IStatusInit } from './interface';

const QuizInit: React.FC<IStatusInit> = ({ movQuizId, handleExitToQuiz }) => {
  function handleClearResponseLocalStorage() {
    localStorage.removeItem(
      constantsLocalStorage.RESPONSE_QUIZ_STUDENT_ANONYMOUS
    );
  }

  useEffect(handleClearResponseLocalStorage, [constantsLocalStorage]);

  return (
    <InitWrapper>
      <Settings />
      <Title>Aguarde o professor iniciar o Quiz</Title>
      <Chat movQuizId={movQuizId} />
      <ButtonWrapper>
        <Button color="primary-outline" onClick={handleExitToQuiz}>
          Sair do quiz
        </Button>
      </ButtonWrapper>
    </InitWrapper>
  );
};

export default QuizInit;
