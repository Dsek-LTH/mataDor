import React from "react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import bell from "./bell.svg";

const BellIcon = styled.img`
  max-height: 60px;
`;

const BellButton = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`;


export default function GetBell() {
    const navigate = useNavigate()

    const askForNotifictions = async () => {
        if (!("Notification" in window)) {
            alert("Din webläsare stödjer inte notiser :(");
        }
        const permission = await Notification.requestPermission()
        if (permission === "granted") {
            // todo how should we handle the hard coded paths?
            navigate("/wait/input")
        }
    };

    return (
        <BellButton onClick={askForNotifictions}>
            <BellIcon src={bell} />
        </BellButton>)
}
