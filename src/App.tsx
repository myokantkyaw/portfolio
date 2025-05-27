import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Education } from './sections/Education';
import { Work } from './sections/Work';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      <div className="stars-container fixed inset-0 z-0"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;