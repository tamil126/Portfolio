import './App.css';
import Home from './portfolio/home/home';
import { About } from './portfolio/about/about';
import { Certification } from './portfolio/certification/certification';
import { Contact } from './portfolio/contact us/contact';
import { Qualification } from './portfolio/qualification/qualification';
import { Skills } from './portfolio/skills/skills';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/qualification' element={<Qualification/>}></Route>
        <Route path='/certification' element={<Certification/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
