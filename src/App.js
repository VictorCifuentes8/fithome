import './App.css';
import Header from "./componentes/Header";
import InicioSesion from "./pantallas/InicioSesion";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        {/* Enrutamiento a las diversas pantallas de la pagina*/}
        <Route path='/' element={<><Header/></>} />
        <Route path="/incioSesión" element={<><InicioSesion /></>}/>
        <Route path="/contactanos" element={<><InicioSesion /></>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
