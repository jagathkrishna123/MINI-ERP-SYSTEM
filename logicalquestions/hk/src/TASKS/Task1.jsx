import React, { useState } from 'react'

const Task1 = () => {
      const [count, setCount] = useState(0);

  const MIN = 0;
  const MAX = 10;

  const handleIncrement = () => {
    if (count < MAX) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > MIN) {
      setCount(count - 1);
    }
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>

      <button 
        onClick={handleDecrement} 
        disabled={count === MIN}
      >
        Decrement
      </button>

      <button 
        onClick={handleIncrement} 
        disabled={count === MAX}
        style={{ marginLeft: "10px" }}
      >
        Increment
      </button>

      {count === MAX && <p>Maximum limit reached</p>}
      {count === MIN && <p>Minimum limit reached</p>}
    </div>
  )
}

export default Task1