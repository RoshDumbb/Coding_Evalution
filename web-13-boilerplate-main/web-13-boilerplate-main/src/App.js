
import './App.css';
import { Navbar } from './components/Navbar';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom"
import About from './components/About';
import { MoviesDashboard } from './components/MoviesDashboard';
 


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
        {/* <Route path={"/movies/:id"} element={<MoviesDashboard />}>
          Movies
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
