import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useToasts } from 'react-toast-notifications';
import { FiLogOut, FiSearch } from 'react-icons/fi';

import FormField from '../../../../../components/FormField';
import PageStudent from '../../../../../components/PageStudent';
import Item from './components/Item';

import util from '../../../../../utils/util';
import api from '../../../../../services/api';
import { useAuth } from '../../../../../contexts/auth';

import {
  FormFieldWrapper,
  ListStudents,
  Description,
  Details,
  Student,
  Header,
  Name,
  Code,
} from './styled';

import { ParamsProps, StudentProps, IStudent } from './interface';
import { ClassProps } from '../../interface';

const Class: React.FC = () => {
  const [search, setSearch] = useState('');
  const [listStudents, setListStudents] = useState<StudentProps[]>([]);
  const [classDetail, setClassDetail] = useState<ClassProps>({
    description: '',
    name: '',
    code: '',
  });

  const { idClass } = useParams<ParamsProps>();
  const { addToast } = useToasts();
  const { user } = useAuth();

  const history = useHistory();

  function handleGetDetailClass() {
    api
      .get(`movAlunoTurma/turmaId/${idClass}`)
      .then(({ data }) => {
        const classFromApi: ClassProps = {
          name: data.turma.nome,
          description: data.turma.descricao,
          code: data.turma.codigo,
        };

        setClassDetail(classFromApi);

        const studentsFromApi: StudentProps[] = !!data.alunos
          ? data.alunos.map((student: IStudent) => {
              const newStudent: StudentProps = {
                studentId: student.alunoId,
                person: {
                  firstName: student.pessoa.nome,
                  lastName: student.pessoa.sobrenome,
                  dateOfBirth: util.getFormatDate(
                    student.pessoa.dataNascimento
                  ),
                  email: student.pessoa.email,
                  phone: !!student.pessoa.telefone
                    ? {
                        countryCode: student.pessoa.telefone.codigoDiscagem,
                        ddd: student.pessoa.telefone.ddd,
                        number: student.pessoa.telefone.numeroTelefone,
                        typeFone: student.pessoa.telefone.tipoTelefone,
                      }
                    : null,
                },
              };

              return newStudent;
            })
          : [];

        setListStudents(studentsFromApi);
      })
      .catch((err) => {
        console.error(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }

  useEffect(handleGetDetailClass, [idClass, addToast]);

  function handleListStudents(student: StudentProps) {
    return util.includesToArray(
      [student.person.firstName, student.person.lastName, student.person.email],
      search
    );
  }

  function handleRemoveStudentToClass() {
    api
      .delete(`movAlunoTurma/turmaId=${idClass}&alunoId=${user?.studentId}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Você saiu da turma!', {
          appearance: 'info',
          autoDismiss: true,
        });
        history.goBack();
      })
      .catch((err) => {
        console.error(err.response);
        addToast(
          'Houve algum erro inesperado ao sair da turma, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  return (
    <PageStudent type="icon">
      <Header>
        <Details>
          <Name>{classDetail.name}</Name>
          <Description>{classDetail.description}</Description>
          <Code>#{classDetail.code}</Code>
        </Details>
        <FiLogOut title="Sair da turma" onClick={handleRemoveStudentToClass} />
      </Header>
      <FormFieldWrapper>
        <FormField
          label="Filtrar"
          name="search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          value={search}
        >
          <FiSearch onClick={handleGetDetailClass} />
        </FormField>
      </FormFieldWrapper>
      <ListStudents>
        {!!listStudents.length &&
          listStudents.filter(handleListStudents).map((student) => (
            <Student key={student.studentId}>
              <Item
                name={`${student.person.firstName} ${student.person.lastName}`}
                dateOfBirth={student.person.dateOfBirth}
              />
            </Student>
          ))}
      </ListStudents>
    </PageStudent>
  );
};

export default Class;
