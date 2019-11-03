import React from "react";
import Header from "../utils/Header";
import NumberListFetcher from "../Numbers/NumberListFetcher";
import NumberContainer from "../Numbers/NumberContainer";
import { AppContainer } from "../utils/styles";

export default () => (
  <AppContainer>
    <NumberListFetcher
      render={({ numberList }) => [
        <Header key="header" text="AVHÄMTNING" fontSize="6.5em" />,
        <NumberContainer
          key="numberContainer"
          numberList={numberList}
          isAdmin={false}
          tv={true}
        />
      ]}
    />
  </AppContainer>
);
