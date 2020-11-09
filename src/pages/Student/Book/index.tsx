import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import FormField from '../../../components/FormField';
import PageStudent from '../../../components/PageStudent';
import BookItem from './components/BookItem';

import api from '../../../services/api';
import util from '../../../utils/util';

import { ListBooks, Form } from './styled';

import { IBook, IBookApi } from './interface';
import { FiSearch } from 'react-icons/fi';

const Book: React.FC = () => {
  const [search, setSearch] = useState('');
  const [listBooks, setListBooks] = useState<IBook[]>();

  const { addToast } = useToasts();

  function handleGetListBooks() {
    api
      .get('livro')
      .then(({ data }) => {
        const BookFromApi: IBook[] = data.map((book: IBookApi) => {
          const newBook: IBook = {
            bookId: book.livroId,
            authorId: book.autorId,
            author: {
              authorId: book.autor.autorId,
              firstName: book.autor.nome,
              lastName: book.autor.sobrenome,
            },
            title: book.titulo,
            subtitle: book.subtitulo,
            linkBook: book.linkLivro,
            publishDate: book.dataPublicacao,
          };

          return newBook;
        });

        setListBooks(BookFromApi);
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na busca por artigos, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  useEffect(handleGetListBooks, []);

  function handleFilterBooks(Book: IBook) {
    return util.includesToArray(
      [
        Book.title,
        Book?.subtitle || '',
        Book.author.firstName,
        Book.author.lastName,
      ],
      search
    );
  }

  return (
    <PageStudent type="back" text="Artigos">
      <Form>
        <FormField
          label="Filtro"
          name="search"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        >
          <FiSearch onClick={handleGetListBooks} />
        </FormField>
      </Form>
      <ListBooks>
        {listBooks &&
          listBooks
            .filter(handleFilterBooks)
            .map((book) => <BookItem key={book.bookId} book={book} />)}
      </ListBooks>
    </PageStudent>
  );
};

export default Book;
