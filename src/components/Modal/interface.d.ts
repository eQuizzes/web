export interface IModal {
  title: string;
  description?: string;
  image?: string;
  textCancel?: string;
  textConfirm?: string;
  showModal: boolean;
  handleConfirm: () => void;
  handleClose: () => void;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  textInput?: string;
  value?: string;
}

export interface IModalWrapper {
  showModal: boolean;
}
