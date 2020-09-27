import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';

import Chat from '../../../../components/Chat';

import { SlideWrapper, Header, Number, Title } from './styled';

const QuizSlide: React.FC = () => {
  return (
    <SlideWrapper>
      <Header>
        <Number>
          <sup>4</sup>/<sub>9</sub>
        </Number>
        <FiMoreVertical size="4.8rem" />
      </Header>
      <Title>Alguma frase que o professor queira explicar</Title>
      <Chat />
    </SlideWrapper>
  );
};

export default QuizSlide;
