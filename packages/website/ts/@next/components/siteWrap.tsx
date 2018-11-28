import * as React from 'react';
import styled from 'styled-components';

import { Footer } from 'ts/@next/components/footer';
import { Header } from 'ts/@next/components/header';
import { GlobalStyles } from 'ts/@next/constants/globalStyle';

interface Props {

}

const SiteWrap: React.StatelessComponent<Props> = props => {
  const { children } = props;

  return (
    <>
      <GlobalStyles />

      <Header />

      <Main>
        {children}
      </Main>

      <Footer/>
    </>
  );
};

const Main = styled.main`
  border: 1px solid blue;
  width: calc(100% - 60px);
  max-width: 1500px;
  margin: 0 auto;
`;

export { SiteWrap };
