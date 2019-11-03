import { useState, useEffect } from "react";

export default function() {
  const [numberList, setNumberList] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource("/subscribe");
    eventSource.onmessage = e => {
      const numberList = JSON.parse(e.data);
      if (numberList) setNumberList(numberList);
    };
    // TODO avregga här
  }, []);

  return numberList;
}
