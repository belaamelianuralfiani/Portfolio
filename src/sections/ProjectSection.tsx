import React, { useState } from 'react';
import shirtsImg from '../assets/works/works-shirts-2x.png';
import cosmeticsImg from '../assets/works/works-cosmetics-2x.png';
import illustrationsImg from '../assets/works/works-illustrations-2x.png';
import type { PageId } from '../types';
import { Navbar } from '../components/Navbar';

interface ProjectSectionProps {
  onNavigate?: (page: PageId) => void;
}

type WorkTab = 'shirts' | 'cosmetics' | 'illustrations';

export const ProjectSection: React.FC<ProjectSectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<WorkTab>('shirts');

  const works = {
    shirts: {
      image: shirtsImg,
      title: 'Shirt Designs',
      bg: 'bg-[#faf5f0]',
      footerBg: 'bg-[#f48da2]',
      theme: 'cream' as const,
    },
    cosmetics: {
      image: cosmeticsImg,
      title: 'Cosmetic Project',
      bg: 'bg-[#b83324]',
      footerBg: 'bg-[#faf5f0]',
      theme: 'cream' as const,
    },
    illustrations: {
      image: illustrationsImg,
      title: 'Illustration Folio',
      bg: 'bg-[#f0859c]',
      footerBg: 'bg-[#b83324]',
      theme: 'pink' as const,
    },
  };

  const currentWork = works[activeTab];

  return (
    <section className={`relative w-full min-h-screen flex flex-col justify-between overflow-hidden ${currentWork.bg} select-none transition-colors duration-500`}>
      {/* Top Navbar */}
      <div className="relative z-30">
        <Navbar
          activePage="works"
          onNavigate={(page) => onNavigate && onNavigate(page)}
          theme={currentWork.theme}
        />
      </div>

      {/* Category Pills Switcher */}
      <div className="relative z-20 flex justify-center items-center gap-3 px-4 pt-2">
        <button
          onClick={() => setActiveTab('shirts')}
          className={`cursor-pointer px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold tracking-wide transition-all duration-300 shadow-md ${
            activeTab === 'shirts'
              ? 'bg-[#8b263e] text-white scale-105 shadow-lg'
              : 'bg-white/80 text-gray-700 hover:bg-white'
          }`}
        >
          Shirt Designs
        </button>
        <button
          onClick={() => setActiveTab('cosmetics')}
          className={`cursor-pointer px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold tracking-wide transition-all duration-300 shadow-md ${
            activeTab === 'cosmetics'
              ? 'bg-[#8b263e] text-white scale-105 shadow-lg'
              : 'bg-white/80 text-gray-700 hover:bg-white'
          }`}
        >
          Cosmetic Project
        </button>
        <button
          onClick={() => setActiveTab('illustrations')}
          className={`cursor-pointer px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold tracking-wide transition-all duration-300 shadow-md ${
            activeTab === 'illustrations'
              ? 'bg-[#8b263e] text-white scale-105 shadow-lg'
              : 'bg-white/80 text-gray-700 hover:bg-white'
          }`}
        >
          Illustration Folio
        </button>
      </div>

      {/* Main Works Artwork matching Canva Slide */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 max-w-7xl mx-auto w-full py-4">
        <div className="relative max-w-5xl w-full flex items-center justify-center">
          <img
            key={activeTab}
            src={currentWork.image}
            alt={currentWork.title}
            className="w-full h-auto max-h-[70vh] object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.2)] animate-gentle-pulse"
          />
        </div>
      </div>

      {/* Bottom Footer Strip matching Canva Design */}
      <div className={`relative z-20 w-full h-12 sm:h-16 md:h-20 ${currentWork.footerBg} shadow-sm transition-colors duration-500`} />
    </section>
  );
};
export default ProjectSection;
