import React from "react";
import WaitingNumber from "./WaitingNumber";
import { NumberListContainer } from "./numberListStyle";

const NumberContainer = ({ isAdmin, numberList, tv }) => (
  <NumberListContainer>
    {numberList.map(num => (
      <WaitingNumber key={num} isAdmin={isAdmin} number={num} tv={tv} />
    ))}
  </NumberListContainer>
);

export default NumberContainer;
