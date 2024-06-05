import React, { useState } from 'react'

export const ButtonCounter = () => {

    const [count, setCount] = useState(0);

    const handleCounter = () => {
        setCount((prev) => prev + 1);
    }

  return (
    <>
        <p>Button clicked {count} times.</p>
        <button onClick={handleCounter}>Click me</button>
    </>
  )
}
