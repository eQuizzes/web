import api from './api';
import { IResponse, PhoneProps, IUser, AddressProps } from './interface';

export async function signIn(
  username: string,
  password: string
): Promise<IUser> {
  const response: IResponse = await api.post(
    'aluno/validarLoginAluno',
    {
      usuario: username,
      senha: password,
    }
  );

  if (response.status !== 200) {
    return {
      status: response.status,
    } as IUser;
  }

  const { pessoa } = response.data.usuario;

  const user: IUser = {
    studentId: response.data.usuario.alunoId,
    firstName: pessoa.nome,
    lastName: pessoa.sobrenome,
    cpf: pessoa.cpf,
    dateOfBirth: pessoa.dataNascimento,
    genre: pessoa.sexo,
    email: pessoa.email,
    number: pessoa.numero,
    username: pessoa.usuario,
    phone: (!!pessoa.telefone
      ? {
          phoneId: pessoa.telefoneId,
          countryCode: pessoa.telefone.CodigoDiscagem,
          ddd: pessoa.telefone.NumeroTelefone,
          number: pessoa.telefone.NumeroTelefone,
          typeFone: pessoa.telefone.TipoTelefone,
        }
      : {}) as PhoneProps,
    address: (!!pessoa.endereco
      ? {
          addressId: pessoa.enderecoId,
          cep: pessoa.endereco.Cep,
          address: pessoa.endereco.Logradouro,
          neighborhood: pessoa.endereco.Bairro,
          city: pessoa.endereco.Cidade,
          state: pessoa.endereco.Estado,
          country: pessoa.endereco.Pais,
        }
      : {}) as AddressProps,
    token: response.data.token,
    dateExpires: response.data.dataExpiracao,
    status: response.status,
  };

  return user;
}
