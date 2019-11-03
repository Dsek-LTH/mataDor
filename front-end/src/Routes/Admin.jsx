import React from "react";
import NumberContainer from "../Numbers/NumberContainer";
import AdminView from "../AdminBar/AdminView";
import { AppContainer } from "../utils/styles";
import useNumberList from "../hooks/useNumberList";

const AdminRoute = () => {
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

export default AdminRoute;
