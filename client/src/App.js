import './App.css';
import Students from './components/students';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Students/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
