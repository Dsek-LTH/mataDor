import React from "react";
import { addOrRemove } from "../utils/api.js";
import { NumberDiv } from "./numberListStyle";

const WaitingNumber = ({ number, isAdmin, tv }) => (
  <NumberDiv tv={tv} onClick={() => isAdmin && addOrRemove(number)}>
    {number}
  </NumberDiv>
);

export default WaitingNumber;
