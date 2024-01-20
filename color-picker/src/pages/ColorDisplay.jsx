import React from "react";

export default function ColorDisplay({ color }) {

  const colorDisplayStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: color,
    border: '1px solid black',
    margin: '10px',
  }
  
  return (
    <div style={colorDisplayStyle}></div>
  );
}
