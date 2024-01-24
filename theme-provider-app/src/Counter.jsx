import { useState } from 'react';

export const Counter = () => {
  const [ count, setCount ] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}