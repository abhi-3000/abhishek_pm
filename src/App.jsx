import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import CTA from './components/Contact';
import Footer from './components/Footer';
import CaseStudyPage from './components/CaseStudyPage';

  const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};
const Home = () => {


  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <CTA />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollHandler />
      <div className="min-h-screen bg-gradient-to-b from-[#2b140fff]  via-[#220802ff] to-[#0f0f0f] font-golos selection:bg-white/20 selection:text-white overflow-x-hidden tracking-tight">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<CaseStudyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;