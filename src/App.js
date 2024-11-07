import './App.css';
// import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Router Components/Home';
import About from './Router Components/About';
import Contact from './Router Components/Contact';
import Inputbutton from './Inputbutton';
import Navbar from './Navbar';
import './firebaseConfig';
import Signup from './Signup';
import Login from './Login';


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
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/input" element={<Inputbutton />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;