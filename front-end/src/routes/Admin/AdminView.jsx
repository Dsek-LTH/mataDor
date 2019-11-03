import React, { useState, useRef, useEffect } from "react";
import { addOrRemove, clear } from "../../api";
import { AdminForm, FocusInput, ColoredButton } from "../../components/styled";

const MAX_NUMBER_LENGTH = 8;
const filterNumeric = str => str.replace(/\D/g, "");

export default function ({ numberList }) {
    const [typed, setTyped] = useState("")
    const inputEl = useRef(null);

    const sendNumber = () => sendNumberWithParam(typed);

    const sendNumberWithParam = num => {
        if (num.length > 0) {
            addOrRemove(num);
            setTyped("")
        }
    };

    const clearOnEscape = event => {
        if (event.key === "Escape") {
            setTyped("")
        }
    };

    const onFormSubmit = event => {
        event.preventDefault();
        sendNumber();
    };

    const focusInput = () => {
        // setTimeout hack necessary to prevent browsers blocking this behaviour
        // still needed?
        setTimeout(() => inputEl.current.focus(), 1);
    };

    const updateTyped = event => {
        const typed = filterNumeric(event.target.value)
            .substring(0, MAX_NUMBER_LENGTH);

        setTyped(typed)
    };

    useEffect(() => {
        focusInput()
        window.addEventListener("focus", focusInput);

        return () => {
            window.removeEventListener("focus", focusInput);
        }
    })

    const newNumber = !numberList.includes(typed);
    return (
        <AdminForm onSubmit={onFormSubmit}>
            <ColoredButton color="#dbafc1"
                area="clear"
                onClick={clear}
                type="button">
                rensa
            </ColoredButton>

            <FocusInput type="tel"
                pattern="[0-9]*"
                inputMode="numeric"
                value={typed}
                onChange={updateTyped}
                onBlur={focusInput}
                onKeyDown={clearOnEscape}
                ref={inputEl}
                maxLength={MAX_NUMBER_LENGTH}
                autoFocus />

            <ColoredButton
                color={newNumber ? "#8ed081" : "#dbafc1"}
                area="send"
                onClick={sendNumber}
                type="submit">
                {newNumber ? "lägg till" : "ta bort"}
            </ColoredButton>
        </AdminForm >
    );
}