import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 max-w-5xl mx-auto px-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-xs uppercase tracking-wider font-bold text-[#FF6B35] mb-2">Karya Terpilih</h2>
          <h3 className="text-3xl font-bold text-neutral-900">Portofolio Desain</h3>
        </div>
        <p className="text-xs font-semibold text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full self-start sm:self-auto">
          Total: {PORTFOLIO_DATA.projects.length} Proyek
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PORTFOLIO_DATA.projects.map((project) => (
          <article
            key={project.id}
            className="group bg-white border border-neutral-200 hover:border-neutral-900 rounded-3xl overflow-hidden transition-all duration-200 hover:shadow-lg flex flex-col"
          >
            {/* Project Image */}
            <div className="w-full h-56 sm:h-64 overflow-hidden bg-neutral-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Details */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#FF6B35] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-neutral-400 group-hover:text-neutral-900 transition-colors font-bold text-lg">
                    ↗
                  </span>
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-[#FF6B35] transition-colors">
                  {project.title}
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-100">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-[11px] font-medium bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};