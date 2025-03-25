import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Technologies from './components/Tech';
import Contact from './components/Contact';

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
}

export default App
