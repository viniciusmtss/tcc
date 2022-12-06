import React from 'react';

import Barbearia from '../components/Barbearia';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Painel from '../components/Painel'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Barbearia />
      <Footer />
      <Painel />
    </div>
  );
}
