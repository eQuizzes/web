import React, { useEffect } from 'react';
import Chart from 'chart.js';

import PageStudent from '../../../../components/PageStudent';
import Question from './components/Question';

import {
  HistoryQuestions,
  ResultsWrapper,
  AverageClass,
  SubTitle,
  Graph,
  Value,
  Medal,
  Info,
} from './styled';

const Result: React.FC = () => {
  useEffect(() => {
    let labelsChart = [];

    for (let i = 0; i < 10; i++) {
      labelsChart.push(`Pergunta ${i}`);
    }

    const canvas = document.getElementById(
      'studentsChart'
    ) as HTMLCanvasElement;

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: labelsChart,
        datasets: [
          {
            label: 'Média de Acertos',
            data: [6, 7, 2, 3, 5, 2, 8, 4, 2, 5],

            pointBackgroundColor: '#4CC9F0',
            backgroundColor: 'rgba(76, 201, 240, .24)',
            borderColor: '#4CC9F0',
            borderWidth: 1,
            showLine: true,
          },
        ],
      },
      options: {
        legend: {
          align: 'start',
          labels: {
            fontColor: '#FFF',
            padding: 24,
          },
        },
        scales: {
          xAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                color: 'rgba(76, 201, 240, .24)',
              },
            },
          ],
        },
      },
    });
  }, []);

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
        <Graph id="studentsChart"></Graph>
      </AverageClass>
      <HistoryQuestions>
        <SubTitle>Histórico de perguntas</SubTitle>
        <Question questionRight={true} />
      </HistoryQuestions>
    </PageStudent>
  );
};

export default Result;
