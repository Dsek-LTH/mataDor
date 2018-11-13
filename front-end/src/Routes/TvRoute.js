import React from "react";
import Header from "../utils/Header";
import NumberListFetcher from "../Numbers/NumberListFetcher";
import NumberContainer from "../Numbers/NumberContainer";
import { AppContainer } from "../utils/styles";

export default () => (
  <AppContainer>
    <NumberListFetcher
      render={({ numberList }) => [
        <Header text="AVHÄMTNING" fontSize="7em" />,
        <NumberContainer numberList={numberList} isAdmin={false} big={true} />
      ]}
    />
  </AppContainer>
);
