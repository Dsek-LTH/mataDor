import React from "react";
import { Redirect } from "react-router";
import NumberContainer from "../Numbers/NumberContainer";
import NotifyHeader from "../utils/NotifyHeader";
import NumberListFetcher from "../Numbers/NumberListFetcher";
import { AppContainer } from "../utils/styles";

export default ({ location }) => (
  <AppContainer emptySize="100px">
    {location.search.includes("tv") && (
      <Redirect to="/tv" />
    ) /*Any url with TV in it redirects to tv*/}
    <NumberListFetcher
      render={({ numberList }) => [
        <NotifyHeader numberList={numberList} />,
        <NumberContainer numberList={numberList} isAdmin={false} big={false} />
      ]}
    />
  </AppContainer>
);
