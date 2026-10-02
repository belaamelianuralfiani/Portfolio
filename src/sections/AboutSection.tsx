import React from 'react';
import aboutMainImg from '../assets/about/about-main-2x.png';
import type { PageId } from '../types';
import { Navbar } from '../components/Navbar';

interface AboutSectionProps {
  onNavigate?: (page: PageId) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#f79fb0] select-none">
      {/* Top Navbar with Pink Theme */}
      <div className="relative z-30">
        <Navbar
          activePage="about"
          onNavigate={(page) => onNavigate && onNavigate(page)}
          theme="pink"
        />
      </div>

      {/* Main Section Content matching Canva Slide 2 */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 max-w-7xl mx-auto w-full py-6">
        <div className="relative max-w-5xl w-full flex items-center justify-center">
          <img
            src={aboutMainImg}
            alt="About Me - Bela Amelia Nuralfiani"
            className="w-full h-auto max-h-[75vh] object-contain drop-shadow-[0_15px_35px_rgba(180,60,90,0.25)]"
          />
        </div>
      </div>

      {/* Bottom Cream Footer Strip matching Canva Design */}
      <div className="relative z-20 w-full h-12 sm:h-16 md:h-20 bg-[#faf5f0] shadow-sm" />
    </section>
  );
};
export default AboutSection;
