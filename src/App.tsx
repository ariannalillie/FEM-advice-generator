import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

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
      <h1 className="advice">{advice}</h1>
    </div>
  );
}

export default App;
