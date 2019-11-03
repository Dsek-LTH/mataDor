import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ColoredButton, FormContainer, WaitInput } from "../../components/styled";

const MAX_NUMBER_LENGTH = 8;

export default function () {
    const history = useHistory()
    const [input, setInput] = useState("")

    const handleChange = e => setInput(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        history.push(`/wait/input/${input}`)
    };

    return (
        <form onSubmit={onSubmit}>
            <FormContainer>
                <WaitInput
                    type="tel"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    maxLength={MAX_NUMBER_LENGTH}
                    value={input}
                    onChange={handleChange}
                    placeholder="ditt nummer"
                    autoFocus
                />
                <ColoredButton type="submit" color="#b4d2ba">
                    notifiera mig!
                </ColoredButton>
            </FormContainer>
        </form>
    );
}