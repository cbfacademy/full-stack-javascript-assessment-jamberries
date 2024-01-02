import React, { useState, useEffect } from "react";
import Main from "./Main.js"
import Navbar from "./Navbar.js"
import "./App.css";

/*
function App() {
  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}*/


function App() {
  /*
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );*/
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App
