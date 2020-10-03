import React, { useState } from 'react';

import {
  ButtonsWrapperFull,
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
  const templateResponse = localStorage.getItem('templateResponse');
  const [active, setActive] = useState<1 | 2 | 3 | 4>(1);

  function handleActive(number: 1 | 2 | 3 | 4) {
    setActive(number);
  }

  return templateResponse === '1' ? (
    <QuestionWrapper>
      <Header>
        <Number>
          <sup>3</sup>/<sub>9</sub>
        </Number>
        <Timer>60</Timer>
      </Header>
      <QuestionStyles>É a resposta certa?</QuestionStyles>
      <ResponseWrapper>
        <Response>Acho que seja a resposta certa, acertei?!!</Response>
        <ButtonsWrapper active={active}>
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
          <Button>D</Button>
        </ButtonsWrapper>
        <Button>Confirmar</Button>
      </ResponseWrapper>
    </QuestionWrapper>
  ) : (
    <QuestionWrapper>
      <Header>
        <Number>
          <sup>3</sup>/<sub>9</sub>
        </Number>
        <Timer>60</Timer>
      </Header>
      <QuestionStyles>Aguarde o professor iniciar o Quiz</QuestionStyles>
      <ButtonsWrapperFull active={1}>
        <Button onClick={() => handleActive(1)}>
          Acho que seja a resposta certo, acertei?!!
        </Button>
        <Button onClick={() => handleActive(2)}>
          Acho que seja a resposta certo, acertei?!!
        </Button>
        <Button onClick={() => handleActive(3)}>
          Acho que seja a resposta certo, acertei?!!
        </Button>
        <Button onClick={() => handleActive(4)}>
          Acho que seja a resposta certo, acertei?!!
        </Button>
      </ButtonsWrapperFull>
    </QuestionWrapper>
  );
};

export default Question;
