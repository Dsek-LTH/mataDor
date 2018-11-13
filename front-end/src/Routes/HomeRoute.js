import React from "react";
import { Redirect } from "react-router";
import Header from "../utils/Header";
import NumberContainer from "../Numbers/NumberContainer";
import NumberListFetcher from "../Numbers/NumberListFetcher";
import NotifyMe from "../utils/NotifyMe";
import { AppContainer } from "../utils/styles";

export default ({ location }) => (
  <AppContainer>
    {location.search.includes("tv") && (
      <Redirect to="/tv" />
    ) /*Any url with TV in it redirects to tv*/}
    <NumberListFetcher
      render={({ numberList }) => [
        <Header text="Mat redo för upphämtning" />,
        /*<NotifyMe numberList={numberList} />, add in future*/
        <NumberContainer numberList={numberList} isAdmin={false} big={false} />
      ]}
    />
  </AppContainer>
);
