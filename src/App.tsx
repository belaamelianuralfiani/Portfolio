import { useState, useEffect } from 'react';
import type { PageId } from './types';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillSection } from './sections/SkillSection';
import { ProjectSection } from './sections/ProjectSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState<PageId>('home');

  // Track active section on scroll for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections: PageId[] = ['home', 'about', 'works', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    setActiveSection(page);
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#1b76e8] text-white selection:bg-pink-400 selection:text-white">
      {/* 1. Page 1: HERO / HOME */}
      <section id="home">
        <HeroSection onNavigate={handleNavigate} activePage={activeSection} />
      </section>

      {/* 2. Page 2: ABOUT ME */}
      <section id="about">
        <AboutSection onNavigate={handleNavigate} activePage={activeSection} />
      </section>

      {/* 3. Page 3: SKILLS & TOOLSET */}
      <section id="skills">
        <SkillSection onNavigate={handleNavigate} activePage={activeSection} />
      </section>

      {/* 4. Page 4: WORKS & PROJECTS */}
      <section id="works">
        <ProjectSection onNavigate={handleNavigate} activePage={activeSection} />
      </section>

      {/* 5. CONTACT & RECOGNITION */}
      <section id="contact">
        <ContactSection onNavigate={handleNavigate} activePage={activeSection} />
      </section>

      {/* Site Footer */}
      <Footer color="bg-[#e0758a]" />
    </div>
  );
}

export default App;
