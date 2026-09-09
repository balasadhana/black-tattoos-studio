import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Artists from './components/Artists';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Artists />
        <Reviews />
        <Booking />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
