import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useToasts } from 'react-toast-notifications';

import PageStudent from '../../../components/PageStudent';
import api from '../../../services/api';

import { Description, Stream, Frame } from './styled';

import {
  ILiveParams,
  ITransmissionNotification,
  ITransmissionNotificationApi,
} from './interface';

const Live: React.FC = () => {
  const [live, setLive] = useState<ITransmissionNotification>(
    {} as ITransmissionNotification
  );

  const { idLive } = useParams() as ILiveParams;
  const { addToast } = useToasts();

  function handleGetLive() {
    api
      .get(`notificacaoTransmissao/${idLive}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const liveApi = response.data as ITransmissionNotificationApi;

        setLive({
          description: liveApi.descricao,
          TransmissionNotificationId: liveApi.notificacaoTransmissaoId,
          link: liveApi.link,
        });
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na busca por live, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  useEffect(handleGetLive, []);

  return (
    <PageStudent type="back" text="Ao vivo">
      <Stream>
        <Description>{live.description}</Description>
        <Frame src={live.link} />
      </Stream>
    </PageStudent>
  );
};

export default Live;
