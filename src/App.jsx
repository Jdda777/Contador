import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const disminuirContador = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const aumentarContador = () => {
    setCount(count + 1);
  };

  const resetearContador = () => {
    setCount(0);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>Count is {count}</h1>
        <button id="rojo" onClick={() => disminuirContador()}>
          Bajar
        </button>
        <button id="verde" onClick={() => aumentarContador()}>
          Subir
        </button>
        <button onClick={() => resetearContador()}>Resetear</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
