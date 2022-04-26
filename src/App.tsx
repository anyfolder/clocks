import React from "react";
import Clock from "./feathers/Clock";
import "./app.scss"

function App() {
  const arr = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div className="App">
      {arr.map((_, index) => (
        <Clock key={index} diff={index} />
      ))}
    </div>
  );
}

export default App;
