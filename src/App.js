import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Router Components/Home';
import About from './Router Components/About';
import Contact from './Router Components/Contact';
import Inputbutton from './Inputbutton';



function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/input" element={<Inputbutton />} /> 

      </Routes>


    </>
  );
}

export default App;
