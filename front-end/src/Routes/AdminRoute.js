import React from 'react';
import NumberContainer from '../Numbers/NumberContainer';
import NumberListFetcher from '../Numbers/NumberListFetcher';
import AdminView from '../AdminBar/AdminView';
import { AppContainer } from '../utils/styles';

const NotifyRoute = () => (
  <AppContainer>
    <NumberListFetcher render={({ numberList }) => ([
      <AdminView numberList={numberList} key="admin-view" />,
      <NumberContainer numberList={numberList} isAdmin key="numbers" />,
    ])}
    />
  </AppContainer>
);

export default NotifyRoute;
