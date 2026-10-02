import { useState, useEffect } from 'react';
import type { PageId } from './types';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillSection } from './sections/SkillSection';
import { ProjectSection } from './sections/ProjectSection';
import { ContactSection } from './sections/ContactSection';

export function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [viewMode, setViewMode] = useState<'slide' | 'scroll'>('slide');

  // Keyboard navigation for presentation slide feel (Arrow keys or 1,2,3,4)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'slide') return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setActivePage((curr) => {
          if (curr === 'home') return 'about';
          if (curr === 'about') return 'works';
          if (curr === 'works') return 'contact';
          return 'home';
        });
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setActivePage((curr) => {
          if (curr === 'contact') return 'works';
          if (curr === 'works') return 'about';
          if (curr === 'about') return 'home';
          return 'contact';
        });
      } else if (e.key === '1') setActivePage('home');
      else if (e.key === '2') setActivePage('about');
      else if (e.key === '3') setActivePage('works');
      else if (e.key === '4') setActivePage('contact');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode]);

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    if (viewMode === 'scroll') {
      const element = document.getElementById(page);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <main className="min-h-screen w-full relative bg-slate-900 text-white selection:bg-pink-400 selection:text-white">
      {/* Floating Presentation Control Bar (Standard International UX) */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs shadow-2xl">
        <button
          onClick={() => setViewMode(viewMode === 'slide' ? 'scroll' : 'slide')}
          className="cursor-pointer px-2.5 py-1 rounded-full font-bold bg-white/20 hover:bg-white/30 transition-colors"
          title="Toggle between single slide and full scroll mode"
        >
          {viewMode === 'slide' ? '📑 Slide Mode' : '📜 Scroll Mode'}
        </button>

        {viewMode === 'slide' && (
          <div className="flex items-center gap-1 pl-2 border-l border-white/20">
            {(['home', 'about', 'works', 'contact'] as PageId[]).map((p, idx) => (
              <button
                key={p}
                onClick={() => setActivePage(p)}
                className={`cursor-pointer w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] transition-all ${
                  activePage === p
                    ? 'bg-[#f48da2] text-white shadow-md scale-110'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      {viewMode === 'slide' ? (
        // SLIDE PRESENTATION MODE (Identical to 4-Page PDF)
        <div className="w-full min-h-screen">
          {activePage === 'home' && <HeroSection onNavigate={handleNavigate} />}
          {activePage === 'about' && (
            <div className="flex flex-col">
              <AboutSection onNavigate={handleNavigate} />
              {/* Also show Skills right below or switchable */}
              <SkillSection onNavigate={handleNavigate} />
            </div>
          )}
          {activePage === 'works' && <ProjectSection onNavigate={handleNavigate} />}
          {activePage === 'contact' && <ContactSection onNavigate={handleNavigate} />}
        </div>
      ) : (
        // CONTINUOUS SCROLL MODE
        <div className="w-full flex flex-col">
          <div id="home">
            <HeroSection onNavigate={handleNavigate} />
          </div>
          <div id="about">
            <AboutSection onNavigate={handleNavigate} />
          </div>
          <div id="skills">
            <SkillSection onNavigate={handleNavigate} />
          </div>
          <div id="works">
            <ProjectSection onNavigate={handleNavigate} />
          </div>
          <div id="contact">
            <ContactSection onNavigate={handleNavigate} />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
