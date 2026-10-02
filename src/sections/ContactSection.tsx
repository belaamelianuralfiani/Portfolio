import React, { useState } from 'react';
import contactImg from '../assets/works/works-certificate-2x.png';
import type { PageId } from '../types';

interface ContactSectionProps {
  onNavigate?: (page: PageId) => void;
  activePage?: PageId;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
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
    else if (q.includes('skill')) handleNavClick('skills');
    else if (q.includes('work')) handleNavClick('works');
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#faf5f0] select-none flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-full max-w-[1920px] aspect-[16/9] mx-auto shadow-2xl overflow-hidden">
        <img
          src={contactImg}
          alt="Contact & Certificate - Bela Amelia Nuralfiani"
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
              className="cursor-pointer rounded-lg hover:bg-black/10 active:scale-95 transition-all"
              style={{ width: '5.2vw', height: '3.2vw' }}
            />
            <button
              onClick={() => handleNavClick('about')}
              title="About Me"
              aria-label="About Me"
              className="cursor-pointer rounded-lg hover:bg-black/10 active:scale-95 transition-all"
              style={{ width: '8.4vw', height: '3.2vw' }}
            />
            <button
              onClick={() => handleNavClick('works')}
              title="Works"
              aria-label="Works"
              className="cursor-pointer rounded-lg hover:bg-black/10 active:scale-95 transition-all"
              style={{ width: '6.4vw', height: '3.2vw' }}
            />
            <button
              onClick={() => handleNavClick('contact')}
              title="Contact"
              aria-label="Contact"
              className="cursor-pointer rounded-lg hover:bg-black/10 active:scale-95 transition-all"
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
              className="w-full h-full bg-transparent text-gray-900 text-[0.9vw] font-semibold px-[1.2vw] outline-none placeholder-transparent focus:placeholder-gray-500"
            />
            <button
              type="submit"
              title="Search"
              className="cursor-pointer h-full aspect-square rounded-full flex items-center justify-center opacity-0 hover:opacity-20 bg-black"
            />
          </form>

          {/* Clickable Social Media Links positioned over the contact box */}
          <div className="absolute top-[28%] right-[8%] flex flex-col space-y-[4.5vw]" style={{ width: '22vw' }}>
            {/* Social Media Link */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="block cursor-pointer rounded-lg hover:bg-pink-500/10 transition-colors"
              style={{ height: '3.5vw' }}
              title="Visit Social Media"
            />
            {/* Website Link */}
            <a
              href="https://bela-portfolio.app"
              target="_blank"
              rel="noreferrer"
              className="block cursor-pointer rounded-lg hover:bg-pink-500/10 transition-colors"
              style={{ height: '3.5vw' }}
              title="Visit Website"
            />
            {/* Email Link */}
            <a
              href="mailto:belaamelianuralfiani@gmail.com"
              className="block cursor-pointer rounded-lg hover:bg-pink-500/10 transition-colors"
              style={{ height: '3.5vw' }}
              title="Send Email"
            />
          </div>
        </div>

        <h2 className="sr-only">Contact & Certificate - Bela Amelia Nuralfiani</h2>
      </div>
    </section>
  );
};

export default ContactSection;
