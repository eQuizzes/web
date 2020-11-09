export interface IAuthor {
  authorId: number;
  firstName: string;
  lastName: string;
  lastUserUpdate?: number;
}

export interface IAuthorApi {
  autorId: number;
  nome: string;
  sobrenome: string;
  ultimoUsuarioAlteracao?: number;
}

export interface IBookApi {
  livroId: number;
  autor: IAuthorApi;
  autorId: number;
  titulo: string;
  subtitulo: string | null;
  linkLivro: string;
  dataPublicacao: string | null;
  ultimoUsuarioAlteracao?: number;
}

export interface IBook {
  bookId: number;
  author: IAuthor;
  authorId: number;
  title: string;
  subtitle: string | null;
  linkBook: string;
  publishDate: string | null;
}
