import React from "react";
import Header from "../utils/Header";
import NumberContainer from "../Numbers/NumberContainer";
import NumberListFetcher from "../Numbers/NumberListFetcher";
import NotifyMe from "../utils/NotifyMe";
import { AppContainer } from "../utils/styles";

export default () => (
  <AppContainer>
    <NumberListFetcher
      render={({ numberList }) => [
        <Header text="Mat redo för upphämtning" />,
        <NotifyMe numberList={numberList} />,
        <NumberContainer numberList={numberList} isAdmin={false} big={false} />
      ]}
    />
  </AppContainer>
);
