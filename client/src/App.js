import './App.css';
import LandingPage from './React/components/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './React/components/Home';
import Details from './React/components/Details';



function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />}/>
        <Route exact path='/home' element={<Home />}/>
        <Route exact path='/recipe' element={<Home />}/>
        <Route exact path='/recipes/type' element={<Home />}/>
        <Route exact path='/recipes/:id' element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
