import React from 'react';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';

import useForm from '../../hooks/useForm';

import {} from './styled';

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
      <h1>Cadastre-se</h1>
    </PageDefault>
  );
}

export default NewRegister;
