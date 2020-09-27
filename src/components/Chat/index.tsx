import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';

import { ContainerIcon } from './styled';

const Chat: React.FC = () => {
  return (
    <ContainerIcon>
      <FiMessageCircle size="4.8rem" />
    </ContainerIcon>
  );
};

export default Chat;
