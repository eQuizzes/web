import React from 'react';

import PageHeader from '../../components/PageHeader';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

import useForm from '../../hooks/useForm';

import backgroundSvg from '../../assets/images/backgroundCheck.svg';

import {
  LandingPage,
  FistFold,
  Title,
  Description,
  Section,
  Article,
} from './styled';
import Footer from '../../components/Footer';

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
          <FormField
            label="Código da Sala"
            name="pin"
            value={values.pin}
            onChange={handleChange}
          />

          <a href="#" title="Possui cadastro? Faça o login">
            Possui cadastro? <span>Faça o login</span>
          </a>
        </div>
      </FistFold>

      <Section>
        <Article>
          <Title>Venha com a gente!</Title>
          <Description>
            Que tal você fazer parte de nossa história? Tenha acessos e
            conteúdos exclusivos
          </Description>
        </Article>
        <Button>Cadastre-se</Button>
      </Section>

      <Section>
        <Article>
          <Title>Já tem uma conta?</Title>
          <Description>
            Incrível! Você já é parte de tudo isso! Conte conosco para auxilar
            seu inglês!
          </Description>
        </Article>
        <Button>Entre</Button>
      </Section>

      <Footer />
    </LandingPage>
  );
}

export default Landing;
