import React, {useState} from 'react';

function App() {

  // count is a "getter"
  // setCount is a "setter"
  const [count, setCount] = useState(0);

  function increment() {
    // Adds 1 to the current 'count' in state
    setCount( count + 1);
  }

  function decrement() {
    setCount( count - 1);
  }


  // When the value of {count} changes, React will automatically
  // re-render THIS COMPONENT
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}> - </button>
      <button onClick={increment}> + </button>
    </div>
  );

}

export default App;
