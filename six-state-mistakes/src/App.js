import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FunctionalUpdate from './pages/1_FunctionalUpdate';
import './pages/style.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FunctionalUpdate/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
