import styled from 'styled-components';

export const SearchClassWrapper = styled.div`
  padding: 0 24px 5.6rem;
  display: grid;
  grid-auto-rows: 10rem calc(100% - 10rem);
  flex: 1;
`;

export const Title = styled.h3`
  font-size: 3.2rem;
`;

export const FieldsWrapper = styled.div`
  flex: 1;
  padding: 0 0 5.6rem;
  justify-content: center;
`;

export const Header = styled.div`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 3.2rem 24px;

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const Info = styled.div`
  align-items: flex-start;
`;

export const Name = styled.h5`
  font-size: 2rem;
`;

export const Code = styled.p`
  font-size: 1.6rem;
`;

export const FormFieldWrapper = styled.div`
  padding: 0 24px;
`;

export const ListStudents = styled.ul`
  padding: 3.2rem 24px;
  height: calc(100vh - 31rem);
  overflow: auto;
`;

export const Student = styled.li`
  margin-top: 1.6rem;

  &:first-child {
    margin-top: 0;
  }
`;
