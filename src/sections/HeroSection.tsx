import React, { useState } from 'react';
import heroMainImg from '../assets/hero/hero-main-2x.png';
import butterflyImg from '../assets/hero/butterfly.png';
import starsImg from '../assets/hero/stars.png';
import type { PageId } from '../types';
import { Navbar } from '../components/Navbar';

interface HeroSectionProps {
  onNavigate?: (page: PageId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#1c78eb] via-[#2088ff] to-[#1055ba] select-none"
    >
      {/* Ambient Lighting & Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_45%,_rgba(115,190,255,0.45)_0%,_transparent_65%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-300/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Top Navbar */}
      <div className="relative z-30">
        <Navbar
          activePage="home"
          onNavigate={(page) => onNavigate && onNavigate(page)}
          theme="blue"
        />
      </div>

      {/* Center 3D Hero Artwork & Floating Elements */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 max-w-7xl mx-auto w-full">
        {/* Floating 3D Left Butterfly */}
        <div
          className="absolute -left-6 sm:left-4 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 w-28 sm:w-44 md:w-60 lg:w-72 pointer-events-none animate-float-slow transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
          }}
        >
          <img
            src={butterflyImg}
            alt="Decorative 3D Butterfly"
            className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] filter brightness-105"
          />
        </div>

        {/* Floating 3D Right Butterfly (Flipped) */}
        <div
          className="absolute -right-6 sm:right-4 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 w-28 sm:w-44 md:w-60 lg:w-72 pointer-events-none animate-float-reverse transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px) scaleX(-1)`,
          }}
        >
          <img
            src={butterflyImg}
            alt="Decorative 3D Butterfly"
            className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] filter brightness-105"
          />
        </div>

        {/* Ambient Twinkling 3D Stars */}
        <div className="absolute left-[20%] top-[25%] w-16 sm:w-24 md:w-32 pointer-events-none animate-gentle-pulse opacity-90">
          <img src={starsImg} alt="3D Stars" className="w-full h-auto drop-shadow-lg" />
        </div>

        {/* Centerpiece Image Artwork */}
        <div
          className="relative max-w-5xl w-full flex items-center justify-center transition-transform duration-300 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${mousePos.y * -4}deg) rotateY(${mousePos.x * 4}deg)`,
          }}
        >
          <img
            src={heroMainImg}
            alt="Bela Amelia Nuralfiani Portfolio 2026"
            className="w-full h-auto max-h-[60vh] object-contain drop-shadow-[0_20px_45px_rgba(5,35,90,0.35)]"
          />
        </div>

        {/* Bottom Tagline / Subtitle */}
        <div className="mt-4 md:mt-6 text-center z-10 px-4">
          <h2 className="text-white text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold tracking-[0.18em] sm:tracking-[0.25em] md:tracking-[0.32em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            PHYSICS STUDENT | IOT & ROBOTICS ENTHUSIAST | LEADERSHIP & MANAGEMENT
          </h2>
        </div>
      </div>

      {/* Bottom Pastel Pink Footer Strip matching Canva Design */}
      <div className="relative z-20 w-full h-12 sm:h-16 md:h-20 bg-[#f48da2] shadow-[0_-4px_20px_rgba(244,141,162,0.3)] transition-all duration-300" />
    </section>
  );
};
export default HeroSection;
