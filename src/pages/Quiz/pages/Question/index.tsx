import React from 'react';

import {
  QuestionWrapper,
  ResponseWrapper,
  QuestionStyles,
  ButtonsWrapper,
  Response,
  Number,
  Button,
  Header,
  Timer,
} from './styled';

const Question: React.FC = () => {
  return (
    <QuestionWrapper>
      <Header>
        <Number>
          <sup>3</sup>/<sub>9</sub>
        </Number>
        <Timer>60</Timer>
      </Header>
      <QuestionStyles>Aguarde o professor iniciar o Quiz</QuestionStyles>
      <ResponseWrapper>
        <Response>Acho que seja a resposta certo, acertei?!!</Response>
        <ButtonsWrapper active={1}>
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
          <Button>D</Button>
        </ButtonsWrapper>
      </ResponseWrapper>
    </QuestionWrapper>
  );
};

export default Question;
