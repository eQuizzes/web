import React, { useEffect } from 'react';

import Chat from '../../../../components/Chat';

import constantsLocalStorage from '../../../../constants/localStorage';

import { InitWrapper, Title } from './styled';

import { IStatusInit } from './interface';
import Settings from '../../components/Settings';

const QuizInit: React.FC<IStatusInit> = ({ movQuizId }) => {
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
    </InitWrapper>
  );
};

export default QuizInit;
