import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import PageStudent from '../../../components/PageStudent';

import { Stream, Description, Info, Teacher, Name } from './styled';

const Live: React.FC = () => {
  const { addToast } = useToasts();
  const history = useHistory();

  return (
    <PageStudent type="back" text="Ao vivo">
      <Description>Termo</Description>
      <Stream>
        <img src="https://source.unsplash.com/random/person"></img>
      </Stream>
      <Info>
        <Name>Ribertu Thuzunppson</Name>
        <Teacher>Professor</Teacher>
      </Info>
    </PageStudent>
  );
};

export default Live;
