import React from "react";
import WaitingNumber from "./WaitingNumber";
import { NumberListContainer } from "./numberListStyle";

const NumberContainer = ({ isAdmin, numberList }) => (
  <NumberListContainer>
    {numberList.map(num => (
      <WaitingNumber key={num} isAdmin={isAdmin} number={num} />
    ))}
  </NumberListContainer>
);

export default NumberContainer;
