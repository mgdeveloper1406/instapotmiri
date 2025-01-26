import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";  // Usamos Link para navegación
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail"; 
import Timer from "./components/Timer"; // Importa el componente Timer
import Info from "./components/Info"; // Importa el componente Info
import { FaUtensils, FaInfoCircle, FaClock } from 'react-icons/fa'; 
import "./App.css"; 

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Instapot Recipes</h1>
        </header>

        <div className="content">
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/timer" element={<Timer />} /> {/* Ruta para el temporizador */}
            <Route path="/info" element={<Info />} /> {/* Ruta para la sección de Info */}
          </Routes>
        </div>

        {/* Menú inferior */}
        <div className="bottom-menu">
          <Link to="/" className="menu-button">
            <FaUtensils />
            <span>Recipes</span>
          </Link>
          <Link to="/info" className="menu-button"> {/* Enlace a la sección de Info */}
            <FaInfoCircle />
            <span>Info</span>
          </Link>
          <Link to="/timer" className="menu-button">
            <FaClock />
            <span>Timer</span>
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
