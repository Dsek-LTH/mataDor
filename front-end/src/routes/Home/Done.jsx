import React from "react";
import { useParams } from "react-router-dom";
import { NotifyContainer } from "../../components/styled"

export default function NotifyBell() {
    const { number } = useParams();
    return <NotifyContainer> {number} är redo att hämtas </NotifyContainer>
}
