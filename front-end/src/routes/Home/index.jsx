import React from "react";
import NumberContainer from "../../components/NumberContainer";
import { AppContainer } from "../../components/styled";
import NotifyHeader from "./NotifyHeader";
import useNumberList from "../../hooks/useNumberList";

export default function () {
    const numberList = useNumberList()

    return (
        <AppContainer emptySize="70px">
            <NotifyHeader numberList={numberList} />
            <NumberContainer numberList={numberList} />
        </AppContainer>)
}