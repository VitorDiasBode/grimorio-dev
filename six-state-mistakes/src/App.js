import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FunctionalUpdate from './pages/1-FunctionalUpdate/FunctionalUpdate';
import StateInitialization from './pages/2-StateInitialization/StateInitialization';
import UpdateSpecificObjProperty from './pages/3-UpdateSpecificObjectProperti/UpdateSpecificObjProperty';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/1' element={<FunctionalUpdate/>}/>
          <Route path='/2' element={<StateInitialization/>}/>
          <Route path='/3' element={<UpdateSpecificObjProperty/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
