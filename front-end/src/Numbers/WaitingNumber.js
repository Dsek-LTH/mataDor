import React from "react";
import { addOrRemove } from "../utils/api.js";
import { NumberDiv } from "./numberListStyle";

const WaitingNumber = ({ number, isAdmin, big }) => (
  <NumberDiv big={big} onClick={() => isAdmin && addOrRemove(number)}>
    {number}
  </NumberDiv>
);

export default WaitingNumber;
