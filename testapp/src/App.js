import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Loginpage from './Login';
import Registerpage from './Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Registerpage/>}/>
          <Route path='/login' element={<Loginpage/>}/>
          <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
