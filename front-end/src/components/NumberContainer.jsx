import React from "react";
import WaitingNumber from "./WaitingNumber";
import { NumberListContainer } from "./styled";

export default ({ isAdmin, numberList, tv }) => (
    <NumberListContainer>
        {
            numberList.map(num => (<WaitingNumber
                key={num}
                isAdmin={isAdmin}
                number={num}
                tv={tv}
            />))
        }
    </NumberListContainer>
)
