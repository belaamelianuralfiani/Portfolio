import React from 'react';

import butterfly from '../assets/career/butterfly.png';
import starsLeft from '../assets/career/bintang-kiri.png';
import starsRight from '../assets/career/bintang-kanan.png';

export const Career: React.FC = () => {
  const organizations = [
    'HIMA Fisika',
    'UKM Tim Redaksi',
    'Staf Muda BEM IWU',
  ];

  return (
    <section
      id="organization"
      className="relative w-full min-h-screen bg-[#F08DA1] overflow-hidden select-none flex flex-col justify-between"
    >

      {/* 2. HERO KUPU-KUPU SIMETRIS DI KIRI & KANAN */}
      <div className="hidden lg:block absolute left-2 xl:left-8 top-1/2 -translate-y-1/2 w-60 xl:w-72 pointer-events-none drop-shadow-2xl z-10">
        <img
          src={butterfly}
          alt="Butterfly Left"
          className="w-full h-auto -scale-x-100 rotate-[-6deg] filter brightness-105"
        />
      </div>

      <div className="hidden lg:block absolute right-2 xl:right-8 top-1/2 -translate-y-1/2 w-60 xl:w-72 pointer-events-none drop-shadow-2xl z-10">
        <img
          src={butterfly}
          alt="Butterfly Right"
          className="w-full h-auto rotate-[6deg] filter brightness-105"
        />
      </div>

      {/* 3. MAIN CONTENT: DUAL TITLE & PILL BUTTONS */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 flex-1 flex flex-col items-center justify-center py-8">
        
        {/* Judul Bersusun: "Technical" (Kuning Muda Kursif) & "Project" (Putih Brush Tebal) */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center text-center mb-10 sm:mb-14">
          <span
            className="text-[#FFF2A3] text-5xl sm:text-7xl md:text-[92px] lg:text-[113px] font-bold tracking-wide sm:-mr-6 sm:-mt-10 md:-mt-14 z-10 whitespace-nowrap"
            style={{
              fontFamily: "'Selima', 'Caveat', cursive",
              transform: 'rotate(-8deg)',
              textShadow: '0 2px 6px rgba(0,0,0,0.15)',
              lineHeight: '1',
            }}
          >
            Technical
          </span>

          <h2
            className="text-white text-6xl xs:text-7xl sm:text-9xl md:text-[180px] lg:text-[220px] xl:text-[267px] font-normal tracking-wide whitespace-nowrap"
            style={{
              fontFamily: "'Selima', 'Caveat', cursive",
              textShadow: '0 4px 14px rgba(0,0,0,0.18)',
              lineHeight: '0.85',
            }}
          >
            Project
          </h2>
        </div>

        {/* Baris Tengah: Bintang Jelly Kiri + 3 Pills Button + Bintang Kanan */}
        <div className="w-full flex items-center justify-center gap-4 sm:gap-8 md:gap-12">
          
          {/* 3 Bintang Kristal/Kaca Jelly di Kiri */}
          <div className="w-20 sm:w-28 md:w-36 shrink-0 drop-shadow-lg pointer-events-none">
            <img
              src={starsLeft}
              alt="Pink Jelly Crystal Stars"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* 3 Tombol Pill Putih Glossy Berisi Organisasi */}
          <div className="flex flex-col items-center gap-3.5 sm:gap-4 w-full max-w-[260px] sm:max-w-[320px]">
            {organizations.map((org, index) => (
              <div
                key={index}
                className="w-full py-2.5 sm:py-3 px-6 bg-gradient-to-b from-[#FFFFFF] to-[#E9F0FA] rounded-full shadow-[0_6px_14px_rgba(0,0,0,0.12)] border border-white/80 text-center transition-all hover:scale-105 cursor-default"
              >
                <span className="text-[#8E1730] font-extrabold text-xs sm:text-sm md:text-base tracking-wide">
                  {org}
                </span>
              </div>
            ))}
          </div>

          {/* 3 Bintang Sparkle Holografis di Kanan */}
          <div className="w-20 sm:w-28 md:w-36 shrink-0 drop-shadow-lg pointer-events-none">
            <img
              src={starsRight}
              alt="Holographic Sparkle Stars"
              className="w-full h-auto object-contain"
            />
          </div>

        </div>

      </div>

      {/* 4. STRIP DASAR (Transisi ke Section Works) */}
      <div className="w-full h-12 sm:h-16 md:h-20 bg-[#F6BC84] relative z-20 shrink-0" />
    </section>
  );
};

export default Career;