import React from 'react';

interface FooterProps {
  color?: string;
}

export const Footer: React.FC<FooterProps> = ({ color = 'bg-[#f48da2]' }) => {
  return (
    <footer className={`w-full py-4 text-center text-xs text-white/80 font-semibold tracking-wider ${color}`}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>© 2026 Bela Amelia Nuralfiani. All rights reserved.</p>
        <p className="text-[11px] opacity-75">Physics Student • IoT & Robotics Enthusiast • Graphic Artist</p>
      </div>
    </footer>
  );
};
export default Footer;
