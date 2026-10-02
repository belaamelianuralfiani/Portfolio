import React, { useState } from 'react';
import heroImg from '../assets/hero/hero-main-2x.png';
import type { PageId } from '../types';

interface HeroSectionProps {
  onNavigate?: (page: PageId) => void;
  activePage?: PageId;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavClick = (page: PageId) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      const el = document.getElementById(page);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const q = searchQuery.toLowerCase();
    if (q.includes('about') || q.includes('bio') || q.includes('bela')) {
      handleNavClick('about');
    } else if (q.includes('skill') || q.includes('tool') || q.includes('soft')) {
      handleNavClick('skills');
    } else if (q.includes('work') || q.includes('shirt') || q.includes('project') || q.includes('cosmetic')) {
      handleNavClick('works');
    } else if (q.includes('contact') || q.includes('sertifikat') || q.includes('email')) {
      handleNavClick('contact');
    }
  };

  return (
    <section
      id="home"
      className="relative w-full bg-[#1b76e8] select-none flex items-center justify-center overflow-hidden"
    >
      {/* 16:9 Master Canvas Layout matching the Canva PDF exactly */}
      <div className="relative w-full max-w-[1920px] aspect-[16/9] mx-auto shadow-2xl overflow-hidden">
        {/* Master Hero Visual Artwork (Single unified high-resolution slide) */}
        <img
          src={heroImg}
          alt="PORTFOLIO - Bela Amelia Nuralfiani 2026 | Physics Student, IoT & Robotics Enthusiast, Leadership & Management"
          className="w-full h-full object-cover select-none pointer-events-none"
          loading="eager"
        />

        {/* Interactive Overlay Layer: Navigation Hotspots & Working Search */}
        <div className="absolute inset-0 pointer-events-auto">
          {/* Top Navbar Interactive Clickable Hotspots */}
          <div className="absolute top-[6.5%] left-[6.2%] flex items-center space-x-[3.6vw] md:space-x-[4.1vw]">
            {/* HOME Link */}
            <button
              onClick={() => handleNavClick('home')}
              title="Go to Home"
              aria-label="Home"
              className="cursor-pointer rounded-lg transition-all duration-200 hover:bg-yellow-400/20 active:scale-95"
              style={{ width: '5.2vw', height: '3.2vw' }}
            />

            {/* ABOUT ME Link */}
            <button
              onClick={() => handleNavClick('about')}
              title="Go to About Me"
              aria-label="About Me"
              className="cursor-pointer rounded-lg transition-all duration-200 hover:bg-yellow-400/20 active:scale-95"
              style={{ width: '8.4vw', height: '3.2vw' }}
            />

            {/* WORKS Link */}
            <button
              onClick={() => handleNavClick('works')}
              title="Go to Works"
              aria-label="Works"
              className="cursor-pointer rounded-lg transition-all duration-200 hover:bg-yellow-400/20 active:scale-95"
              style={{ width: '6.4vw', height: '3.2vw' }}
            />

            {/* CONTACT Link */}
            <button
              onClick={() => handleNavClick('contact')}
              title="Go to Contact"
              aria-label="Contact"
              className="cursor-pointer rounded-lg transition-all duration-200 hover:bg-yellow-400/20 active:scale-95"
              style={{ width: '7.8vw', height: '3.2vw' }}
            />
          </div>

          {/* Interactive Search Bar overlay positioned right on top of the search pill */}
          <form
            onSubmit={handleSearchSubmit}
            className="absolute top-[8.0%] right-[5.8%] flex items-center"
            style={{ width: '15.5vw', height: '2.6vw' }}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              aria-label="Search portfolio"
              className="w-full h-full bg-transparent text-white text-[0.9vw] font-semibold px-[1.2vw] outline-none placeholder-transparent focus:placeholder-white/60"
            />
            <button
              type="submit"
              title="Search"
              aria-label="Submit search"
              className="cursor-pointer h-full aspect-square rounded-full flex items-center justify-center opacity-0 hover:opacity-20 bg-white transition-opacity"
            />
          </form>
        </div>

        {/* Semantic Accessibility / SEO */}
        <h1 className="sr-only">PORTFOLIO - Bela Amelia Nuralfiani 2026</h1>
        <p className="sr-only">
          PHYSICS STUDENT | IOT & ROBOTICS ENTHUSIAST | LEADERSHIP & MANAGEMENT
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
