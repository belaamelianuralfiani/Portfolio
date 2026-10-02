import React from 'react';
import skillsMainImg from '../assets/skills/skills-main-2x.png';
import type { PageId } from '../types';
import { Navbar } from '../components/Navbar';

interface SkillSectionProps {
  onNavigate?: (page: PageId) => void;
}

export const SkillSection: React.FC<SkillSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#1c78eb] via-[#2088ff] to-[#125ec7] select-none">
      {/* Top Navbar */}
      <div className="relative z-30">
        <Navbar
          activePage="about"
          onNavigate={(page) => onNavigate && onNavigate(page)}
          theme="blue"
        />
      </div>

      {/* Main Skills Content matching Canva Slide 3 */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 max-w-7xl mx-auto w-full py-6">
        <div className="relative max-w-5xl w-full flex items-center justify-center">
          <img
            src={skillsMainImg}
            alt="Skills & Toolset - Bela Amelia Nuralfiani"
            className="w-full h-auto max-h-[75vh] object-contain drop-shadow-[0_20px_45px_rgba(5,35,90,0.35)]"
          />
        </div>
      </div>

      {/* Bottom Warm Peach Footer Strip matching Canva Design */}
      <div className="relative z-20 w-full h-12 sm:h-16 md:h-20 bg-[#f7be8b] shadow-sm" />
    </section>
  );
};
export default SkillSection;
