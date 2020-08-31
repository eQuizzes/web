import React from 'react';

import {
  Container,
  Title,
  Description,
  Form,
  TwoColumns,
  LinkLogin,
} from './styled';

import { StepOneProps } from './interface';
import FormField from '../../../../components/FormField';
import Button from '../../../../components/Button';

const StepOne: React.FC<StepOneProps> = ({
  values,
  handleChange,
  handleStep,
}) => {
  return (
    <Container>
      <Title>Cadastre-se</Title>
      <Description>
        Venha fazer parte da nossa história, faça parte da English Quiz!
      </Description>
      <Form>
        <TwoColumns>
          <FormField
            label="Nome"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
          <FormField
            label="Sobrenome"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
        </TwoColumns>
        <FormField
          label="Data Nascimento"
          name="dateOfBirth"
          value={values.dateOfBirth}
          onChange={handleChange}
          type="date"
        />
        <FormField
          label="E-mail"
          name="email"
          value={values.email}
          onChange={handleChange}
          type="email"
        />
        <Button onClick={() => handleStep(1, 2)} color="primary">
          Continuar
        </Button>
      </Form>
      <LinkLogin to="/login" title="Faça o login">
        Possui cadastro? <b>Faça o login</b>
      </LinkLogin>
    </Container>
  );
};

export default StepOne;
