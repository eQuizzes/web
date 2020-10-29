import React, { useEffect } from 'react';

import Chat from '../../../../components/Chat';
import Settings from '../../components/Settings';

import { SlideWrapper, Header, Number, Title } from './styled';

import { ISlidePage } from './interface';

const QuizSlide: React.FC<ISlidePage> = ({
  slide,
  totalObject,
  handleGetCurrentObject,
}) => {
  useEffect(() => {
    let intervalGetCurrent = setInterval(handleGetCurrentObject, 5000);
    return () => clearInterval(intervalGetCurrent);
  }, [setInterval]);

  return (
    <SlideWrapper>
      <Header>
        <Number>
          <sup>{slide?.orderByQuiz}</sup>/<sub>{totalObject}</sub>
        </Number>
        <Settings />
      </Header>
      <Title>{slide?.content}</Title>
      <Chat />
    </SlideWrapper>
  );
};

export default QuizSlide;
