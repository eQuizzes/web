import styled from 'styled-components';

import medalSVG from '../../../../assets/images/medal.svg';

export const ResultsWrapper = styled.div`
  margin: 0 24px;
  flex-direction: row;
`;

export const Info = styled.div`
  width: 100%;
`;

export const SubTitle = styled.p`
  margin-top: 4rem;
  margin-bottom: 0.8rem;
  font-size: 2.4rem;
  width: 100%;
`;

export const Value = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  width: 100%;
`;

export const Medal = styled.p`
  background: url(${medalSVG});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding: 4.8rem 5.2rem 12.4rem;
  font-size: 5.2rem;
  font-weight: 600;
  text-shadow: var(--text-shadow);
`;

export const AverageClass = styled.div`
  padding: 3.2rem 24px;
`;

export const HistoryQuestions = styled.div`
  padding: 3.2rem 24px;
`;
