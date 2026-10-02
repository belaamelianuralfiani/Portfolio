import React, { useState } from 'react';
import type { PageId } from '../types';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  theme?: 'blue' | 'pink' | 'cream';
  onSearch?: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  theme = 'blue',
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT ME' },
    { id: 'works', label: 'WORKS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  // Theme-based colors matching Canva aesthetic
  const themeStyles = {
    blue: {
      text: 'text-[#f5a623]',
      textHover: 'hover:text-[#ffc107]',
      active: 'text-[#ffb300] font-black drop-shadow-[0_2px_8px_rgba(255,179,0,0.5)]',
      searchBorder: 'border-[#f5a623]',
      searchBg: 'bg-[#0f3b82]/70',
      searchButton: 'bg-[#f5a623] text-[#0f3b82]',
      mobileBg: 'bg-[#1250a6]',
    },
    pink: {
      text: 'text-white/90',
      textHover: 'hover:text-white',
      active: 'text-[#b71c1c] font-black drop-shadow-[0_2px_8px_rgba(183,28,28,0.3)]',
      searchBorder: 'border-[#c2185b]',
      searchBg: 'bg-[#ad1457]/40',
      searchButton: 'bg-[#c2185b] text-white',
      mobileBg: 'bg-[#e91e63]',
    },
    cream: {
      text: 'text-[#8b263e]',
      textHover: 'hover:text-[#a93226]',
      active: 'text-[#a93226] font-black drop-shadow-[0_2px_8px_rgba(169,50,38,0.3)]',
      searchBorder: 'border-[#a93226]',
      searchBg: 'bg-[#f0e6dc]/80',
      searchButton: 'bg-[#a93226] text-white',
      mobileBg: 'bg-[#fdfaf6]',
    },
  }[theme];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(searchQuery);
  };

  return (
    <nav className="w-full px-4 sm:px-8 md:px-14 py-4 md:py-6 flex items-center justify-between z-30 transition-all duration-300">
      {/* Navigation Links (Desktop) */}
      <div className="flex items-center space-x-6 sm:space-x-10 md:space-x-14">
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`cursor-pointer tracking-wider text-sm sm:text-base md:text-lg transition-all duration-200 transform hover:scale-105 ${
                isActive
                  ? themeStyles.active
                  : `${themeStyles.text} font-bold ${themeStyles.textHover}`
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Search Bar matching Canva rounded pill style */}
      <div className="hidden sm:block">
        <form
          onSubmit={handleSearchSubmit}
          className={`flex items-center rounded-full border-2 ${themeStyles.searchBorder} ${themeStyles.searchBg} backdrop-blur-md px-3 py-1 shadow-inner w-44 sm:w-56 md:w-64 transition-all duration-200 focus-within:w-72`}
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-white text-xs sm:text-sm px-2 py-0.5 outline-none placeholder-white/50"
          />
          <button
            type="submit"
            className={`w-6 h-6 rounded-full flex items-center justify-center ${themeStyles.searchButton} transition-transform hover:scale-110`}
          >
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M10 2a8 8 0 105.293 14.707l5 5a1 1 0 001.414-1.414l-5-5A8 8 0 0010 2zm-6 8a6 6 0 1112 0 6 6 0 01-12 0z" />
            </svg>
          </button>
        </form>
      </div>

      {/* Mobile Hamburger Toggle */}
      <div className="sm:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`p-2 rounded-lg ${themeStyles.text} focus:outline-none`}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className={`sm:hidden absolute top-16 left-4 right-4 ${themeStyles.mobileBg} rounded-2xl p-4 shadow-2xl flex flex-col space-y-3 z-50 border border-white/20`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`text-left px-3 py-2 rounded-lg text-base font-bold ${
                activePage === item.id ? 'bg-white/20 text-white' : 'text-white/80'
              }`}
            >
              {item.label}
            </button>
          ))}
          <form onSubmit={handleSearchSubmit} className="pt-2">
            <div className={`flex items-center rounded-full border-2 ${themeStyles.searchBorder} bg-black/20 px-3 py-1`}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white text-xs px-2 outline-none placeholder-white/50"
              />
              <button type="submit" className={`w-6 h-6 rounded-full flex items-center justify-center ${themeStyles.searchButton}`}>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M10 2a8 8 0 105.293 14.707l5 5a1 1 0 001.414-1.414l-5-5A8 8 0 0010 2zm-6 8a6 6 0 1112 0 6 6 0 01-12 0z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </nav>
  );
};
