
import React from 'react';
import { Project } from '../types';
import { optimizeImage } from '../constants';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={() => onClick(project)}
      className="group cursor-pointer overflow-hidden bg-zinc-50 border border-zinc-100"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={optimizeImage(project.imageUrl, 800)} 
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold tracking-tight uppercase">{project.title}</h3>
          <span className="text-[10px] tracking-widest uppercase font-bold text-zinc-400 border border-zinc-200 px-2 py-0.5 rounded">
            {project.category}
          </span>
        </div>
        <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
