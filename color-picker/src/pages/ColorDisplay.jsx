import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

export default function ColorDisplay() {
  const [mainColor, setMainColor] = useState(() =>{
      try{
        const savedColor = localStorage.getItem('colors');
        return savedColor ? JSON.parse(savedColor) : [];
      }catch(error){
        console.log("Error reading from local storage", error);
        return [];
      }
  })


  return (
    <>
      <ColorPicker />
    </>
  );
}
