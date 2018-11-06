import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import NumberContainer from './NumberContainer'

const AppContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-areas:
    '. . . '
    '. header .'
    '. . .'
    ' . numbers . ';
  grid-template-rows: 50px 20px 1fr 6fr;
  grid-template-columns: 1fr 2fr 1fr;
`;

export default () => (
  <AppContainer>
    <Header />
    <NumberContainer isAdmin={false} />
  </AppContainer>
);
