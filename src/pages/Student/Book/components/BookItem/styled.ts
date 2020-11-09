import styled from 'styled-components';

export const ItemBook = styled.li`
  margin-bottom: 1.6rem;
  padding: 0.8rem 1.6rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Descriptions = styled.p`
  font-size: 1.6rem;
  width: 100%;
  margin: 0.8rem 0;
`;

export const FooterBook = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.6rem;
  width: 100%;
`;

export const Infos = styled.div`
  align-items: flex-start;
`;

export const AccessCount = styled.p`
  font-size: 1.4rem;
`;

export const AuthorName = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const Bold = styled.b`
  font-size: 1.6rem;
`;

export const MoreInfos = styled.div`
  align-items: flex-end;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const LinkToBook = styled.a`
  color: ${(props) => props.theme.colors.primary};

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }
`;

export const PublishDataWrapper = styled.p`
  font-size: 1.4rem;
`;
