
import React from 'react';
import { Project } from '../types';
import { optimizeImage } from '../constants';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const categories = Array.isArray(project.category) ? project.category : [project.category];

  return (
    <div 
      onClick={() => onClick(project)}
      className="group project-card cursor-pointer overflow-hidden bg-white"
    >
      <div className="relative aspect-[4/5] img-container bg-zinc-100 rounded-sm">
        <img 
          src={optimizeImage(project.imageUrl, 800)} 
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 img-zoom"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-700" />
      </div>
      
      <div className="py-6 transition-all duration-700">
        <div className="flex justify-between items-baseline mb-3">
          <h3 className="text-xl font-bold tracking-tighter uppercase group-hover:tracking-normal transition-all duration-700">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <span key={idx} className="text-[9px] tracking-[0.2em] uppercase font-black text-zinc-300">
                {cat}
              </span>
            ))}
          </div>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 font-light">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
