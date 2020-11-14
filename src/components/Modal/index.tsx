import React from 'react';

import Button from '../Button';

import {
  ModalWrapper,
  ButtonsWrapper,
  Description,
  Image,
  Title,
} from './styled';

import { IModal } from './interface';
import FormField from '../FormField';

const Modal: React.FC<IModal> = ({
  title,
  image,
  description,
  textCancel = 'Cancelar',
  textConfirm = 'Confirmar',
  showModal,
  setValue,
  handleConfirm,
  handleClose,
  textInput = '',
  value = '',
}) => {
  return (
    <ModalWrapper showModal={showModal}>
      <Title>{title}</Title>

      {!!description && <Description>{description}</Description>}
      {!!image && <Image src={image} alt="Imagem da modal" />}
      {textInput !== undefined && !!setValue && value !== undefined && (
        <FormField
          label={textInput}
          name="inputModal"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          value={value}
        />
      )}

      <ButtonsWrapper>
        <Button color="primary-outline" onClick={handleClose}>
          {textCancel}
        </Button>
        <Button color="primary-outline" onClick={handleConfirm}>
          {textConfirm}
        </Button>
      </ButtonsWrapper>
    </ModalWrapper>
  );
};

export default Modal;
