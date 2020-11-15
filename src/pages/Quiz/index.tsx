import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useToasts } from 'react-toast-notifications';

import { useAuth } from '../../contexts/auth';
import api from '../../services/api';

import Init from './pages/Init';
import Slide from './pages/Slide';
import Question from './pages/Question';
import Result from './pages/Result';

import {
  IAlternativeQuizFromApi,
  IQuizByIdFromApi,
  IAlternativeQuiz,
  IPlayParams,
  IQuizById,
} from './interface';

const Quiz: React.FC = () => {
  const [listQuiz, setListQuiz] = useState<IQuizById[]>([]);
  const [currentObject, setCurrentObject] = useState(0);
  const [statusQuiz, setStatusQuiz] = useState(-1);
  const [totalObject, setTotalObject] = useState(0);

  const { movQuizId, quizId } = useParams() as IPlayParams;
  const { addToast } = useToasts();
  const { user } = useAuth();
  const history = useHistory();

  function handleGetStatusQuiz(): void {
    api
      .get(`movQuiz/statusQuiz/${movQuizId}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        setStatusQuiz(response.data.statusQuiz);
      })
      .catch((err) => {
        console.error(err);
        addToast(
          'Houve algum erro inesperado ao obter status atual, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handleIntervalStatus() {
    if (statusQuiz !== 4) {
      let intervalGetStatus = setInterval(handleGetStatusQuiz, 5000);
      return () => clearInterval(intervalGetStatus);
    }
  }

  useEffect(handleIntervalStatus, [statusQuiz, handleGetStatusQuiz]);

  function handleGetListQuiz() {
    if (!quizId) return;

    api
      .get(`movQuizSlidePergunta/aluno/${quizId}`)
      .then(({ data }) => {
        const questionSlidesFromApi: IQuizById[] = data.map(
          (quiz: IQuizByIdFromApi) => {
            const quizFromApi: IQuizById = {
              orderByQuiz: quiz.ordenacaoObjetoQuiz,
              count: quiz.quantidadeTotalObjetos,
              questionQuiz: !!quiz.perguntaQuiz
                ? {
                    alternativeQuiz: quiz.perguntaQuiz?.alternativaQuiz.map(
                      (alternativeFromApi: IAlternativeQuizFromApi) => {
                        const alternative: IAlternativeQuiz = {
                          alternativeQuizId:
                            alternativeFromApi.alternativaQuizId,
                          letterAlternative:
                            alternativeFromApi.letraAlternativa,
                          questionQuizId: alternativeFromApi.perguntaQuizId,
                          text: alternativeFromApi.enunciado,
                        };

                        return alternative;
                      }
                    ),
                    letterAlternativeCorrect:
                      quiz.perguntaQuiz.alternativaCorreta,
                    numberQuestion: quiz.perguntaQuiz.numeroPergunta,
                    orderByQuiz: quiz.perguntaQuiz.ordenacaoObjetoQuiz,
                    questionQuizId: quiz.perguntaQuiz.perguntaQuizId,
                    quizId: quiz.perguntaQuiz.quizId,
                    text: quiz.perguntaQuiz.enunciado,
                    timeSeconds: quiz.perguntaQuiz.tempoSegundos,
                    count: quiz.quantidadeTotalObjetos,
                  }
                : null,
              slideQuiz: !!quiz.slideQuiz
                ? {
                    numberSlide: quiz.slideQuiz.numeroSlide,
                    slideQuizId: quiz.slideQuiz.slideQuizId,
                    orderByQuiz: quiz.ordenacaoObjetoQuiz,
                    quizId: quiz.slideQuiz.quizId,
                    content: quiz.slideQuiz.conteudoSlide,
                    count: quiz.quantidadeTotalObjetos,
                  }
                : null,
            };

            return quizFromApi;
          }
        );

        setListQuiz(questionSlidesFromApi);
        setTotalObject(questionSlidesFromApi.length);
      })
      .catch((err) => {
        console.error(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }

  function handleGetCurrentObject() {
    if (statusQuiz !== 2 && statusQuiz !== 1) return;

    api
      .get(`movQuiz/objetoAtual/${movQuizId}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        setCurrentObject(response.data.objetoAtual);
      })
      .catch((err) => {
        console.error(err);
        addToast(
          'Houve algum erro inesperado ao obter pergunta/slide atual, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handleExitToQuiz() {
    if (!user?.studentId || !movQuizId) return;

    api
      .delete(`movQuizAluno/movQuizId=${movQuizId}&AlunoId=${user?.studentId}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Esperamos que você volte logo ao quiz', {
          appearance: 'info',
          autoDismiss: true,
        });

        history.goBack();
      })
      .catch((err) => {
        console.error(err.message);
        addToast(
          'Houve algum erro inesperado ao sair do quiz, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  useEffect(handleGetStatusQuiz, [movQuizId, addToast]);
  useEffect(handleGetListQuiz, [quizId, addToast]);
  useEffect(handleGetCurrentObject, [statusQuiz, addToast]);

  function handleViewStatus() {
    switch (statusQuiz) {
      case 0:
        return (
          <Init
            movQuizId={Number(movQuizId)}
            handleExitToQuiz={handleExitToQuiz}
          />
        );
      case 1:
      case 2:
        const currentObjectQuiz = listQuiz.find(
          (q) => q.orderByQuiz === currentObject
        );

        return currentObjectQuiz?.slideQuiz !== null &&
          currentObjectQuiz?.slideQuiz !== undefined ? (
          <Slide
            slide={currentObjectQuiz?.slideQuiz}
            totalObject={totalObject}
            handleGetCurrentObject={handleGetCurrentObject}
            movQuizId={Number(movQuizId)}
          />
        ) : (
          <Question
            question={currentObjectQuiz?.questionQuiz}
            handleGetCurrentObject={handleGetCurrentObject}
            totalObject={totalObject}
            statusQuiz={statusQuiz}
            movQuizId={movQuizId}
          />
        );
      case 3:
      case 4:
        return <Result movQuizId={movQuizId} quizId={quizId} />;
    }
  }

  return <>{handleViewStatus()}</>;
};

export default Quiz;
