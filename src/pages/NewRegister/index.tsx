import React, { useState } from 'react';
import Lottie from 'lottie-react-web';
import { useHistory } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';

import useForm from '../../hooks/useForm';

import lottieAccept from '../../assets/lottie/accept.json';

import { Steps, ConfirmContainer } from './styled';

import api from '../../services/api';
import validation from '../../utils/validation';

function NewRegister() {
  const valuesInitials = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  };
  const history = useHistory();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [registerConfirm, setRegisterConfirm] = useState<Boolean>(false);

  const { handleChange, values } = useForm(valuesInitials);

  function validationStep(stepValidation: number) {
    switch (stepValidation) {
      case 1:
        if (values.firstName === '') {
          alert('Preencha o primeiro nome');
          return false;
        }
        if (values.lastName === '') {
          alert('Preencha o sobrenome');
          return false;
        }
        if (values.dateOfBirth === '') {
          alert('Preencha a data de nascimento');
          return false;
        }
        if (!validation.dateMinToDay(values.dateOfBirth)) {
          alert('Preencha a data de nascimento corretamente');
          return false;
        }
        if (values.email === '') {
          alert('Preencha o e-mail');
          return false;
        }
        break;
      case 2:
        if (values.username === '') {
          alert('Preencha o nome de usuário');
          return false;
        }
        if (values.password === '') {
          alert('Preencha a senha do usuário');
          return false;
        }
        if (values.confirmPassword === '') {
          alert('Preencha a confirmação de senha');
          return false;
        }
        if (values.password !== values.confirmPassword) {
          alert('As senhas não coincidem');
          return false;
        }
        break;
    }

    return true;
  }

  function handleStep(step: 1 | 2 | 3, to: 1 | 2 | 3) {
    if (step < to && !validationStep(step)) return null;

    setStep(to);
    return null;
  }

  function addNewStudent() {
    api
      .post('aluno', {
        pessoa: {
          nome: values.firstName,
          sobrenome: values.lastName,
          dataNascimento: values.dateOfBirth,
          email: values.email,
          usuario: values.username,
          senha: values.password,
        },
      })
      .then(() => {
        setRegisterConfirm(true);

        setTimeout(() => {
          setRegisterConfirm(false);

          history.push('/login');
        }, 3600);
      })
      .catch(() => {
        alert('Erro ao cadastro!');
      });
  }

  function handleConfirmRegister() {
    setRegisterConfirm(true);
    addNewStudent();
  }

  return (
    <PageDefault>
      <Steps step={step}>
        <StepOne
          handleStep={handleStep}
          handleChange={handleChange}
          values={values}
        />
        <StepTwo
          handleStep={handleStep}
          handleChange={handleChange}
          values={values}
        />
        <StepThree
          handleStep={handleStep}
          handleConfirmRegister={handleConfirmRegister}
        />
      </Steps>
      <ConfirmContainer registerConfirm={registerConfirm}>
        <Lottie
          options={{
            animationData: lottieAccept,
          }}
          isPaused={!registerConfirm}
        />
      </ConfirmContainer>
    </PageDefault>
  );
}

export default NewRegister;
