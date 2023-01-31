import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { delFood } from "../api";


export default function Welcome() {
  const { id } = useParams();
  useEffect(() => {
    if (!isNaN(+id) && id.length < 9) {
      delFood(id);
      console.log("Tried to delete food");
    } else {
      console.log("Did not try to delete food");
    }
  });
  return "";
}
