import React, { useEffect, useState } from 'react';

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

import { IQuestionPage, IResponseStorage } from './interface';

const Question: React.FC<IQuestionPage> = ({
  question,
  totalObject,
  handleGetCurrentObject,
}) => {
  const templateResponse = localStorage.getItem('@EQuiz:templateResponse');
  const [active, setActive] = useState<1 | 2 | 3 | 4>(1);
  const [time, setTime] = useState<number | undefined>(undefined);

  function handleActive(number: 1 | 2 | 3 | 4) {
    setActive(number);
  }

  function handleSetTime() {
    if (time === undefined) setTime(question?.timeSeconds);

    if ((time || 0) > 0) {
      let timerInterval = setInterval(() => {
        setTime((c) => (c || 0) - 1);
      }, 1000);
      return () => clearInterval(timerInterval);
    } else if (time === -1) {
      setTime(undefined);
    }
  }

  useEffect(handleSetTime, [time, question]);

  useEffect(() => setTime(question?.timeSeconds), [question]);

  useEffect(() => {
    if (time !== 0 || totalObject === question?.orderByQuiz) return;

    setTime(-1);
    handleGetCurrentObject();
  }, [time]);

  function handleActiveToLetterAlternative() {
    switch (active) {
      case 1:
        return 'A';
      case 2:
        return 'B';
      case 3:
        return 'C';
      case 4:
        return 'D';
    }
  }

  function handleSubmitResponse(
    letterAlternative: string = handleActiveToLetterAlternative()
  ) {
    const responseStudent = localStorage.getItem('@EQuiz:responseStudent');

    let responses: IResponseStorage[] = [];
    if (responseStudent !== null) {
      responses = JSON.parse(responseStudent) as IResponseStorage[];
    }

    const hasResponse = responses.find(
      ({ questionId }) => questionId === question?.questionQuizId || 0
    );

    if (hasResponse) return;

    responses.push({
      letterAlternative,
      questionId: question?.questionQuizId || 0,
    });

    localStorage.setItem('@EQuiz:responseStudent', JSON.stringify(responses));
  }

  return templateResponse !== '2' ? (
    <QuestionWrapper>
      <Header>
        <Number>
          <sup>{question?.orderByQuiz}</sup>/<sub>{totalObject}</sub>
        </Number>
        <Timer>{time}</Timer>
      </Header>
      <QuestionStyles>{question?.text}</QuestionStyles>
      <ResponseWrapper>
        <Response>{question?.alternativeQuiz[active - 1]?.text || ''}</Response>
        <ButtonsWrapper active={active}>
          <Button onClick={() => handleActive(1)}>A</Button>
          <Button onClick={() => handleActive(2)}>B</Button>
          <Button onClick={() => handleActive(3)}>C</Button>
          <Button onClick={() => handleActive(4)}>D</Button>
        </ButtonsWrapper>
        <Button onClick={() => handleSubmitResponse()}>Confirmar</Button>
      </ResponseWrapper>
    </QuestionWrapper>
  ) : (
    <QuestionWrapper>
      <Header>
        <Number>
          <sup>{question?.orderByQuiz}</sup>/<sub>{totalObject}</sub>
        </Number>
        <Timer>{time}</Timer>
      </Header>
      <QuestionStyles>{question?.text}</QuestionStyles>
      <ButtonsWrapperFull active={active}>
        <Button onClick={() => handleActive(1)}>
          {question?.alternativeQuiz[0]?.text}
        </Button>
        <Button onClick={() => handleActive(2)}>
          {question?.alternativeQuiz[1]?.text}
        </Button>
        <Button onClick={() => handleActive(3)}>
          {question?.alternativeQuiz[2]?.text}
        </Button>
        <Button onClick={() => handleActive(4)}>
          {question?.alternativeQuiz[3]?.text}
        </Button>
      </ButtonsWrapperFull>
    </QuestionWrapper>
  );
};

export default Question;
