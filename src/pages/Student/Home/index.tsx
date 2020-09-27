import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageStudent from '../../../components/PageStudent';

import useForm from '../../../hooks/useForm';

import {
  ContainerLarge,
  ContainerSmall,
  TwoContainers,
  Name,
  Class,
  Data,
  Description,
  SubTitle,
} from './styled';

const Home: React.FC = () => {
  const valuesInitials = {
    pin: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageStudent type="icon">
      <ContainerLarge>
        <Name>Nome</Name>
        <Class>Turma</Class>
        <TwoContainers>
          <ContainerSmall>
            <Data>100%</Data>
            <Description>Maior acertividade</Description>
          </ContainerSmall>
          <ContainerSmall>
            <Data>14</Data>
            <Description>Quizzers realizados</Description>
          </ContainerSmall>
        </TwoContainers>
        <FormField
          label="Código da Sala"
          name="pin"
          value={values.pin}
          onChange={handleChange}
          onClick={() => {}}
        >
          <FiChevronRight />
        </FormField>
      </ContainerLarge>

      <TwoContainers>
        <ContainerSmall>
          <SubTitle>Professor ao vivo</SubTitle>
          <Button color="primary-outline">Assistir</Button>
        </ContainerSmall>
        <ContainerSmall>
          <SubTitle>Recomendações de livros</SubTitle>
          <Button color="primary-outline">Conferir</Button>
        </ContainerSmall>
      </TwoContainers>
    </PageStudent>
  );
};

export default Home;
