import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import type { PageId } from '../types';

interface HeroProps {
  onNavigate?: (page: PageId) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return <HeroSection onNavigate={onNavigate} />;
};

export default Hero;
