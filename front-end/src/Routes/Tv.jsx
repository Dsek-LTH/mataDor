import React from "react";
import Header from "../utils/Header";
import NumberContainer from "../Numbers/NumberContainer";
import { AppContainer } from "../utils/styles";
import useNumberList from "../hooks/useNumberList";

export default () => {
  const numberList = useNumberList()

  return (
    <AppContainer>
      <Header text="AVHÄMTNING" fontSize="6.5em" />
      <NumberContainer
        numberList={numberList}
        isAdmin={false}
        tv
      />
    </AppContainer>
  )
}
