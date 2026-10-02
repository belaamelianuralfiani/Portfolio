import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SparkleIcon } from './SparkleIcon';

export const Skills: React.FC = () => {
  return (
    <section className="py-8 max-w-5xl mx-auto px-6">
      <div className="bg-white border border-neutral-200 rounded-3xl p-6 md:p-8">
        <div className="flex items-center gap-2 mb-4">
          <SparkleIcon className="w-4 h-4 text-[#FF6B35]" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800">Keahlian & Tools</h3>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {PORTFOLIO_DATA.skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-neutral-100/80 hover:bg-[#FFD166]/30 text-neutral-800 text-xs sm:text-sm font-medium rounded-full border border-neutral-200 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};