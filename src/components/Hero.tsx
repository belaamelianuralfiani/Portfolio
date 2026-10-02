import React from 'react';

import portfolioText from '../assets/hero/portfolio.png';
import butterfly from '../assets/hero/butterfly.png';
import year2026 from '../assets/hero/2026.png';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full flex-1 flex flex-col justify-between min-h-0 overflow-hidden">
      {/* Center Visual Canvas Area */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex-1 flex items-center justify-center min-h-0 py-1 sm:py-2 md:py-4">
        
        {/* Kupu-kupu Kiri (Flip Horizontal) */}
        <div className="block absolute -left-4 sm:-left-6 md:-left-10 lg:-left-8 xl:-left-4 top-1/2 -translate-y-1/2 w-20 xs:w-28 sm:w-36 md:w-48 lg:w-60 xl:w-72 pointer-events-none drop-shadow-2xl z-10 transition-all opacity-40 sm:opacity-75 md:opacity-100">
          <img
            src={butterfly}
            alt="Butterfly Left"
            className="w-full h-auto -scale-x-100 rotate-[22deg] filter brightness-105"
          />
        </div>

        {/* Kupu-kupu Kanan */}
        <div className="block absolute -right-4 sm:-right-6 md:-right-10 lg:-right-8 xl:-right-4 top-1/2 -translate-y-1/2 w-20 xs:w-28 sm:w-36 md:w-48 lg:w-60 xl:w-72 pointer-events-none drop-shadow-2xl z-10 transition-all opacity-40 sm:opacity-75 md:opacity-100">
          <img
            src={butterfly}
            alt="Butterfly Right"
            className="w-full h-auto rotate-[-22deg] filter brightness-105"
          />
        </div>

        {/* 3D Title + Bintang + Nama Kursif + Tahun 2026 */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-full px-2">
          
          {/* Main 3D PORTFOLIO Title with Stars */}
          <div className="relative w-[280px] sm:w-[500px] md:w-[680px] lg:w-[840px] xl:w-[980px] 2xl:w-[1060px] max-w-[94vw] drop-shadow-[0_12px_28px_rgba(0,0,0,0.24)]">
            <img
              src={portfolioText}
              alt="PORTFOLIO"
              className="w-full max-h-[26vh] sm:max-h-[34vh] md:max-h-[42vh] lg:max-h-[50vh] object-contain mx-auto"
            />
          </div>

          {/* Subtitle Name & 2026 */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-3 md:gap-4 mt-[-8px] sm:mt-[-16px] md:mt-[-26px] lg:mt-[-36px] relative z-30">
            <span
              className="font-bold tracking-wide drop-shadow-[0_3px_6px_rgba(0,0,0,0.35)] text-xl sm:text-3xl md:text-[38px] lg:text-[44px] whitespace-nowrap"
              style={{
                fontFamily: "'Selima', 'Caveat', cursive",
                color: '#f6f3ee',
                transform: 'rotate(-2deg)',
                lineHeight: '1.1',
              }}
            >
              Bela Amelia Nuralfiani
            </span>

            <div className="w-12 sm:w-20 md:w-28 lg:w-36 drop-shadow-[0_6px_12px_rgba(0,0,0,0.25)] shrink-0">
              <img
                src={year2026}
                alt="2026"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Tagline & Pita Pink Bawah */}
      <div className="relative z-20 w-full flex flex-col items-center shrink-0">
        <div className="w-full py-1.5 sm:py-2.5 md:py-3.5 text-center px-3 sm:px-4">
          <p
            className="text-white font-black text-[8px] sm:text-xs md:text-sm tracking-[0.12em] sm:tracking-[0.2em] md:tracking-[0.25em] uppercase drop-shadow-sm leading-snug"
            style={{
              fontFamily: "'Gotham', 'Gotham Bold', 'Gotham-Bold', 'Montserrat', 'Plus Jakarta Sans', sans-serif",
            }}
          >
            PHYSICS STUDENT | IOT & ROBOTICS ENTHUSIAST | LEADERSHIP & MANAGEMENT
          </p>
        </div>

        {/* Ribbon Bar Bawah (Pink Section Divider) */}
        <div className="w-full h-8 sm:h-12 md:h-16 lg:h-20 bg-[#F28FA4]" />
      </div>
    </div>
  );
};

export default Hero;