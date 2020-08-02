import React, { useState } from "react";
import WindowPortal from "./WindowPortal";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [isWindowOpened, setIsWindowOpened] = useState(false);

  function toggleWindow() {
    setIsWindowOpened((isWindowOpened) => !isWindowOpened);
  }

  function incrementCounter() {
    setCounter((counter) => counter + 1);
  }

  return (
    <div className="App">
      <p>Counter: {counter}</p>
      <p>
        <button onClick={incrementCounter}>Increment counter</button>
      </p>
      <p>
        <button onClick={toggleWindow}>
          {isWindowOpened ? "Close window" : "Open window"}
        </button>
      </p>
      {isWindowOpened && (
        <WindowPortal>
          <p>Counter: {counter}</p>
          <p>
            <button onClick={incrementCounter}>Increment counter</button>
          </p>
          <button onClick={toggleWindow}>Close me!</button>
        </WindowPortal>
      )}
    </div>
  );
}

export default App;
