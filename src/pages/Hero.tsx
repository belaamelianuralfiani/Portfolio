import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import type { PageId } from '../types';

interface HeroProps {
  onNavigate?: (page: PageId) => void;
  activePage?: PageId;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, activePage }) => {
  return <HeroSection onNavigate={onNavigate} activePage={activePage} />;
};

export default Hero;
