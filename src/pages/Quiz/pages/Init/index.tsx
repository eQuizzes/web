import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';

import Chat from '../../../../components/Chat';

import { InitWrapper, Title } from './styled';

const QuizInit: React.FC = () => {
  return (
    <InitWrapper>
      <FiMoreVertical size="4.8rem" />
      <Title>Aguarde o professor iniciar o Quiz</Title>
      <Chat />
    </InitWrapper>
  );
};

export default QuizInit;
