import React, { useState } from 'react';
import Lottie from 'lottie-react-web';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

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
  const { addToast } = useToasts();

  function validationStep(stepValidation: number) {
    switch (stepValidation) {
      case 1:
        if (values.firstName === '') {
          addToast('Preencha o primeiro nome', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_firstName')?.focus();
          return false;
        }
        if (values.lastName === '') {
          addToast('Preencha o sobrenome', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_lastName')?.focus();
          return false;
        }
        if (values.dateOfBirth === '') {
          addToast('Preencha a data de nascimento', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_dateOfBirth')?.focus();
          return false;
        }
        if (!validation.dateMinToDay(values.dateOfBirth)) {
          addToast('Preencha a data de nascimento corretamente', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_dateOfBirth')?.focus();
          return false;
        }
        if (values.email === '') {
          addToast('Preencha o email', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_email')?.focus();
          return false;
        }
        break;
      case 2:
        if (values.username === '') {
          addToast('Preencha o nome de usuário', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_username')?.focus();
          return false;
        }
        if (values.password === '') {
          addToast('Preencha a senha', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_password')?.focus();
          return false;
        }
        if (values.confirmPassword === '') {
          addToast('Preencha a confirmação senha', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_confirmPassword')?.focus();
          return false;
        }
        if (values.password !== values.confirmPassword) {
          addToast('As senhas não coincidem', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_password')?.focus();
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
      .catch((err) => {
        console.error(err.message);
      });
  }

  function handleConfirmRegister() {
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
