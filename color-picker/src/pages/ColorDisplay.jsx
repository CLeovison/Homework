import React, { useState, useEffect } from "react";
import ColorPicker from "./ColorPicker";

export default function ColorDisplay() {
  const [dispColor,setDispColor] = useState('#000000');

  
  return (
    <>
      <ColorPicker update={dispColor}/>
    </>
  );
}
