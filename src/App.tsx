import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import dice from './images/icon-dice.svg';

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(data.data.slip.advice);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="advice-container">
        <h1 className="advice-number">Advice #117</h1>
        <h1 className="advice-text">{advice}</h1>
        <div className="advice-button">
          <img src={dice} alt="dice" />
        </div>
      </div>
    </div>
  );
}

export default App;
