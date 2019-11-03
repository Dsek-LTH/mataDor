import React from "react";
import { StyledHeader } from "../../components/styled";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Bell from "./Bell"
import NotificationForm from "./NotificationForm"
import Waiting from "./Waiting"
import Done from "./Done"

export default function ({ numberList }) {
  const match = useRouteMatch();

  return (<div>
    <StyledHeader>
      Mat redo för upphämtning
      <Route exact path={`${match.path}`}>
        <Bell />
      </Route>
    </StyledHeader >

    <Switch>
      <Route exact path={`${match.path}/input`}>
        <NotificationForm />
      </Route>

      <Route exact path={`${match.path}/input/:number`}>
        <Waiting numberList={numberList} />
      </Route>

      <Route exact path={`${match.path}/done/:number`} >
        <Done />
      </Route>
    </Switch>
  </div >)
}
