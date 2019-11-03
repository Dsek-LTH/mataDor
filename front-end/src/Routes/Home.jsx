import React from "react";
import NumberContainer from "../Numbers/NumberContainer";
import NotifyHeader from "../utils/NotifyHeader";
import NumberListFetcher from "../Numbers/NumberListFetcher";
import { AppContainer } from "../utils/styles";

export default function () {
    return (< AppContainer emptySize="70px" >
        < NumberListFetcher render={
            ({ numberList }) => [<
                NotifyHeader key="header"
                numberList={numberList}
            />, <
                NumberContainer
                key="numberContainer"
                numberList={numberList}
                isAdmin={false}
                tv={false}
            />
            ]
        } />
    </AppContainer >)
}