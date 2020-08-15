import React from 'react';

import PageHeader from '../../components/PageHeader';
import FormField from '../../components/FormField';

import useForm from '../../hooks/useForm';

import backgroundSvg from '../../assets/images/backgroundCheck.svg';

import { LandingPage, FistFold, Title } from './styled';

function Landing() {
  const valuesInitials = {
    pin: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <LandingPage background={backgroundSvg}>
      <FistFold>
        <PageHeader />
        <Title>A alternativa correta para seus estudos!</Title>
        <div>
          <FormField label="Código da Sala" name="pin" value={values.pin} onChange={handleChange} />
          <a href="#" title="Possui cadastro? Faça o login">Possui cadastro? <span>Faça o login</span></a>
        </div>
      </FistFold>
    </LandingPage>
  );
}

export default Landing;