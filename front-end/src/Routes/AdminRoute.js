import React from 'react'
import NumberContainer from '../Numbers/NumberContainer'
import AdminView from '../AdminBar/AdminView'
import { AppContainer } from '../utils/styles'
import NotifyMe from '../utils/NotifyMe'

const AdminRoute = ({numbers}) => (
  <AppContainer>
    <AdminView numbers={numbers}/>
    <NumberContainer numbers={numbers} isAdmin={true}/>
  </AppContainer>
)

export default AdminRoute
