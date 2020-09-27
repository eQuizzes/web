import React from 'react';

import PageStudent from '../../../components/PageStudent';

import { Stream, Description, Info, Teacher, Name } from './styled';

const Live: React.FC = () => {
  return (
    <PageStudent type="back" text="Ao vivo">
      <Description>Termo</Description>
      <Stream>
        <img src="https://source.unsplash.com/random/person" alt=""></img>
      </Stream>
      <Info>
        <Name>Ribertu Thuzunppson</Name>
        <Teacher>Professor</Teacher>
      </Info>
    </PageStudent>
  );
};

export default Live;
