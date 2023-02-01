import React from "react"
import { useParams, useNavigate } from "react-router-dom";
import { NotifyContainer } from "../../components/styled";

export default function HandleWaitPage({ numberList }) {
    const { number } = useParams();
    const navigate = useNavigate()

    if (numberList.includes(number)) {
        try {
            new Notification("Din mat är klar!");
        } catch (e) {
            // Some browsers require the service worker to do the notications,
            // this is a hack i took from stack overflow to make mobile-chrome
            // work by using the service worker we get from react-scripts build command
            navigator.serviceWorker.register("service-worker.js");
            Notification.requestPermission(function (result) {
                if (result === "granted") {
                    navigator.serviceWorker.ready.then(function (registration) {
                        registration.showNotification("Din mat är klar!");
                    });
                }
            });
        }
        navigate(`/wait/done/${number}`)
    }

    return <NotifyContainer>väntar på {number}</NotifyContainer>
}
