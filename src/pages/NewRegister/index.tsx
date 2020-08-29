import React from 'react';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

import useForm from '../../hooks/useForm';

import { Title, Description, Form, TwoColumns, LinkLogin } from './styled';

function NewRegister() {
  const valuesInitials = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageDefault>
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
        <Button color="primary">Continuar</Button>
      </Form>
      <LinkLogin to="/login" title="Faça o login">
        Possui cadastro? <b>Faça o login</b>
      </LinkLogin>
    </PageDefault>
  );
}

export default NewRegister;
