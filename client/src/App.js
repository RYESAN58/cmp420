import './App.css';
import Students from './components/students';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/header';
import Remove from './components/remove';
import HomePage from './components/Home';
import StudentsTable from './components/view';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/add' element={<Students/>}/>
          <Route path='/remmove' element={<Remove/>}/>
          <Route path='/view' element={<StudentsTable/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
