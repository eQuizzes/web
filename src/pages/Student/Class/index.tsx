import React from 'react';
import { FiLogOut, FiSearch } from 'react-icons/fi';
import { MdYoutubeSearchedFor } from 'react-icons/md';
import FormField from '../../../components/FormField';
import PageStudent from '../../../components/PageStudent';

import useForm from '../../../hooks/useForm';
import Item from './components/Item';

import {
  Header,
  Info,
  Name,
  Code,
  SearchClassWrapper,
  FormFieldWrapper,
  ListStudents,
  Student,
} from './styled';

import { StudentProps } from './interface';

const data: StudentProps[] = [];

const Class: React.FC = () => {
  const valuesInitials = {
    filter: '',
    codeClass: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageStudent type="icon">
      {data.length === 0 ? (
        <SearchClassWrapper>
          <FormField
            label="Código da turma"
            name="codeClass"
            onChange={handleChange}
            value={values.codeClass}
          >
            <FiSearch />
          </FormField>
        </SearchClassWrapper>
      ) : (
        <>
          <Header>
            <Info>
              <Name>Nome da turma</Name>
              <Code>#1234</Code>
            </Info>
            <FiLogOut />
          </Header>
          <FormFieldWrapper>
            <FormField
              label="Filtrar"
              name="filter"
              onChange={handleChange}
              value={values.filter}
              stroke="0.5"
            >
              <MdYoutubeSearchedFor />
            </FormField>
          </FormFieldWrapper>
          <ListStudents>
            {data.map(({ name, dateOfBirth }) => (
              <Student>
                <Item name={name} dateOfBirth={dateOfBirth} />
              </Student>
            ))}
          </ListStudents>
        </>
      )}
    </PageStudent>
  );
};

export default Class;
