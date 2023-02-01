import { useState, useEffect } from "react";

export default function GetNumberList() {
  const [numberList, setNumberList] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource("/subscribe");
    eventSource.onmessage = e => {
      const numberList = JSON.parse(e.data);
      if (numberList) setNumberList(numberList);
    };
    return () => {
      eventSource.onmessage = null;
      eventSource.close();
    };
  }, []);

  return numberList;
}
