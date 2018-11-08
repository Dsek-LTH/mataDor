import React from 'react'
import NumberContainer from '../Numbers/NumberContainer'
import NumberListFetcher from '../Numbers/NumberListFetcher'
import AdminView from '../AdminBar/AdminView'
import { AppContainer } from '../utils/styles'

const NotifyRoute = () => (
  <AppContainer>
    <NumberListFetcher render={({numberList}) => ([
      <AdminView numbers={numberList} key="admin-view"/>,
      <NumberContainer numbers={numberList} isAdmin={true} key="numbers"/>,
    ])}/>
  </AppContainer>
)

export default NotifyRoute
