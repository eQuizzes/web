import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router';

import PageStudent from '../../../../../components/PageStudent';
import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';

import { useAuth } from '../../../../../contexts/auth';
import api from '../../../../../services/api';

import { Form } from './styled';

const ClassesNew: React.FC = () => {
  const [code, setCode] = useState('');

  const { addToast } = useToasts();
  const { user } = useAuth();
  const history = useHistory();

  const handleSubmitClass = () => {
    api
      .post('movAlunoTurma', {
        alunoId: user?.studentId,
        codigoTurma: code,
      })
      .then(({ data, status }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        history.goBack();

        addToast('Turma cadastrada com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
      })
      .catch((err) => {
        console.error(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  };

  return (
    <PageStudent type="back" text="Entra para turma">
      <Form>
        <FormField
          label="Código de acesso"
          name="code"
          value={code}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCode(e.target.value)
          }
        />
        <Button color="primary" onClick={handleSubmitClass}>
          Entrar
        </Button>
      </Form>
    </PageStudent>
  );
};

export default ClassesNew;
