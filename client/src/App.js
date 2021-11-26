import './App.css';
import LandingPage from './React/components/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './React/components/Home';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />}/>
        <Route exact path='/home' element={<Home />}/>
        <Route exact path='/recipes' element={<LandingPage />}/>
        <Route exact path='/recipes/new' element={<LandingPage />}/>
        <Route exact path='/recipes/:id' element={<LandingPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
