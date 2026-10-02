import React, { useState, useEffect } from 'react';

type SectionName = 'home' | 'about' | 'education' | 'skills' | 'organization' | 'works' | 'contact';

export const Navbar: React.FC = () => {
  const [search, setSearch] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionName>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections: SectionName[] = ['home', 'about', 'education', 'skills', 'organization', 'works', 'contact'];
      const scrollPosition = window.scrollY + 140;

      // If scrolled near the bottom of the page, activate contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection('contact');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isAbout = activeSection === 'about' || activeSection === 'organization';
  const isEducation = activeSection === 'education';
  const isSkills = activeSection === 'skills';
  const isWorks = activeSection === 'works';
  const isContact = activeSection === 'contact';
  const isHome = activeSection === 'home';

  // Helper untuk mendapatkan class link navigasi sesuai section yang aktif
  const getLinkClasses = (linkName: 'HOME' | 'ABOUT ME' | 'WORKS' | 'CONTACT') => {
    const isLinkActive =
      (linkName === 'HOME' && activeSection === 'home') ||
      (linkName === 'ABOUT ME' && (activeSection === 'about' || activeSection === 'education' || activeSection === 'skills' || activeSection === 'organization')) ||
      (linkName === 'WORKS' && activeSection === 'works') ||
      (linkName === 'CONTACT' && activeSection === 'contact');

    const baseClasses = 'font-black text-xs sm:text-sm md:text-base tracking-[0.14em] sm:tracking-[0.18em] transition-all hover:scale-105';

    if (isContact) {
      return `${baseClasses} ${isLinkActive ? 'text-[#b22d27]' : 'text-white hover:text-[#b22d27]'}`;
    }

    if (isWorks) {
      return `${baseClasses} ${isLinkActive ? 'text-[#b22d27]' : 'text-[#e9728d] hover:text-[#b22d27]'}`;
    }

    if (isSkills) {
      return `${baseClasses} ${isLinkActive ? 'text-[#fcc990]' : 'text-white hover:text-[#fcc990]'}`;
    }

    if (isEducation) {
      return `${baseClasses} ${isLinkActive ? 'text-[#f095ae]' : 'text-[#0163cb] hover:text-[#f095ae]'}`;
    }

    if (isAbout) {
      return `${baseClasses} ${isLinkActive ? 'text-[#b22d27]' : 'text-white hover:text-[#b22d27]'}`;
    }

    return `${baseClasses} ${isLinkActive ? 'text-[#FFDD55]' : 'text-white hover:text-[#FFDD55]'}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 px-4 sm:px-10 lg:px-20 ${
        isContact
          ? 'bg-[#F28DA2] shadow-md py-2.5 sm:py-3.5'
          : isHome || isAbout || isEducation || isSkills || isWorks
          ? 'bg-transparent pt-3 sm:pt-6 md:pt-8 pb-1 sm:pb-2'
          : isScrolled
          ? 'bg-[#0d2864]/90 backdrop-blur-md shadow-lg py-2.5 sm:py-3.5 border-b border-white/10'
          : 'bg-transparent pt-3 sm:pt-6 md:pt-8 pb-1 sm:pb-2'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-5 md:gap-6">
        {/* Navigation Links */}
        <nav className="flex items-center gap-4 xs:gap-6 sm:gap-10 md:gap-14 flex-wrap justify-center">
          <a
            href="#home"
            onClick={() => setActiveSection('home')}
            className={getLinkClasses('HOME')}
          >
            HOME
          </a>
          <a
            href="#about"
            onClick={() => setActiveSection('about')}
            className={getLinkClasses('ABOUT ME')}
          >
            ABOUT ME
          </a>
          <a
            href="#works"
            onClick={() => setActiveSection('works')}
            className={getLinkClasses('WORKS')}
          >
            WORKS
          </a>
          <a
            href="#contact"
            onClick={() => setActiveSection('contact')}
            className={getLinkClasses('CONTACT')}
          >
            CONTACT
          </a>
        </nav>

        {/* Pill Search Bar dengan Style Dinamis Sesuai Section */}
        <div className="relative w-64 sm:w-80">
          <div
            className={`flex items-center w-full h-8 sm:h-9 rounded-full border-2 px-3 transition-colors ${
              isContact || isWorks || isAbout
                ? 'bg-transparent border-[#b22d27]'
                : isSkills
                ? 'bg-transparent border-[#fcc990]'
                : isEducation
                ? 'bg-transparent border-[#0163cb]'
                : 'bg-[#1F62DC]/60 border-[#E7BA58] shadow-inner'
            }`}
          >
            <input
              type="text"
              value={search}
              placeholder={isContact || isWorks || isSkills || isEducation || isAbout ? 'Search...' : ''}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full bg-transparent text-xs sm:text-sm focus:outline-hidden pr-8 ${
                isContact || isWorks || isAbout
                  ? 'text-[#b22d27] placeholder-[#b22d27]/60'
                  : isSkills
                  ? 'text-[#fcc990] placeholder-[#fcc990]/60'
                  : isEducation
                  ? 'text-[#0163cb] placeholder-[#0163cb]/60'
                  : 'text-white'
              }`}
            />
            <button
              type="button"
              aria-label="Search"
              className={`absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-transform active:scale-95 ${
                isContact || isWorks || isAbout
                  ? 'bg-[#b22d27] hover:bg-[#972621]'
                  : isSkills
                  ? 'bg-[#fcc990] hover:bg-[#eab375]'
                  : isEducation
                  ? 'bg-[#0163cb] hover:bg-[#0152a8]'
                  : 'bg-[#FFC533] hover:bg-[#ffba17] shadow-sm'
              }`}
            >
              <svg
                className={`w-3.5 h-3.5 ${
                  isContact || isWorks || isEducation || isAbout
                    ? 'text-white'
                    : isSkills
                    ? 'text-[#123B91]'
                    : 'text-[#1F62DC]'
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;