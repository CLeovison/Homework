import React, { useState } from 'react';

const colors = [
  'red',
  'blue',
  'green'
]

export default function ColorPicker({ color, setColor }) {
  const [savedColor, setSavedColor] = useState("")
  return (
    <div>
      <span>Color Picker</span>
      <input
        type="text"
        value={savedColor}
        onChange={e => setSavedColor(e.target.value)}
      />
      <button type="button" onClick={e => setColor(savedColor)}>
        Submit
      </button>
      {/* button list implementation */}
      {/* {
        colors.map((color, index) => (
          <button type="button" key={index}>{color}</button>
        ))
      } */}
    </div>
  )
}