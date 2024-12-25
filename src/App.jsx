import { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleReset = () => {
    setInput("");
  };

  const handleCalcResult = () => {
    if (input) {
      setInput(eval(input));
    }
  };

  const handleDelete = () => {
    setInput(String(input).slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="header">
        <img className="logo-img" src="favicon.svg" alt="" />
        <div className="logo-text-box">
          <h1 className="title">Arithma</h1>
          <p className="tagline">Simplifying Numbers, Empowering Minds </p>
        </div>
      </div>
      <div>
        <input
          disabled="true"
          className="display"
          type="text"
          placeholder="0"
          value={input}
        />
      </div>
      <div className="buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleDelete()}>DEL</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleReset()}>C</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("*")}>x</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button className="btn-accent" onClick={() => handleCalcResult()}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
