import styled from 'styled-components';

export const SearchClassWrapper = styled.div`
  padding: 0 24px 5.6rem;
  display: grid;
  grid-auto-rows: 10rem calc(100% - 10rem);
  flex: 1;
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
    color: ${({ theme }) => theme.colors.primary};
    width: 2.4rem;
    height: 2.4rem;
    text-shadow: var(--text-shadow);
  }
`;

export const Details = styled.div`
  align-items: flex-start;
`;

export const Name = styled.h5`
  font-size: 3.2rem;
`;

export const Description = styled.p`
  font-size: 1.8rem;
`;

export const Code = styled.p`
  font: 600 2rem 'Ubuntu', sans-serif;
  padding-top: 0.8rem;
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
