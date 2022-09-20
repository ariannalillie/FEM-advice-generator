import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import dice from "./images/icon-dice.svg";

function App() {
  const [advice, setAdvice] = useState("");
  const [number, setNumber] = useState("");

  const fetchData = async () => {
    const data = await axios.get("https://api.adviceslip.com/advice");
    setAdvice(data.data.slip.advice);
   setNumber(data.data.slip.id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const HandleClick = async () => {
    fetchData();
  };

  return (
    <div className="App">
      <div className="advice-container">
        <h1 className="advice-number">{`ADVICE #${number}`}</h1>
        <h1 className="advice-text">{`"${advice}"`}</h1>
        <div className="advice-button" onClick={HandleClick}>
          <img src={dice} alt="dice" className="dice"/>
        </div>
      </div>
    </div>
  );
}

export default App;
