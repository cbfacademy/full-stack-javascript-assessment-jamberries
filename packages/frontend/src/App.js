import React from "react";
//import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar"
import "./App.css";
import Home from './pages/Home';
import Films from './pages/Films';
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
      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/films' element={<Films/>}></Route>
    </Routes>
    </div>
  );
}

export default App
