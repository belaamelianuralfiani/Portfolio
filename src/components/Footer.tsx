import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { contact } = PORTFOLIO_DATA;

  return (
    <footer id="contact" className="mt-20 border-t border-neutral-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-[#111827] text-white rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center">
          <span className="text-xs uppercase font-bold tracking-widest text-[#FFD166] mb-3">
            Mulai Kolaborasi
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold max-w-xl leading-tight mb-6">
            Punya ide proyek menarik? Mari kita wujudkan bersama.
          </h2>
          <a
            href={`mailto:${contact.email}`}
            className="bg-[#FF6B35] hover:bg-[#ff5517] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all shadow-md active:scale-95"
          >
            Kirim Pesan ke Bela
          </a>

          <div className="flex flex-wrap justify-center gap-6 mt-10 text-xs sm:text-sm font-medium text-neutral-400">
            <a href={contact.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href={contact.dribbble} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Dribbble</a>
            <a href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 Bela Creative Portfolio. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React & Tailwind CSS v4
          </p>
        </div>
      </div>
    </footer>
  );
};