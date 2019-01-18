import React from "react";
import { Redirect } from "react-router";
import NumberContainer from "../Numbers/NumberContainer";
import NotifyHeader from "../utils/NotifyHeader";
import NumberListFetcher from "../Numbers/NumberListFetcher";
import { AppContainer } from "../utils/styles";

export default ({ location }) => (
  <AppContainer emptySize="70px">
    {location.search.includes("tv") && (
      <Redirect to="/tv" />
    ) /*Any url with TV in it redirects to tv*/}
    <NumberListFetcher
      render={({ numberList }) => [
        <NotifyHeader key="header" numberList={numberList} />,
        <NumberContainer
          key="numberContainer"
          numberList={numberList}
          isAdmin={false}
          tv={false}
        />
      ]}
    />
  </AppContainer>
);
