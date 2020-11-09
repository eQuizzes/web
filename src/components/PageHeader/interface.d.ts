export interface HeaderProps {
  studentOn?: boolean;
  type?: 'icon' | 'back';
  text?: string;
}

export interface ITransmissionNotificationApi {
  notificacaoTransmissaoId: number;
  descricao: string;
  link: string;
}
