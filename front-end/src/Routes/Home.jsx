import React from "react";
import NumberContainer from "../Numbers/NumberContainer";
import NotifyHeader from "../utils/NotifyHeader";
import { AppContainer } from "../utils/styles";
import useNumberList from "../hooks/useNumberList";

export default function () {
    const numberList = useNumberList()

    return (
        <AppContainer emptySize="70px">
            <NotifyHeader key="header"
                numberList={numberList}
            />
            < NumberContainer
                key="numberContainer"
                numberList={numberList}
                isAdmin={false}
                tv={false}
            />
        </AppContainer>)
}