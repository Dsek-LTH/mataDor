import React from 'react'
import NumberContainer from '../Numbers/NumberContainer'
import AdminView from '../AdminBar/AdminView'
import { AppContainer } from '../utils/styles'

const AdminRoute = () => (
  <AppContainer>
    <AdminView/>
    <NumberContainer isAdmin={true}/>
  </AppContainer>
)

export default AdminRoute
