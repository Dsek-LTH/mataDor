import React from 'react'
import NumberContainer from '../Numbers/NumberContainer'
import NumberListFetcher from '../Numbers/NumberListFetcher'
import AdminView from '../AdminBar/AdminView'
import { AppContainer } from '../utils/styles'

const AdminRoute = () => (
  <AppContainer>
    <NumberListFetcher render={({ numberList }) => ([
      <AdminView numberList={numberList} key="admin-view" />,
      <NumberContainer numberList={numberList} isAdmin={true} key="numbers" />,
    ])} />
  </AppContainer>
)

export default AdminRoute
