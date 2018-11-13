import React from "react";
import NumberContainer from "../Numbers/NumberContainer";
import NumberListFetcher from "../Numbers/NumberListFetcher";
import AdminView from "../AdminBar/AdminView";
import { AppContainer } from "../utils/styles";

const AdminRoute = () => (
  <AppContainer>
    <NumberListFetcher
      render={({ numberList }) => [
        <AdminView numberList={numberList} />,
        <NumberContainer numberList={numberList} isAdmin />
      ]}
    />
  </AppContainer>
);

export default AdminRoute;
