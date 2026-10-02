import React, { useState } from 'react';
import skillsMainImg from '../assets/skills/skills-main-2x.png';
import type { PageId } from '../types';

interface SkillSectionProps {
  onNavigate?: (page: PageId) => void;
  activePage?: PageId;
}

export const SkillSection: React.FC<SkillSectionProps> = ({ onNavigate }) => {
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
    if (q.includes('home')) handleNavClick('home');
    else if (q.includes('about')) handleNavClick('about');
    else if (q.includes('work')) handleNavClick('works');
    else if (q.includes('contact')) handleNavClick('contact');
  };

  return (
    <section
      id="skills"
      className="relative w-full bg-[#1c78eb] select-none flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-full max-w-[1920px] aspect-[16/9] mx-auto shadow-2xl overflow-hidden">
        <img
          src={skillsMainImg}
          alt="Skills & Toolset - Bela Amelia Nuralfiani"
          className="w-full h-full object-cover select-none pointer-events-none"
          loading="lazy"
        />

        {/* Interactive Navigation Hotspots */}
        <div className="absolute inset-0 pointer-events-auto">
          <div className="absolute top-[6.5%] left-[6.2%] flex items-center space-x-[3.6vw] md:space-x-[4.1vw]">
            <button
              onClick={() => handleNavClick('home')}
              title="Home"
              aria-label="Home"
              className="cursor-pointer rounded-lg hover:bg-yellow-400/20 active:scale-95 transition-all"
              style={{ width: '5.2vw', height: '3.2vw' }}
            />
            <button
              onClick={() => handleNavClick('about')}
              title="About Me"
              aria-label="About Me"
              className="cursor-pointer rounded-lg hover:bg-yellow-400/20 active:scale-95 transition-all"
              style={{ width: '8.4vw', height: '3.2vw' }}
            />
            <button
              onClick={() => handleNavClick('works')}
              title="Works"
              aria-label="Works"
              className="cursor-pointer rounded-lg hover:bg-yellow-400/20 active:scale-95 transition-all"
              style={{ width: '6.4vw', height: '3.2vw' }}
            />
            <button
              onClick={() => handleNavClick('contact')}
              title="Contact"
              aria-label="Contact"
              className="cursor-pointer rounded-lg hover:bg-yellow-400/20 active:scale-95 transition-all"
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
              className="w-full h-full bg-transparent text-white text-[0.9vw] font-semibold px-[1.2vw] outline-none placeholder-transparent focus:placeholder-white/60"
            />
            <button
              type="submit"
              title="Search"
              className="cursor-pointer h-full aspect-square rounded-full flex items-center justify-center opacity-0 hover:opacity-20 bg-white"
            />
          </form>
        </div>

        <h2 className="sr-only">Skills & Toolset - Bela Amelia Nuralfiani</h2>
        <p className="sr-only">
          Soft Skills: Time Work, Creativity, Critical Thinking, Time Management. Languages: Indonesia, English, Korea. Software: Google Workspace, Canva, Figma, AutoCAD, Fusion 360, Tinkercad, MATLAB, CX-One, Cimon.
        </p>
      </div>
    </section>
  );
};

export default SkillSection;
