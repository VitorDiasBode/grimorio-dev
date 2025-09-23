import { BrowserRouter, Routes, Route } from "react-router";

//Paginas
import Home from "./pages/Home";
import Piratas from "./pages/Piratas";
import Marinheiros from "./pages/Marinheiros";
import Espectros from "./pages/Espectros";
import Personagem from "./pages/Personagem/Personagem";

// import '../src/reset.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/piratas" element={<Piratas />} />
         <Route path="/marinheiros" element={<Marinheiros />} />
         <Route path="/espectros" element={<Espectros />} />
         <Route path="/personagem/:id" element={<Personagem/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
