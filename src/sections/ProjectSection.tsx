import React, { useState } from 'react';
import shirtsImg from '../assets/works/works-shirts-2x.png';
import cosmeticsImg from '../assets/works/works-cosmetics-2x.png';
import illustrationsImg from '../assets/works/works-illustrations-2x.png';
import type { PageId } from '../types';

interface ProjectSectionProps {
  onNavigate?: (page: PageId) => void;
  activePage?: PageId;
}

type WorkTab = 'shirts' | 'cosmetics' | 'illustrations';

export const ProjectSection: React.FC<ProjectSectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<WorkTab>('shirts');
  const [searchQuery, setSearchQuery] = useState('');

  const works = {
    shirts: {
      image: shirtsImg,
      title: 'Shirt Designs',
      bg: 'bg-[#faf5f0]',
    },
    cosmetics: {
      image: cosmeticsImg,
      title: 'Cosmetic Project',
      bg: 'bg-[#b83324]',
    },
    illustrations: {
      image: illustrationsImg,
      title: 'Illustration Folio',
      bg: 'bg-[#f0859c]',
    },
  };

  const currentWork = works[activeTab];

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
    if (q.includes('home')) handleNavClick('home');
    else if (q.includes('about')) handleNavClick('about');
    else if (q.includes('skill')) handleNavClick('skills');
    else if (q.includes('contact')) handleNavClick('contact');
  };

  return (
    <section
      id="works"
      className={`relative w-full ${currentWork.bg} select-none flex flex-col items-center justify-center overflow-hidden transition-colors duration-500`}
    >
      {/* Works Category Quick Switcher Pills */}
      <div className="w-full max-w-[1920px] mx-auto pt-4 pb-2 px-6 flex justify-center items-center gap-3 z-30">
        <button
          onClick={() => setActiveTab('shirts')}
          className={`cursor-pointer px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-extrabold tracking-wide transition-all duration-300 shadow-md ${
            activeTab === 'shirts'
              ? 'bg-[#8b263e] text-white scale-105 shadow-lg'
              : 'bg-white/80 text-gray-800 hover:bg-white'
          }`}
        >
          Shirt Designs
        </button>
        <button
          onClick={() => setActiveTab('cosmetics')}
          className={`cursor-pointer px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-extrabold tracking-wide transition-all duration-300 shadow-md ${
            activeTab === 'cosmetics'
              ? 'bg-[#8b263e] text-white scale-105 shadow-lg'
              : 'bg-white/80 text-gray-800 hover:bg-white'
          }`}
        >
          Cosmetic Project
        </button>
        <button
          onClick={() => setActiveTab('illustrations')}
          className={`cursor-pointer px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-extrabold tracking-wide transition-all duration-300 shadow-md ${
            activeTab === 'illustrations'
              ? 'bg-[#8b263e] text-white scale-105 shadow-lg'
              : 'bg-white/80 text-gray-800 hover:bg-white'
          }`}
        >
          Illustration Folio
        </button>
      </div>

      {/* 16:9 Master Works Slide */}
      <div className="relative w-full max-w-[1920px] aspect-[16/9] mx-auto shadow-2xl overflow-hidden">
        <img
          key={activeTab}
          src={currentWork.image}
          alt={currentWork.title}
          className="w-full h-full object-cover select-none pointer-events-none transition-opacity duration-300"
          loading="lazy"
        />

        {/* Interactive Navigation Hotspots */}
        <div className="absolute inset-0 pointer-events-auto">
          <div className="absolute top-[6.5%] left-[6.2%] flex items-center space-x-[3.6vw] md:space-x-[4.1vw]">
            <button
              onClick={() => handleNavClick('home')}
              title="Home"
              aria-label="Home"
              className="cursor-pointer rounded-lg hover:bg-black/10 active:scale-95 transition-all"
              style={{ width: '5.2vw', height: '3.2vw' }}
            />
            <button
              onClick={() => handleNavClick('about')}
              title="About Me"
              aria-label="About Me"
              className="cursor-pointer rounded-lg hover:bg-black/10 active:scale-95 transition-all"
              style={{ width: '8.4vw', height: '3.2vw' }}
            />
            <button
              onClick={() => handleNavClick('works')}
              title="Works"
              aria-label="Works"
              className="cursor-pointer rounded-lg hover:bg-black/10 active:scale-95 transition-all"
              style={{ width: '6.4vw', height: '3.2vw' }}
            />
            <button
              onClick={() => handleNavClick('contact')}
              title="Contact"
              aria-label="Contact"
              className="cursor-pointer rounded-lg hover:bg-black/10 active:scale-95 transition-all"
              style={{ width: '7.8vw', height: '3.2vw' }}
            />
          </div>

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
              className="w-full h-full bg-transparent text-gray-900 text-[0.9vw] font-semibold px-[1.2vw] outline-none placeholder-transparent focus:placeholder-gray-500"
            />
            <button
              type="submit"
              title="Search"
              className="cursor-pointer h-full aspect-square rounded-full flex items-center justify-center opacity-0 hover:opacity-20 bg-black"
            />
          </form>
        </div>

        <h2 className="sr-only">Works & Portfolio - Bela Amelia Nuralfiani</h2>
      </div>
    </section>
  );
};

export default ProjectSection;
