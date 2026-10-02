import React from 'react';

import butterflyBlue from '../assets/education/butterfly.png';
import togaHat from '../assets/education/toga.png';
import smkLogo from '../assets/education/cijulang.jpeg';
import iwuLogo from '../assets/education/iwu.svg';
import collageLeft from '../assets/education/kiri.png';
import collageRight from '../assets/education/kanan.png';
import skillsBg from '../assets/skills/skills-bg.png';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative w-full min-h-[100dvh] lg:h-[100dvh] lg:max-h-[1080px] bg-[#F5F2EA] overflow-x-hidden overflow-y-auto lg:overflow-hidden select-none flex flex-col justify-between pt-12 sm:pt-16 md:pt-20"
    >
      {/* 1. Ornamen Kupu-Kupu Biru di Kiri Atas (Menembus Navbar & Belakang Judul) */}
      <div className="absolute left-0 sm:left-4 md:left-8 top-1 sm:top-2 md:top-4 w-20 xs:w-28 sm:w-40 md:w-56 pointer-events-none opacity-80 sm:opacity-85 z-10">
        <img
          src={butterflyBlue}
          alt="Butterfly Accent"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 2. TITLE SECTION "MY EDUCATION" DENGAN AKSEN TOPI TOGA */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-center lg:justify-start pt-1 sm:pt-3 md:pt-5 pb-1">
        <div className="relative inline-block text-center lg:text-left ml-0 lg:ml-8 xl:ml-14 translate-y-1 sm:translate-y-3 md:translate-y-5">
          <h2
            className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[86px] font-black text-[#F28FA4] tracking-tight uppercase leading-none"
            style={{
              textShadow: '0 3px 0 #ffffff, 0 6px 14px rgba(242, 143, 164, 0.35)',
            }}
          >
            MY EDUCATION
          </h2>

          {/* Topi Toga & Ijazah Melayang di Atas Kanan Teks "EDUCATION" */}
          <div className="absolute -top-8 xs:-top-10 sm:-top-16 md:-top-20 -right-4 xs:-right-6 sm:-right-12 md:-right-20 lg:-right-24 w-18 xs:w-24 sm:w-36 md:w-44 lg:w-52 pointer-events-none drop-shadow-xl z-30">
            <img
              src={togaHat}
              alt="Graduation Hat"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* 3. AREA UTAMA: KOLASE KIRI + BUKU BINDER + KOLASE KANAN */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10 py-2 sm:py-3 flex-1 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-2">
        
        {/* Kolase Scrapbook Kiri (Scout / SMK) */}
        <div className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] lg:w-[30%] xl:w-[32%] shrink-0 flex items-center justify-center drop-shadow-2xl lg:-mr-8 xl:-mr-10 z-10">
          <img
            src={collageLeft}
            alt="Scout and SMK Scrapbook"
            className="w-full h-auto object-contain pointer-events-none"
          />
        </div>

        {/* BUKU BINDER DUA HALAMAN DI TENGAH */}
        <div className="relative w-full max-w-sm xs:max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl lg:w-[42%] xl:w-[40%] shrink-0 bg-[#F07C9A] p-2 xs:p-2.5 sm:p-3.5 rounded-2xl sm:rounded-[32px] shadow-[0_12px_30px_rgba(240,124,154,0.3)] flex items-stretch z-20">
          
          {/* Cincin Spiral Binder di Tengah (11 Cincin Logam Biru) */}
          <div className="absolute left-1/2 top-2.5 bottom-2.5 -translate-x-1/2 flex flex-col justify-between py-1 sm:py-1.5 z-30 pointer-events-none">
            {Array.from({ length: 11 }).map((_, idx) => (
              <div
                key={idx}
                className="w-5 xs:w-6 sm:w-8 h-2.5 xs:h-3 sm:h-3.5 bg-gradient-to-r from-[#2060D9] via-[#4F8EF7] to-[#1546A6] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.35)] -ml-2.5 xs:-ml-3 sm:-ml-4 border border-white/60"
              />
            ))}
          </div>

          {/* Halaman Kiri (SMK Negeri 1 Cijulang) */}
          <div className="flex-1 bg-white rounded-l-xl sm:rounded-l-2xl p-2.5 xs:p-3.5 sm:p-5 md:p-6 pr-3.5 xs:pr-4 sm:pr-6 md:pr-7 flex flex-col items-center justify-between text-center border-r border-neutral-200">
            {/* Logo SMK */}
            <div className="w-12 xs:w-14 sm:w-20 md:w-24 h-12 xs:h-14 sm:h-20 md:h-24 flex items-center justify-center mb-1 sm:mb-1.5">
              <img
                src={smkLogo}
                alt="Logo SMKN 1 Cijulang"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Keterangan Sekolah */}
            <div className="flex flex-col items-center">
              <h3 className="font-extrabold text-neutral-900 text-[11px] xs:text-xs sm:text-base md:text-lg leading-tight mb-0.5 sm:mb-1">
                SMK Negeri 1 Cijulang
              </h3>
              <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-semibold text-neutral-800 leading-snug">
                Teknik Komputer & Jaringan
              </p>
              <p className="text-[8px] xs:text-[9px] sm:text-[11px] md:text-xs font-medium text-neutral-600 mt-0.5">
                Nilai Rata-Rata : 83,23
              </p>
            </div>

            {/* Tahun Pendidikan */}
            <div className="mt-2 sm:mt-3 pt-0.5">
              <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-extrabold text-neutral-900 tracking-wider">
                2019 - 2022
              </span>
            </div>
          </div>

          {/* Halaman Kanan (International Women University) */}
          <div className="flex-1 bg-white rounded-r-xl sm:rounded-r-2xl p-2.5 xs:p-3.5 sm:p-5 md:p-6 pl-3.5 xs:pr-4 sm:pl-6 md:pl-7 flex flex-col items-center justify-between text-center">
            {/* Logo IWU */}
            <div className="w-12 xs:w-14 sm:w-20 md:w-24 h-12 xs:h-14 sm:h-20 md:h-24 flex items-center justify-center mb-1 sm:mb-1.5">
              <img
                src={iwuLogo}
                alt="Logo IWU"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Keterangan Universitas */}
            <div className="flex flex-col items-center">
              <h3 className="font-extrabold text-neutral-900 text-[11px] xs:text-xs sm:text-base md:text-lg leading-tight mb-0.5 sm:mb-1">
                International Women University
              </h3>
              <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-semibold text-neutral-800 leading-snug">
                Program Studi Fisika
              </p>
              <p className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs font-semibold text-neutral-600">
                Fakultas Sains dan Teknologi
              </p>
              <p className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs font-bold text-neutral-800 mt-0.5">
                IPK : 3,89/4.00
              </p>
            </div>

            {/* Tahun Pendidikan */}
            <div className="mt-2 sm:mt-3 pt-0.5">
              <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-extrabold text-neutral-900 tracking-wider">
                2023 - Sekarang
              </span>
            </div>
          </div>
        </div>

        {/* Kolase Scrapbook Kanan (Kuliah IWU & Seminar) */}
        <div className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] lg:w-[30%] xl:w-[32%] shrink-0 flex items-center justify-center drop-shadow-2xl lg:-ml-8 xl:-ml-10 z-10">
          <img
            src={collageRight}
            alt="University Life Scrapbook"
            className="w-full h-auto object-contain pointer-events-none"
          />
        </div>

      </div>

      {/* 4. STRIP DASAR TRANSISI SKILLS */}
      <div
        className="w-full h-10 sm:h-14 md:h-20 bg-cover bg-top bg-no-repeat relative z-20 shrink-0"
        style={{ backgroundImage: `url(${skillsBg})` }}
      />
    </section>
  );
};

export default Education;