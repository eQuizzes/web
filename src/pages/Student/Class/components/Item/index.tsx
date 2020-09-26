import React from 'react';
import { FiUser } from 'react-icons/fi';

import { Wrapper, Info, Name, DateOfBirth } from './styled';

import { ItemProps } from './interface';

const Item: React.FC<ItemProps> = ({ name, dateOfBirth }) => {
  return (
    <Wrapper>
      <FiUser size="4rem" />
      <Info>
        <Name>{name}</Name>
        <DateOfBirth>{dateOfBirth}</DateOfBirth>
      </Info>
    </Wrapper>
  );
};

export default Item;
