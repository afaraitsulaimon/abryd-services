import './App.css';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Services from './pages/Services';
import Blog from './pages/Blog';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<Aboutus/>}/>
      <Route path='/contact-us' element={<Contactus/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/blog' element={<Blog/>}/>

    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
