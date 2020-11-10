import React from 'react';

import {
  PublishDataWrapper,
  FooterBook,
  LinkToBook,
  Descriptions,
  LinkWrapper,
  ItemBook,
  AuthorName,
  MoreInfos,
  Infos,
  Bold,
} from './styled';

import { IBookItem } from './interface';
import Collapse from '../../../../../components/Collapse';
import { FiExternalLink } from 'react-icons/fi';
import util from '../../../../../utils/util';

const BookItem: React.FC<IBookItem> = ({ book }) => {
  return (
    <ItemBook>
      <Collapse label={book.title}>
        <Descriptions>{book.subtitle}</Descriptions>

        <FooterBook>
          <Infos>
            <AuthorName>{`${book.author.firstName} ${book.author.lastName}`}</AuthorName>
          </Infos>
          <MoreInfos>
            <LinkWrapper>
              <LinkToBook
                title={`Acesse o artigo de ${book.title}`}
                href={book.linkBook}
                target="_blank"
              >
                <FiExternalLink />
              </LinkToBook>
            </LinkWrapper>
            {book.publishDate && (
              <PublishDataWrapper>
                Publicado em:{' '}
                <Bold>{util.getFormatDate(book.publishDate)}</Bold>
              </PublishDataWrapper>
            )}
          </MoreInfos>
        </FooterBook>
      </Collapse>
    </ItemBook>
  );
};

export default BookItem;
