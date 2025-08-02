import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello! This is a static message.");
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleClick = (e) => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: "20px" }}>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <br></br>
      <button onClick={decrement}>Decrement</button>
      <br></br>
      <button onClick={()=>sayWelcome("Welcome to the Event App!")}>Say welcome</button>
      <br></br>
      <button onClick={handleClick}>Click on me</button>
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
