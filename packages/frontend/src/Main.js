import React from 'react';
import { Router, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Films from '../pages/Signup';

const Main = () => {
  return (
    <Router> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={Home}></Route>
      <Route exact path='/films' element={Films}></Route>
    </Router>
  );
}

export default Main;