import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { EnrollmentForm } from './components/EnrollmentForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      <Hero />
      <About />
      <Features />
      <Location />
      <Contact />
      <EnrollmentForm />
      <Footer />
    </div>
  );
}