import React from 'react';
import heroBg from './assets/hero/hero-bg.png';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FBFBF9]">
      <Navbar />

      {/* 1-Frame Master Hero Section (Navbar + Center Artwork + Ribbon in 1 Viewport) */}
      <section
        id="home"
        className="relative w-full min-h-[100dvh] h-[100dvh] lg:max-h-[1080px] bg-cover bg-top bg-no-repeat flex flex-col justify-between overflow-hidden select-none pt-16 sm:pt-20 md:pt-24"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <Hero />
      </section>

      <main>
        <About />
        <Education />
        <Skills />
        <Services />
        <Projects />
      </main>

      <Footer />
    </div>
  );
};

export default App;