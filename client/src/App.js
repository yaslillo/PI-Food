import './App.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Create from './components/Create'



function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/recipe' element={<Create />}/>
        <Route path='/recipes/type' element={<Home />}/>
        <Route path='/recipes/:id' element={<Details />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
