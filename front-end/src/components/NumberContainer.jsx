import React from "react";
import WaitingNumber from "./WaitingNumber";
import { NumberListContainer } from "./styled";

var ReturnNumberContainer = function({ isAdmin, numberList, tv }) { return (
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
}

export default ReturnNumberContainer;
