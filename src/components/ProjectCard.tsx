import React from 'react';
import type { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-pink-100"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-xs font-bold uppercase tracking-wider bg-[#8b263e] px-3 py-1 rounded-full">
            View Details
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-extrabold text-gray-900 text-lg group-hover:text-[#8b263e] transition-colors">
          {project.title}
        </h3>
        {project.description && (
          <p className="mt-1 text-xs text-gray-600 line-clamp-2">
            {project.description}
          </p>
        )}
        {project.tags && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold bg-pink-50 text-pink-700 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default ProjectCard;
