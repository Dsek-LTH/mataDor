import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ColoredButton, FormContainer, WaitInput } from "../../components/styled";

const MAX_NUMBER_LENGTH = 8;

export default function HandleNotificationForm() {
    const navigate = useNavigate()
    const [input, setInput] = useState("")

    const handleChange = e => setInput(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        navigate(`/wait/input/${input}`)
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
