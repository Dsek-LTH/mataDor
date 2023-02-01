import React from "react";
import { StyledHeader } from "../../components/styled";
import { Routes, Route } from "react-router-dom";
import Bell from "./Bell"
import NotificationForm from "./NotificationForm"
import Waiting from "./Waiting"
import Done from "./Done"

export default function GetNotifyHeader({ numberList }) {

  return (<div>
    <StyledHeader>
      Mat redo för upphämtning
      <Routes>
          <Route path="/" element={<Bell />} />
      </Routes>
    </StyledHeader >

    <Routes>
      <Route path="/input" element={<NotificationForm />} />

      <Route path="/input/:number" element={<Waiting numberList={numberList} />} />

      <Route path="/done/:number" element={<Done />} />
    </Routes>
  </div >)
}
