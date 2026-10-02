import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 max-w-5xl mx-auto px-6">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-xs uppercase tracking-wider font-bold text-[#FF6B35] mb-2">Layanan</h2>
        <h3 className="text-3xl font-bold text-neutral-900">Apa yang bisa saya bantu</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-neutral-200 hover:border-neutral-900 rounded-3xl p-6 transition-all duration-200 hover:-translate-y-1 shadow-xs hover:shadow-md"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#FF6B35]/10 text-[#FF6B35] font-bold flex items-center justify-center mb-5 text-sm">
              0{index + 1}
            </div>
            <h4 className="text-lg font-bold text-neutral-900 mb-2">{service.title}</h4>
            <p className="text-neutral-600 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};