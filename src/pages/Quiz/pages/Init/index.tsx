import React, { useEffect } from 'react';
import { FiMoreVertical } from 'react-icons/fi';

import Chat from '../../../../components/Chat';

import constantsLocalStorage from '../../../../constants/localStorage';

import { InitWrapper, Title } from './styled';

import { IStatusInit } from './interface';

const QuizInit: React.FC<IStatusInit> = ({ movQuizId }) => {
  function handleClearResponseLocalStorage() {
    localStorage.removeItem(
      constantsLocalStorage.RESPONSE_QUIZ_STUDENT_ANONYMOUS
    );
  }

  useEffect(handleClearResponseLocalStorage, [constantsLocalStorage]);

  return (
    <InitWrapper>
      <FiMoreVertical size="4.8rem" />
      <Title>Aguarde o professor iniciar o Quiz</Title>
      <Chat movQuizId={movQuizId} />
    </InitWrapper>
  );
};

export default QuizInit;
