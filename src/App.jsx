import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/Services/Services';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import Resume from './components/resume/Resume';


const App = () => {
  return (
    <>
    <Sidebar />
  <main className='main'>
    <Home />
    <About />
    <Services />
    <Portfolio />
    <Contact />
    <Resume />
  </main>
    </>
  );

  };

export default App
