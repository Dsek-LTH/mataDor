import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { addFood } from "../api";


export default function Welcome() {
  const { id } = useParams();
  useEffect(() => {
    if (!isNaN(+id) && id.length < 9) {
      addFood(id);
      console.log("Tried to add food");
    } else {
      console.log("Did not try to add food");
    }
  });
  return "";
}
