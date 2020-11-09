import styled from 'styled-components';

export const Description = styled.h4`
  padding: .8rem 24px;
  font-size: 2rem;
  text-align: center;
  position: absolute;
  left: -1px;
  right: -1px;
  bottom: -2px;
  background: linear-gradient(0deg, black -17%, transparent 100%);
  z-index: 1000;
  color: ${(props) => props.theme.colors.primary};
`;

export const Stream = styled.div`
  margin: 2rem 24px .8rem;
  border-radius: 4rem;
  box-shadow: var(--box-shadow);
  flex: 1;
  border: 2.5px solid ${(props) => props.theme.colors.primary};
  max-height: 79vh;
  position: relative;
  overflow: hidden;

`;

export const Frame = styled.iframe`
  position: absolute;
  left: 50%;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border: none;
  transform: translateX(-50%);
`;
