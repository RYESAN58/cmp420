import './App.css';
import Students from './components/students';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/header';
import Remove from './components/remove';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Students/>}/>
          <Route path='/remmove' element={<Remove/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
