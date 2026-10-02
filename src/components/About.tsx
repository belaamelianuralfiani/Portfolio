import React from 'react';

import profileImg from '../assets/about/profile.png';
import imBelaTitle from '../assets/about/imbela.png';
import lensFlare from '../assets/about/baloon.png';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#F08DA1] overflow-hidden select-none flex flex-col justify-between"
    >
      {/* 2. LENS FLARE / SPARKLE ACCENTS */}
      {/* Flare Kiri Atas Foto */}
      <div className="absolute left-6 sm:left-24 top-24 sm:top-28 w-44 sm:w-60 pointer-events-none mix-blend-screen opacity-90 z-20">
        <img src={lensFlare} alt="" className="w-full h-auto" />
      </div>

      {/* Flare Kanan Atas Konten */}
      <div className="absolute right-6 sm:right-16 top-20 sm:top-28 w-48 sm:w-72 pointer-events-none mix-blend-screen opacity-90 z-10">
        <img src={lensFlare} alt="" className="w-full h-auto" />
      </div>

      {/* 3. KONTEN UTAMA ABOUT */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-8 sm:py-12 flex-1 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
        
        {/* Kolom Kiri: Foto Profil Berbingkai 3D */}
        <div className="relative w-[310px] sm:w-[390px] md:w-[450px] lg:w-[480px] xl:w-[510px] max-w-[90vw] shrink-0 flex items-center justify-center">
          <img
            src={profileImg}
            alt="Bela Amelia Nuralfiani Profile"
            className="w-full h-auto object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.2)]"
          />
        </div>

        {/* Kolom Kanan: Judul & Bio */}
        <div className="flex-1 max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* Brush Title "Hi, I'm Bela!" */}
          <div className="w-[300px] sm:w-[420px] md:w-[480px] mb-6">
            <img
              src={imBelaTitle}
              alt="Hi, I'm Bela!"
              className="w-full h-auto object-contain drop-shadow-md"
            />
          </div>

          {/* Deskripsi */}
          <p
            className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-semibold mb-8 max-w-xl text-center"
            style={{
              fontFamily: "'Gotham', 'Plus Jakarta Sans', sans-serif",
            }}
          >
            I’m a passionate Graphic Artist, who loves vibrant colors just as my name! 
            I embody the skillset of someone who will make colorful projects one at a time. 
            I enjoy creating and designing shirts the most! But I also do illustrations. 
            Let’s work and have fun!
          </p>

          {/* My Skills */}
          <div className="w-full flex flex-col items-center">
            <h3
              className="text-white font-black text-xl sm:text-2xl tracking-wider uppercase mb-3"
              style={{
                fontFamily: "'Gotham', 'Gotham Bold', 'Gotham-Bold', 'Montserrat', 'Plus Jakarta Sans', sans-serif",
              }}
            >
              MY SKILLS
            </h3>
            <p
              className="text-white/95 text-xs sm:text-sm md:text-base font-semibold leading-relaxed max-w-md text-center"
              style={{
                fontFamily: "'Gotham', 'Gotham-Medium', 'Montserrat', 'Plus Jakarta Sans', sans-serif",
              }}
            >
              graphic design, digital illustration, web design, shirt layout, 3D design, video editing
            </p>
          </div>

        </div>
      </div>

      {/* 4. STRIP KREM BAWAH */}
      <div className="w-full h-12 sm:h-16 md:h-20 bg-[#F5F2EA] relative z-20" />
    </section>
  );
};

export default About;