import React from 'react';

import {
  Container,
  Title,
  Description,
  Form,
  TwoColumns,
  ButtonsWrapper,
} from './styled';

import { StepTwoProps } from './interface';
import FormField from '../../../../components/FormField';
import Button from '../../../../components/Button';

const StepOne: React.FC<StepTwoProps> = ({
  values,
  handleChange,
  handleStep,
}) => {
  return (
    <Container>
      <Title>Dados de acesso</Title>
      <Description>Usuário e senha para o acesso</Description>
      <Form>
        <TwoColumns>
          <FormField
            label="Usuário"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          <FormField
            label="Senha"
            name="password"
            value={values.password}
            onChange={handleChange}
            type="password"
          />
        </TwoColumns>

        <ButtonsWrapper>
          <Button onClick={() => handleStep(2, 3)} color="primary">
            Continuar
          </Button>
          <Button onClick={() => handleStep(2, 1)} color="primary-outline">
            Voltar
          </Button>
        </ButtonsWrapper>
      </Form>
    </Container>
  );
};

export default StepOne;
