import { useState, useRef, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import { atom, useAtom } from "jotai";
import "./App.css";

// const constAtom = atom(0);
function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const ref = useRef(0);
  useEffect(() => {
    ref.current++;
  });
  return (
    <div className="App">
      <h1>ref:{ref.current}</h1>
      <div className="card">
        <button
          className="bg-yellow-300"
          onClick={() => {
            Promise.resolve(1).then(() => {
              setCount1((count) => count + 1);
              setCount((count) => count + 1);
            });
          }}
        >
          button
        </button>
        <p>count is {count}</p>
        <p>count1 is {count1}</p>
      </div>
    </div>
  );
}

export default App;
