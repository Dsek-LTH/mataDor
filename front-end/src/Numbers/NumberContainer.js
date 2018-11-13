import React from "react";
import WaitingNumber from "./WaitingNumber";
import { NumberListContainer } from "./numberListStyle";

const NumberContainer = ({ isAdmin, numberList, big }) => (
  <NumberListContainer>
    {numberList.map(num => (
      <WaitingNumber key={num} isAdmin={isAdmin} number={num} big={big} />
    ))}
  </NumberListContainer>
);

export default NumberContainer;
