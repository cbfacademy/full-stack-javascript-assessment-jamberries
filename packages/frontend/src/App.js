import { Route, Routes } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/lexend-deca"; 
import Home from './pages/Home';
import Films from './pages/Films';
import FilmDetail from './pages/FilmDetail';
import Actors from './pages/Actors';
import ActorDetail from "./pages/ActorDetail";
import ActorNew from "./pages/ActorNew";

function App() {


  return (
    <div className="App">
      <NavigationBar/>
      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/films' element={<Films/>}></Route>
        <Route path='/films/:id' element={<FilmDetail/>}></Route>
        <Route path='/actors' element={<Actors/>}></Route>
        <Route path='/actors/:id' element={<ActorDetail/>}></Route>
        <Route path='/actor-new' element={<ActorNew/>}></Route>
      </Routes>

    </div>
  );
}

export default App
