import React from 'react';

import skillsBg from '../assets/skills/skills-bg.png';
import skillsNotebook from '../assets/skills/skills.png';
import butterfly from '../assets/skills/butterfly.png';
import cloudPink from '../assets/skills/awan.png';
import crystalBranch from '../assets/skills/branch.png';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full min-h-[100dvh] lg:h-[100dvh] lg:max-h-[1080px] overflow-hidden select-none bg-cover bg-center bg-no-repeat flex flex-col justify-between pt-12 sm:pt-16 md:pt-20"
      style={{ backgroundImage: `url(${skillsBg})` }}
    >
      {/* 2. HEADER TITLE: "SKILLS & TOOLSET" */}
      <div className="relative z-20 w-full text-center px-4 pt-1 sm:pt-3 md:pt-4 pb-1 sm:pb-2">
        <h2
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-none"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            textShadow:
              '0 3px 0 #1A4EB8, 0 6px 0 #123B91, 0 10px 16px rgba(0,0,0,0.28)',
          }}
        >
          SKILLS & TOOLSET
        </h2>
      </div>

      {/* 3. MAIN WORKSPACE AREA: ORNAMEN & BUKU CATATAN */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex-1 flex items-center justify-center py-2 sm:py-4 md:py-6">
        
        {/* Kupu-kupu 3D Kiri Atas Notebook */}
        <div className="block absolute left-1 sm:left-4 lg:left-6 xl:left-12 top-4 sm:top-8 lg:top-12 w-20 xs:w-28 sm:w-40 md:w-52 lg:w-60 pointer-events-none drop-shadow-2xl z-30 opacity-60 sm:opacity-90 md:opacity-100 transition-all">
          <img
            src={butterfly}
            alt="Butterfly Accent"
            className="w-full h-auto object-contain -rotate-12 filter brightness-105"
          />
        </div>

        {/* Ranting Daun Kristal Holografis Kiri Bawah */}
        <div className="hidden sm:block absolute left-0 sm:left-2 lg:left-8 bottom-0 w-24 sm:w-36 md:w-48 lg:w-56 pointer-events-none drop-shadow-xl z-30">
          <img
            src={crystalBranch}
            alt="Crystal Branch Accent"
            className="w-full h-auto object-contain rotate-[-15deg]"
          />
        </div>

        {/* Notebook Spiral Pink di Bagian Tengah */}
        <div className="relative w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[620px] md:max-w-[760px] lg:max-w-[880px] xl:max-w-[960px] drop-shadow-[0_16px_32px_rgba(0,0,0,0.25)] z-20 flex items-center justify-center px-2 sm:px-4">
          <img
            src={skillsNotebook}
            alt="Skills and Toolset Notebook"
            className="w-full max-h-[58vh] sm:max-h-[64vh] md:max-h-[68vh] object-contain mx-auto"
          />
        </div>

        {/* Awan Balon Pink 3D Kanan Bawah */}
        <div className="hidden sm:block absolute -right-4 sm:-right-6 lg:right-2 xl:right-10 bottom-0 w-36 sm:w-52 md:w-64 lg:w-80 pointer-events-none drop-shadow-2xl z-30">
          <img
            src={cloudPink}
            alt="3D Pink Cloud"
            className="w-full h-auto object-contain rotate-6"
          />
        </div>

      </div>

      {/* 4. STRIP PINK DI BAGIAN DASAR (Transisi Section) */}
      <div className="w-full h-8 sm:h-12 md:h-16 lg:h-20 bg-[#F08DA1] relative z-20 shrink-0" />
    </section>
  );
};

export default Skills;