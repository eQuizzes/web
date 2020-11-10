import React, { useEffect, useState } from 'react';
import { FiMessageCircle, FiSend } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';

import { useAuth } from '../../contexts/auth';
import api from '../../services/api';
import util from '../../utils/util';

import FormField from '../FormField';

import {
  ContainerMessage,
  ContainerIcon,
  ContainerChat,
  QuizMessage,
  MyMessage,
  Close,
} from './styled';

import { IChatComponent, IChatMessageApi, IChatMessage } from './interface';

const Chat: React.FC<IChatComponent> = ({ movQuizId }) => {
  const [message, setMessage] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [listMessage, setListMessage] = useState<IChatMessage[]>([]);

  const { user } = useAuth();
  const { addToast } = useToasts();

  function handleChatOpen() {
    setChatOpen(!chatOpen);
  }

  function handleNewMessage() {
    if (message.length === 0) return;

    api
      .post('movQuizChat', {
        movQuizId,
        alunoId: user?.studentId,
        mensagem: message,
        dataHoraMensagem: util.getDateAndHoursNow(),
      })
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        handleGetMessageByMovQuiz();
        setMessage('');
      })
      .catch((err) => {
        console.error(err.response);
        addToast(
          'Houve um erro inesperado no envio de sua mensagem, tendo novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handleGetMessageByMovQuiz() {
    if (movQuizId === 0 || !user) return;

    api
      .get(`movQuizChat/quiz/${movQuizId}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const messagesApi = response.data as IChatMessageApi[];

        const messages = messagesApi.map((messageApi) => {
          return {
            message: messageApi.mensagem,
            studentId: messageApi.alunoId,
            movQuizChatId: messageApi.movQuizChatId,
          } as IChatMessage;
        });

        setListMessage(messages);
      })
      .catch((err) => {
        console.error(err.response);
        addToast(
          'Houve um erro inesperado ao obter as mensagens do chat, tendo novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handleIntervalGetMessageByMovQuiz() {
    let intervalGetMessageQuiz = setInterval(handleGetMessageByMovQuiz, 3200);
    return () => clearInterval(intervalGetMessageQuiz);
  }

  useEffect(handleIntervalGetMessageByMovQuiz, [
    movQuizId,
    handleGetMessageByMovQuiz,
  ]);

  useEffect(handleGetMessageByMovQuiz, [movQuizId, user]);

  if (!user) return <div />;

  return (
    <>
      <ContainerChat chatOpen={chatOpen}>
        <Close onClick={handleChatOpen} />
        <ContainerMessage id="containerMessage">
          {!!listMessage.length &&
            listMessage.map((m) =>
              m.studentId === (user?.studentId || 0) ? (
                <MyMessage key={m.movQuizChatId}>{m.message}</MyMessage>
              ) : (
                <QuizMessage key={m.movQuizChatId}>{m.message}</QuizMessage>
              )
            )}
        </ContainerMessage>
        <FormField
          label="Mensagem"
          name="message"
          value={message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMessage(e.target.value)
          }
          stroke="1.5"
        >
          <FiSend onClick={handleNewMessage} />
        </FormField>
      </ContainerChat>
      <ContainerIcon onClick={handleChatOpen}>
        <FiMessageCircle size="4.8rem" />
      </ContainerIcon>
    </>
  );
};

export default Chat;
