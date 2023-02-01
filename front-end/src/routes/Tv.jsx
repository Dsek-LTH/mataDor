import React from "react";
import Header from "../components/Header";
import NumberContainer from "../components/NumberContainer";
import { AppContainer } from "../components/styled";
import useNumberList from "../hooks/useNumberList";

var Frontpage = function() {
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

export default Frontpage
