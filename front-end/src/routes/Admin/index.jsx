import React from "react";
import NumberContainer from "../../components/NumberContainer";
import { AppContainer } from "../../components/styled";
import AdminView from "./AdminView";
import useNumberList from "../../hooks/useNumberList";

export default function GetIndex() {
  const numberList = useNumberList()
  return (
    <AppContainer>
      <AdminView
        numberList={numberList}
      />

      <NumberContainer
        numberList={numberList}
        isAdmin
      />
    </AppContainer >)
}
