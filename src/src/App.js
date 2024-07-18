import React, { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    
    <div className='Counter-box'>
      <div className="counter">
      <h1>Counter Application</h1>
      <div className="count-display">Count: {count}</div>
      <div className="buttons">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
    </div>

  );
}

export default Counter;
