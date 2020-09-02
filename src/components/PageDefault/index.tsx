import React from 'react';
import PageHeader from '../PageHeader';
import Footer from '../Footer';
import { Main } from './styled';

import backgroundSvg from '../../assets/images/FavIcon.svg';

const PageDefault: React.FC = ({ children }) => {
  return (
    <>
      <PageHeader />
      <Main background={backgroundSvg}>{children}</Main>
      <Footer />
    </>
  );
};

export default PageDefault;
