import React from 'react';

import contactNote from '../assets/contact/contact.png';
import framePhoto from '../assets/contact/foto.png';
import lensFlare from '../assets/about/baloon.png';

export const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative w-full min-h-[620px] lg:min-h-[720px] bg-[#F28DA2] overflow-hidden select-none flex flex-col justify-between"
    >
      {/* 1. LENS FLARE / LIGHT SPARKLE DI KIRI ATAS */}
      <div className="absolute -left-4 sm:left-12 top-6 sm:top-10 w-44 sm:w-64 pointer-events-none mix-blend-screen opacity-90 z-20">
        <img
          src={lensFlare}
          alt="Lens Flare Accent"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 2. MAIN FOOTER CONTENT AREA */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-10 sm:py-16 flex-1 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
        
        {/* Kolom Kiri: Judul "Let's Work!" + Memo Kontak */}
        <div className="flex-1 flex flex-col items-center lg:items-start w-full max-w-xl">
          
          {/* Brush Title "Let's Work!" */}
          <div className="mb-4 sm:mb-6 pl-2 sm:pl-6 text-center lg:text-left w-full">
            <h2
              className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight italic"
              style={{
                fontFamily: "'Caveat', 'Brush Script MT', cursive",
                textShadow: '0 4px 12px rgba(166, 25, 55, 0.25)',
              }}
            >
              Let's Work!
            </h2>
          </div>

          {/* Kertas Memo Kontak Interaktif */}
          <div className="relative w-full max-w-[440px] sm:max-w-[480px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.14)]">
            <img
              src={contactNote}
              alt="Contact Details Notepad"
              className="w-full h-auto object-contain pointer-events-none"
            />

            {/* Clickable Overlay Links tepat di atas baris info kontak */}
            <div className="absolute inset-0 flex flex-col justify-center pl-[28%] pr-[8%] pt-[14%] gap-4 sm:gap-6">
              {/* Email Link */}
              <a
                href="mailto:Belaamelianuralfiani@gmail.com"
                className="h-8 sm:h-10 flex items-center hover:opacity-75 transition-opacity"
                aria-label="Email Bela Amelia Nuralfiani"
              />

              {/* LinkedIn Link */}
              <a
                href="https://linkedin.com/in/belaamelianuralfiani"
                target="_blank"
                rel="noreferrer"
                className="h-8 sm:h-10 flex items-center hover:opacity-75 transition-opacity"
                aria-label="LinkedIn Bela Amelia Nuralfiani"
              />

              {/* WhatsApp Link */}
              <a
                href="https://wa.me/6285793716403"
                target="_blank"
                rel="noreferrer"
                className="h-8 sm:h-10 flex items-center hover:opacity-75 transition-opacity"
                aria-label="WhatsApp Bela Amelia Nuralfiani"
              />
            </div>
          </div>

        </div>

        {/* Kolom Kanan: Bingkai Foto Retro Bela */}
        <div className="w-[300px] sm:w-[380px] md:w-[440px] shrink-0 flex items-center justify-center drop-shadow-[0_16px_36px_rgba(0,0,0,0.2)]">
          <img
            src={framePhoto}
            alt="Bela Amelia Nuralfiani Portrait Frame"
            className="w-full h-auto object-contain pointer-events-none"
          />
        </div>

      </div>

      {/* 3. STRIP BIRU DI BAGIAN DASAR HALAMAN */}
      <div className="w-full h-14 sm:h-20 md:h-24 bg-[#1F74E0] relative z-20" />
    </footer>
  );
};

export default Footer;