import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar"
import "./App.css";
import Home from './pages/Home';
import Films from './pages/Films';

//import Footer from './components/Footer';
/*
function App() {
  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}*/


function App() {

  const [_data, setData] = useState({});

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className="App">
      <NavigationBar/>
      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/films' element={<Films/>}></Route>
      </Routes>
    </div>
  );
}

export default App
