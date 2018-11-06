import React from 'react';
import styled from 'styled-components'
import NumberContainer from './NumberContainer';
import AdminView from './AdminView';

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

const AdminRoute = () => (
  <AppContainer>
    <AdminView />
    <NumberContainer isAdmin={true} />
  </AppContainer>
);

export default AdminRoute;
