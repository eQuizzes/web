import React from 'react';

import PageStudent from '../../../../components/PageStudent';
import Question from './components/Question';

import {
  HistoryQuestions,
  ResultsWrapper,
  AverageClass,
  SubTitle,
  Value,
  Medal,
  Info,
} from './styled';

const Result: React.FC = () => {
  return (
    <PageStudent type="back" text="Resultado">
      <ResultsWrapper>
        <Info>
          <SubTitle>Pontuação total</SubTitle>
          <Value>2.544</Value>
          <SubTitle>Acertos</SubTitle>
          <Value>6</Value>
          <SubTitle>Erros</SubTitle>
          <Value>3</Value>
        </Info>
        <Medal>3º</Medal>
      </ResultsWrapper>
      <AverageClass>
        <SubTitle>Média da turma</SubTitle>
      </AverageClass>
      <HistoryQuestions>
        <SubTitle>Histórico de perguntas</SubTitle>
        <Question questionRight={true} />
      </HistoryQuestions>
    </PageStudent>
  );
};

export default Result;
