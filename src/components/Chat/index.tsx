import React, { useState } from 'react';
import { FiMessageCircle, FiSend } from 'react-icons/fi';
import useForm from '../../hooks/useForm';

import FormField from '../FormField';

import {
  ContainerMessage,
  TeacherMessage,
  ContainerIcon,
  ContainerChat,
  QuizMessage,
  MyMessage,
  Close,
} from './styled';

const Chat: React.FC = () => {
  const valuesInitials = {
    message: '',
  };

  const [chatOpen, setChatOpen] = useState(false);
  const { handleChange, values } = useForm(valuesInitials);

  function handleChatOpen() {
    setChatOpen(!chatOpen);
  }

  return (
    <>
      <ContainerChat chatOpen={chatOpen}>
        <Close onClick={handleChatOpen} />
        <ContainerMessage>
          <MyMessage>Minha mensagem</MyMessage>
          <QuizMessage>Mensagem servidor</QuizMessage>
          <TeacherMessage>Mensagem professor</TeacherMessage>
        </ContainerMessage>
        <FormField
          label="Mensagem"
          name="message"
          value={values.message}
          onChange={handleChange}
          stroke="1.5"
        >
          <FiSend />
        </FormField>
      </ContainerChat>
      <ContainerIcon onClick={handleChatOpen}>
        <FiMessageCircle size="4.8rem" />
      </ContainerIcon>
    </>
  );
};

export default Chat;
