
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import AIAssistant from './components/AIAssistant';
import Logo from './components/Logo';
import { PROJECTS, TESTIMONIALS, DESIGNER_NAME, BRAND_NAME, DESIGNER_TAGLINE, DESIGNER_SUBHEADING, DESIGNER_BIO, BLOG_POSTS, DESIGNER_EMAIL, BEHANCE_URL, LINKEDIN_URL } from './constants';
import { Project, BlogPost } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showAllPosts, setShowAllPosts] = useState(false);

  const categories = ['All', 'Packaging', 'UI/UX', 'Web Design', 'Branding'];
  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  // Determine which posts to show
  const displayedPosts = showAllPosts ? BLOG_POSTS : BLOG_POSTS.slice(0, 3);
  const hasMorePosts = BLOG_POSTS.length > 3;

  // Lock scroll when a modal is open
  useEffect(() => {
    if (selectedProject || selectedBlogPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject, selectedBlogPost]);

  const navigateTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar onNavigate={navigateTo} />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="px-6 py-24 md:py-48 max-w-7xl mx-auto">
          <div className="max-w-6xl">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-zinc-400 mb-8 block animate-pulse">Based in Brand Strategy</span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-12 leading-[0.9] text-zinc-900">
              {DESIGNER_TAGLINE}
            </h1>
            <p className="text-xl md:text-3xl text-zinc-500 leading-relaxed font-light max-w-3xl">
              {DESIGNER_SUBHEADING}
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="projects" className="px-6 py-24 max-w-7xl mx-auto border-t border-zinc-100">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-4xl font-bold uppercase tracking-tighter mb-2">Portfolio</h2>
              <p className="text-zinc-400 text-sm tracking-widest uppercase">Archive 2024</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                      ? 'bg-zinc-900 text-white shadow-lg' 
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
              <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
            ))}
          </div>
        </section>

        {/* Journal Section */}
        <section id="journal" className="py-32 px-6 max-w-7xl mx-auto border-t border-zinc-100">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">Journal</h2>
              <p className="text-zinc-400 text-sm tracking-widest uppercase">Thoughts & Insights</p>
            </div>
            <div className="md:w-2/3">
              <div className="space-y-16">
                {displayedPosts.map((post) => (
                  <article 
                    key={post.id} 
                    onClick={() => setSelectedBlogPost(post)}
                    className="group cursor-pointer border-b border-zinc-50 pb-16 last:border-0"
                  >
                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-zinc-300 mb-4">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 bg-zinc-200 rounded-full" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 group-hover:text-zinc-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-zinc-500 text-lg leading-relaxed max-w-xl">
                      {post.excerpt}
                    </p>
                    <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-900 transition-all">
                      Read Article 
                      <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </article>
                ))}
              </div>

              {hasMorePosts && !showAllPosts && (
                <div className="mt-20">
                  <button 
                    onClick={() => setShowAllPosts(true)}
                    className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-zinc-900 hover:text-zinc-500 transition-colors"
                  >
                    See All Articles
                    <div className="w-12 h-px bg-zinc-900 group-hover:w-20 group-hover:bg-zinc-500 transition-all" />
                  </button>
                </div>
              )}
              
              {showAllPosts && (
                <div className="mt-20">
                  <button 
                    onClick={() => setShowAllPosts(false)}
                    className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-zinc-900 transition-colors"
                  >
                    Show Less
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-zinc-900 text-white py-32 md:py-56 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Abdel" 
                className="w-full grayscale brightness-75 hover:brightness-100 transition-all duration-1000 rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white text-zinc-900 p-8 hidden md:block">
                <span className="text-[10px] uppercase tracking-widest font-black">Est. 2020</span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl font-bold uppercase tracking-tighter mb-10">I'm {DESIGNER_NAME}</h2>
              <p className="text-zinc-400 text-xl leading-relaxed mb-10 font-light">
                {DESIGNER_BIO}
              </p>
              <div className="flex gap-10">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-4">Strategy</h4>
                  <p className="text-xs text-zinc-400">User Experience, Branding, Conversions</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-4">Craft</h4>
                  <p className="text-xs text-zinc-400">Packaging, Web/App Interfaces</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Praise Section */}
        <section id="praise" className="py-32 md:py-56 px-6 max-w-7xl mx-auto border-b border-zinc-100">
           <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3">
              <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-zinc-300 sticky top-32">Client Voice</h2>
            </div>
            <div className="md:w-2/3 space-y-32">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="max-w-2xl">
                  <blockquote className="text-3xl md:text-5xl font-light leading-tight tracking-tight text-zinc-800 mb-10 italic">
                    "{t.quote}"
                  </blockquote>
                  <cite className="not-italic flex items-center gap-4">
                    <div className="w-8 h-px bg-zinc-900" />
                    <span className="text-sm font-bold uppercase tracking-widest">{t.author}, {t.company}</span>
                  </cite>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 md:py-64 px-6 max-w-7xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.5em] text-zinc-300 mb-12 block">New Project?</span>
          <h2 className="text-6xl md:text-[10rem] font-bold tracking-tighter mb-16 hover:text-zinc-200 transition-colors">Connect.</h2>
          <a href={`mailto:${DESIGNER_EMAIL}`} className="text-2xl md:text-4xl font-light border-b border-zinc-200 pb-2 hover:border-zinc-900 transition-all">{DESIGNER_EMAIL}</a>
        </section>
      </main>

      <footer className="px-6 py-12 border-t border-zinc-100 text-zinc-400 text-[10px] uppercase tracking-[0.2em] font-bold">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Logo className="h-6 opacity-40 grayscale brightness-0" />
            <p>© {new Date().getFullYear()} Studio</p>
          </div>
          <div className="flex gap-8">
            <a href={BEHANCE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">Behance</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto custom-scrollbar animate-in fade-in slide-in-from-bottom-5 duration-700">
           <nav className="fixed top-0 left-0 w-full h-20 px-6 flex items-center justify-between bg-white/95 backdrop-blur-md z-[110] border-b border-zinc-100">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-zinc-900 text-white rounded-sm">{selectedProject.category}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">/ {selectedProject.title}</span>
            </div>
            <button onClick={() => setSelectedProject(null)} className="text-xs font-bold uppercase tracking-[0.3em] hover:text-red-500 transition-all hover:scale-110">[ Close ]</button>
          </nav>
          
          <div className="pt-20">
            <header className="relative h-[80vh] w-full overflow-hidden bg-zinc-100">
              <img 
                src={selectedProject.imageUrl} 
                className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-105" 
                alt={selectedProject.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent backdrop-blur-[1px]" />
              <div className="absolute bottom-20 left-0 w-full px-6">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-7xl md:text-[11vw] font-bold tracking-tighter text-white leading-[0.8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-32">
              <div className="grid lg:grid-cols-[1fr_2fr] gap-20 items-start">
                <aside className="lg:sticky lg:top-40 space-y-12">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300 mb-2">Client</h4>
                      <p className="text-xl font-medium">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300 mb-2">Role</h4>
                      <p className="text-xl font-medium">{selectedProject.role || 'UI/UX & Creative Direction'}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300 mb-2">Year</h4>
                      <p className="text-xl font-medium">{selectedProject.year}</p>
                    </div>
                  </div>

                  {selectedProject.goals && (
                    <div className="pt-12 border-t border-zinc-100">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300 mb-6">Strategic Goals</h4>
                      <ul className="space-y-4">
                        {selectedProject.goals.map((goal, i) => (
                          <li key={i} className="flex gap-4 items-start group">
                            <span className="text-[10px] font-black text-zinc-400 mt-1">0{i+1}</span>
                            <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </aside>

                <article className="space-y-24">
                  <div className="space-y-12">
                    <div className="max-w-2xl">
                      <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-300 mb-6">The Brief</h3>
                      <p className="text-3xl md:text-5xl font-light tracking-tight leading-tight text-zinc-800">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 pt-12">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-300 mb-6">The Challenge</h4>
                        <p className="text-lg leading-relaxed text-zinc-500">
                          {selectedProject.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-300 mb-6">The Solution</h4>
                        <p className="text-lg leading-relaxed text-zinc-500">
                          {selectedProject.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-12">
                    {selectedProject.galleryImages.map((img, i) => (
                      <div key={i} className="group relative overflow-hidden bg-zinc-100 rounded-sm">
                        <img 
                          src={img} 
                          className="w-full aspect-[16/9] object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                          alt={`${selectedProject.title} Detail ${i + 1}`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="py-24 border-y border-zinc-100 text-center">
                    <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-300 mb-12">Behind the Craft</h4>
                    <p className="max-w-3xl mx-auto text-2xl font-light text-zinc-600 leading-relaxed">
                      "{selectedProject.fullStory}"
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Detail Modal */}
      {selectedBlogPost && (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto custom-scrollbar animate-in fade-in duration-500">
          <nav className="fixed top-0 left-0 w-full h-20 px-6 flex items-center justify-between bg-white/95 backdrop-blur-md z-[110] border-b border-zinc-100">
            <span className="text-xs font-bold uppercase tracking-widest">Journal — {selectedBlogPost.readTime}</span>
            <button onClick={() => setSelectedBlogPost(null)} className="text-xs font-bold uppercase tracking-[0.3em] hover:text-red-500 transition-colors">[ Close ]</button>
          </nav>
          <div className="max-w-4xl mx-auto px-6 pt-40 pb-32">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 leading-[1.1]">{selectedBlogPost.title}</h2>
            <div className="prose prose-zinc lg:prose-xl max-w-none">
              <p className="text-2xl font-light text-zinc-600 leading-relaxed mb-12">
                {selectedBlogPost.excerpt}
              </p>
              <div className="text-lg text-zinc-800 leading-loose space-y-8 whitespace-pre-line">
                {selectedBlogPost.content}
              </div>
            </div>
          </div>
        </div>
      )}

      <AIAssistant />
    </div>
  );
};

export default App;
