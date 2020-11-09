import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 3.2rem;
  padding: 0 24px;
`;

export const ListBooks = styled.ul`
  margin: 3.2rem 0;
  height: calc(100% - 8rem);
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
