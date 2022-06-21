import React, { useState } from "react";

function App() {
  const [Count] = useState(2468);

  function increase() {
    // Count++;

  }

  return (
    <div className="container">
      <h1>{Count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );

}

export default App;
