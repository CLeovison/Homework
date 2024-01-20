import React from 'react'
import './App.css'
import { ThemeProvider, useTheme } from './ThemeProvider'
import { Counter } from './Counter'


function App() {
  return (
    <ThemeProvider>
      <ThemedCounter />
    </ThemeProvider>
  )
}

const ThemedCounter = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ backgroundColor: theme === 'light' ? 'white' : 'grey', color: theme === 'light' ? 'grey' : 'white' }}>
      <Counter />
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  )
}

export default App
