import React from "react";
import { addOrRemove } from "../api"
import { NumberDiv } from "./styled";

const WaitingNumber = ({ number, isAdmin, tv }) => (
  <NumberDiv tv={tv} onClick={() => isAdmin && addOrRemove(number)}>
    {number}
  </NumberDiv>
);

export default WaitingNumber;
