import React from 'react';
import Lottie from 'lottie-react-web';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import PageHeader from '../../components/PageHeader';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import useForm from '../../hooks/useForm';

import lottieBooks from '../../assets/lottie/books.json';

import {
  LandingPage,
  FistFold,
  Title,
  Description,
  Section,
  Article,
} from './styled';

function Landing() {
  const valuesInitials = {
    pin: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <LandingPage>
      <FistFold>
        <PageHeader />
        <Title>A alternativa correta para seus estudos!</Title>

        <Lottie
          options={{
            autoplay: true,
            loop: true,
            animationData: lottieBooks,
          }}
        />

        <Article>
          <FormField
            label="Código da Sala"
            name="pin"
            value={values.pin}
            onChange={handleChange}
            onClick={() => {}}
            maxLength={8}
          >
            <FiChevronRight />
          </FormField>

          <Link to="/login" title="Possui cadastro? Faça o login">
            Possui cadastro? <span>Faça o login</span>
          </Link>
        </Article>
      </FistFold>

      <Section>
        <Article>
          <Title>Venha com a gente!</Title>
          <Description>
            Que tal você fazer parte de nossa história? Tenha acessos e
            conteúdos exclusivos
          </Description>
        </Article>
        <Button color="primary-outline">
          <Link to="/newRegister" title="Cadastra-se">
            Cadastre-se
          </Link>
        </Button>
      </Section>

      <Section>
        <Article>
          <Title>Já tem uma conta?</Title>
          <Description>
            Incrível! Você já é parte de tudo isso! Conte conosco para auxilar
            seu inglês!
          </Description>
        </Article>
        <Button color="primary-outline">
          <Link to="/login" title="Faça o login">
            Entre
          </Link>
        </Button>
      </Section>

      <Footer />
    </LandingPage>
  );
}

export default Landing;
