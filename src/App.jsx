import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Technologies from './components/Tech';
import Contact from './components/Contact';

function App() {
  // useEffect(() => {
  //   fetch("https://kotchakorn.app.n8n.cloud/webhook/notify-visit", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       path: window.location.pathname,
  //       time: new Date().toISOString(),
  //       userAgent: navigator.userAgent
  //     })
  //   });
  // }, []); 

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

export default App;
