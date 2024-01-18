import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/lexend-deca"; 
import Home from './pages/Home';
import Films from './pages/Films';
import FilmDetail from './pages/FilmDetail';
import Genres from './pages/Genres';

//import Footer from './components/Footer';

const api_url = process.env.REACT_APP_API_URL

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${api_url}`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className="App">
      <NavigationBar/>
      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/films' element={<Films/>}></Route>
        <Route path='/films/:id' element={<FilmDetail/>}></Route>
        <Route path='/genres' element={<Genres/>}></Route>
      </Routes>
      <div>{data.age}</div>
    </div>
  );
}

export default App
