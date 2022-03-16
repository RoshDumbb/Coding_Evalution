
import './App.css';
import { Navbar } from './components/Navbar';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom"
import About from './components/About';
import { MoviesDashboard } from './components/MoviesDashboard';
import { SingleMovieDetails } from './components/SingleMovieDetails';
 


function App() {
  return (
    <div className="App">
      <Navbar />{" "}
      <Routes>
        <Route path={"/"} element={<Home />}>
          Home
        </Route>
        <Route path={"/about"} element={<About />}>
          About
        </Route>
        <Route path={"/movies"} element={<MoviesDashboard />}>
          Movies
        </Route>
        <Route path={"/:id"} element={<SingleMovieDetails/>}>
          Movies
        </Route>
      </Routes>
    </div>
  );
}

export default App;
