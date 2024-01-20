import React, { useState, useEffect } from 'react'
import ColorDisplay from './pages/ColorDisplay'
import ColorPicker from './pages/ColorPicker'

export default function App() {
  const [dispColor, setDispColor] = useState('');

  // Load color from local storage when the app loads
  useEffect(() => {
    const localColor = localStorage.getItem('localColor')
    if (localColor)  {
      setDispColor(localColor)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('localColor', dispColor)
  }, [dispColor])

  return (
    <>
      <ColorDisplay color={dispColor} />
      <ColorPicker color={dispColor} setColor={setDispColor}/>
    </>
  )
}
