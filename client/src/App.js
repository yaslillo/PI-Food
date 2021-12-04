import './App.css';
import LandingPage from './React/components/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './React/components/Home';
import Details from './React/components/Details';
import Create from './React/components/Create'



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
