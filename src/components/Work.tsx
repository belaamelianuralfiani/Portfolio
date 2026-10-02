import React from 'react';

import butterfly from '../assets/works/butterfly.png';
import jellyStars from '../assets/works/bintang.png';

export const Works: React.FC = () => {
  const projectCategories = [
    { title: 'Illustration Folio', link: '#illustration' },
    { title: 'Cosmetic Project', link: '#cosmetic' },
    { title: 'Shirt Designs', link: '#shirts' },
  ];

  return (
    <section
      id="works"
      className="relative w-full min-h-screen bg-[#F6BC84] overflow-hidden select-none flex flex-col justify-between"
    >

      {/* 2. KUPU-KUPU DENGAN EFEK BLUR HALUS DI BACKGROUND */}
      {/* Kupu-kupu Kiri (Flip Horizontal + Blur) */}
      <div className="hidden lg:block absolute -left-8 xl:left-4 top-1/2 -translate-y-1/2 w-72 xl:w-84 pointer-events-none z-10 filter blur-[1.5px] opacity-90 drop-shadow-xl">
        <img
          src={butterfly}
          alt="Blurred Butterfly Left"
          className="w-full h-auto -scale-x-100 rotate-[-12deg]"
        />
      </div>

      {/* Kupu-kupu Kanan (+ Blur) */}
      <div className="hidden lg:block absolute -right-8 xl:right-4 top-1/2 -translate-y-1/2 w-72 xl:w-84 pointer-events-none z-10 filter blur-[1.5px] opacity-90 drop-shadow-xl">
        <img
          src={butterfly}
          alt="Blurred Butterfly Right"
          className="w-full h-auto rotate-[12deg]"
        />
      </div>

      {/* 3. MAIN WORKS CONTENT */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 flex-1 flex flex-col items-center justify-center py-6 sm:py-10">
        
        {/* Brush Title "My Works" */}
        <div className="relative text-center mb-8 sm:mb-12">
          <h2
            className="text-white text-7xl sm:text-9xl md:text-[11rem] font-bold tracking-tight italic"
            style={{
              fontFamily: "'Caveat', 'Brush Script MT', cursive",
              textShadow: '0 4px 14px rgba(162, 38, 18, 0.16)',
            }}
          >
            My Works
          </h2>
        </div>

        {/* Baris Kategori: Bintang Kiri + 3 Pills + Bintang Kanan */}
        <div className="w-full flex items-center justify-center gap-4 sm:gap-8 md:gap-12">
          
          {/* Bintang Jelly Kiri */}
          <div className="w-20 sm:w-28 md:w-36 shrink-0 drop-shadow-lg pointer-events-none">
            <img
              src={jellyStars}
              alt="Pink Jelly Stars Left"
              className="w-full h-auto object-contain -rotate-6"
            />
          </div>

          {/* 3 Pill Button Kategori Proyek */}
          <div className="flex flex-col items-center gap-3.5 sm:gap-4 w-full max-w-[260px] sm:max-w-[320px]">
            {projectCategories.map((cat, idx) => (
              <a
                key={idx}
                href={cat.link}
                className="w-full py-2.5 sm:py-3.5 px-6 bg-gradient-to-b from-[#FFFFFF] to-[#EAF1FA] rounded-full shadow-[0_6px_14px_rgba(0,0,0,0.12)] border border-white/80 text-center transition-all duration-200 hover:scale-105 active:scale-95 block"
              >
                <span className="text-[#8E1730] font-extrabold text-xs sm:text-sm md:text-base tracking-wide">
                  {cat.title}
                </span>
              </a>
            ))}
          </div>

          {/* Bintang Jelly Kanan (Flip Horizontal) */}
          <div className="w-20 sm:w-28 md:w-36 shrink-0 drop-shadow-lg pointer-events-none">
            <img
              src={jellyStars}
              alt="Pink Jelly Stars Right"
              className="w-full h-auto object-contain -scale-x-100 rotate-6"
            />
          </div>

        </div>

      </div>

      {/* 4. STRIP PITA PINK DI BAGIAN DASAR (MATCH FOOTER) */}
      <div className="w-full h-14 sm:h-20 md:h-24 bg-[#F28DA2] relative z-20" />
    </section>
  );
};

export default Works;