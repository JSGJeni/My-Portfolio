import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe'; 
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />   
      <Skills />
      <Projects />
      <Contact />
      <Footer />
     
    </div>
  );
}

export default App;
