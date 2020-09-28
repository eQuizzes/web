import React from 'react';

import Chat from '../../../../components/Chat';
import Settings from '../../components/Settings';

import { SlideWrapper, Header, Number, Title } from './styled';

const QuizSlide: React.FC = () => {
  return (
    <SlideWrapper>
      <Header>
        <Number>
          <sup>4</sup>/<sub>9</sub>
        </Number>
        <Settings />
      </Header>
      <Title>Alguma frase que o professor queira explicar</Title>
      <Chat />
    </SlideWrapper>
  );
};

export default QuizSlide;
