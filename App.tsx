
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import AIAssistant from './components/AIAssistant';
import { PROJECTS, TESTIMONIALS, DESIGNER_NAME, DESIGNER_TAGLINE, DESIGNER_BIO } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Packaging', 'UI/UX', 'Web Design', 'Branding'];
  
  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const navigateTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (sectionId === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onNavigate={navigateTo} />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="px-6 py-24 md:py-48 max-w-7xl mx-auto">
          <div className="max-w-5xl">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-zinc-400 mb-8 block animate-pulse">Available for selective projects</span>
            <h1 className="text-6xl md:text-[10rem] font-bold tracking-tighter mb-12 leading-[0.85] text-zinc-900">
              {DESIGNER_TAGLINE.split(',')[0]}<br/>
              <span className="text-zinc-300">&</span> {DESIGNER_TAGLINE.split('&')[1]}
            </h1>
            <p className="text-xl md:text-3xl text-zinc-500 leading-relaxed font-light max-w-3xl">
              {DESIGNER_BIO}
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="projects" className="px-6 py-24 max-w-7xl mx-auto border-t border-zinc-100">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-4xl font-bold uppercase tracking-tighter mb-2">Portfolio</h2>
              <p className="text-zinc-400 text-sm tracking-widest uppercase">Archive 22—24</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                      ? 'bg-zinc-900 text-white' 
                      : 'bg-zinc-50 text-zinc-400 hover:bg-zinc-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {filteredProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={setSelectedProject} 
              />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-zinc-900 text-white py-32 md:py-56 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Portrait" 
                className="w-full grayscale brightness-75 hover:brightness-100 transition-all duration-1000 rounded-sm"
              />
              <div className="absolute -bottom-8 -right-8 bg-white text-zinc-900 p-8 hidden md:block">
                <p className="text-xs font-bold uppercase tracking-[0.3em]">Design Philosophy</p>
                <p className="text-xl mt-4 leading-tight italic">"Simplicity is the ultimate sophistication."</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl font-bold uppercase tracking-tighter mb-10">The Designer</h2>
              <p className="text-zinc-400 text-xl leading-relaxed mb-10 font-light">
                I operate at the intersection of physical and digital worlds. My work in packaging informs my UI layouts—focusing on hierarchy, tactile response, and the user's journey through a space.
              </p>
              <div className="space-y-12">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-500 mb-6">Expertise</h4>
                  <div className="flex flex-wrap gap-4">
                    {['Strategic Branding', 'Sustainable Materials', 'Webflow/React', 'Mobile UX', 'Design Systems'].map(skill => (
                      <span key={skill} className="px-4 py-2 border border-zinc-700 text-[10px] uppercase tracking-widest">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Praise (Professional Social Proof) */}
        <section id="praise" className="py-32 md:py-56 px-6 max-w-7xl mx-auto border-b border-zinc-100">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3">
              <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-zinc-300 sticky top-32">Selected Praise</h2>
            </div>
            <div className="md:w-2/3 space-y-32">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="max-w-2xl">
                  <blockquote className="text-3xl md:text-5xl font-light leading-tight tracking-tight text-zinc-800 mb-10">
                    "{t.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-px bg-zinc-900" />
                    <cite className="not-italic">
                      <span className="block text-sm font-bold uppercase tracking-widest text-zinc-900">{t.author}</span>
                      <span className="block text-xs uppercase tracking-widest text-zinc-400 mt-1">{t.role} — {t.company}</span>
                    </cite>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 md:py-64 px-6 max-w-7xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.5em] text-zinc-300 mb-12 block">Get in touch</span>
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-16 hover:text-zinc-400 transition-colors cursor-default">
            Let's Collaborate.
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <a href="mailto:hello@novasinclair.design" className="text-2xl md:text-3xl font-light border-b border-zinc-200 pb-2 hover:border-zinc-900 transition-all">hello@novasinclair.design</a>
            <a href="#" className="text-2xl md:text-3xl font-light border-b border-zinc-200 pb-2 hover:border-zinc-900 transition-all">Instagram</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-zinc-100 text-zinc-400 text-[10px] uppercase tracking-[0.2em] font-bold">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} {DESIGNER_NAME.toUpperCase()}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Behance</a>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto custom-scrollbar animate-in slide-in-from-bottom-10 duration-500">
          <nav className="fixed top-0 left-0 w-full h-20 px-6 flex items-center justify-between bg-white/90 backdrop-blur-sm z-[110] border-b border-zinc-50">
            <span className="text-xs font-bold uppercase tracking-widest">{selectedProject.title}</span>
            <button 
              onClick={() => setSelectedProject(null)}
              className="text-xs font-bold uppercase tracking-[0.3em] hover:opacity-50 transition-opacity"
            >
              [ Close ]
            </button>
          </nav>

          <div className="max-w-6xl mx-auto px-6 pt-40 pb-32">
            <div className="grid lg:grid-cols-12 gap-16 mb-24">
              <div className="lg:col-span-8">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-300 mb-6 block">
                  {selectedProject.category} — {selectedProject.year}
                </span>
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-10 leading-none">{selectedProject.title}</h2>
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-zinc-500">
                  {selectedProject.description}
                </p>
              </div>
              <div className="lg:col-span-4 lg:pt-20 space-y-10">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Client</h4>
                  <p className="text-lg font-medium">{selectedProject.client}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Services</h4>
                  <p className="text-lg font-medium">{selectedProject.category}</p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
               <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title} 
                className="w-full aspect-[16/9] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              
              <div className="max-w-3xl py-20">
                <h3 className="text-xs font-bold uppercase tracking-[0.4em] mb-12 text-zinc-400">Context & Solution</h3>
                <p className="text-2xl leading-relaxed text-zinc-800 font-light">
                  {selectedProject.fullStory}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-square bg-zinc-50 overflow-hidden">
                   <img src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop`} className="w-full h-full object-cover grayscale opacity-80" />
                </div>
                <div className="aspect-square bg-zinc-50 overflow-hidden">
                   <img src={`https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1000&auto=format&fit=crop`} className="w-full h-full object-cover grayscale opacity-80" />
                </div>
              </div>
            </div>

            <div className="mt-40 text-center">
               <button 
                onClick={() => setSelectedProject(null)}
                className="px-12 py-6 bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-[0.5em] rounded-full hover:scale-105 transition-transform"
              >
                Return to Gallery
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AI Floating Assistant */}
      <AIAssistant />
    </div>
  );
};

export default App;
