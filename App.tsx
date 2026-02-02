
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import AIAssistant from './components/AIAssistant';
import Logo from './components/Logo';
import { PROJECTS, TESTIMONIALS, DESIGNER_NAME, BRAND_NAME, DESIGNER_TAGLINE, DESIGNER_SUBHEADING, DESIGNER_BIO, BLOG_POSTS, DESIGNER_EMAIL, BEHANCE_URL, LINKEDIN_URL, DESIGNER_IMAGE, optimizeImage } from './constants';
import { Project, BlogPost, ProjectCategory } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showAllPosts, setShowAllPosts] = useState(false);
  
  const scrollObserver = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    scrollObserver.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    const updateObservers = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => scrollObserver.current?.observe(el));
    };

    updateObservers();
    
    const mutationObserver = new MutationObserver(updateObservers);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      scrollObserver.current?.disconnect();
      mutationObserver.disconnect();
    };
  }, [activeCategory, showAllPosts]);

  const categories = ['All', 'Packaging', 'UI/UX', 'Web Design', 'Branding'];
  
  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => {
        if (Array.isArray(p.category)) {
          return p.category.includes(activeCategory as ProjectCategory);
        }
        return p.category === activeCategory;
      });

  const displayedPosts = showAllPosts ? BLOG_POSTS : BLOG_POSTS.slice(0, 3);
  const hasMorePosts = BLOG_POSTS.length > 3;

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
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden selection:bg-zinc-900 selection:text-white">
      <Navbar onNavigate={navigateTo} />
      
      <main className="flex-grow pt-20">
        <section className="px-6 py-24 md:py-48 max-w-7xl mx-auto animate-on-scroll">
          <div className="max-w-6xl">
            <span className="text-xs uppercase tracking-[0.5em] font-black text-zinc-300 mb-8 block fade-up">Digital & Physical Identity</span>
            <div className="reveal-container mb-12">
              <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-zinc-900 reveal-text">
                {DESIGNER_TAGLINE}
              </h1>
            </div>
            <p className="text-xl md:text-4xl text-zinc-500 leading-relaxed font-light max-w-3xl fade-up stagger-1">
              {DESIGNER_SUBHEADING}
            </p>
          </div>
        </section>

        <section id="projects" className="px-6 py-24 max-w-7xl mx-auto border-t border-zinc-100 animate-on-scroll">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
            <div className="fade-up">
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">Portfolio</h2>
              <div className="w-12 h-px bg-zinc-900 mb-2"></div>
              <p className="text-zinc-400 text-[10px] tracking-[0.4em] uppercase font-bold">Selected Works '23 — '25</p>
            </div>
            
            <div className="flex flex-wrap gap-2 md:gap-4 fade-up stagger-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-sm text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                    activeCategory === cat 
                      ? 'bg-zinc-900 text-white shadow-xl' 
                      : 'bg-zinc-50 text-zinc-400 hover:bg-zinc-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className={`animate-on-scroll fade-up stagger-${(index % 2) + 1}`}>
                <ProjectCard project={project} onClick={setSelectedProject} />
              </div>
            ))}
          </div>
        </section>

        <section id="journal" className="py-32 md:py-56 px-6 max-w-7xl mx-auto border-t border-zinc-100 animate-on-scroll">
          <div className="flex flex-col md:flex-row gap-24">
            <div className="md:w-1/3 fade-up">
              <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">Journal</h2>
              <p className="text-zinc-400 text-[10px] tracking-[0.4em] uppercase font-bold">Insights & Design Philosophy</p>
            </div>
            <div className="md:w-2/3">
              <div className="space-y-24">
                {displayedPosts.map((post, index) => (
                  <article 
                    key={post.id} 
                    onClick={() => setSelectedBlogPost(post)}
                    className={`group cursor-pointer border-b border-zinc-100 pb-20 last:border-0 animate-on-scroll fade-up stagger-${(index % 3) + 1}`}
                  >
                    <div className="flex items-center gap-6 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-300 mb-6">
                      <span>{post.date}</span>
                      <span className="w-8 h-px bg-zinc-100" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 group-hover:pl-4 transition-all duration-700">
                      {post.title}
                    </h3>
                    <p className="text-zinc-500 text-xl leading-relaxed max-w-xl font-light">
                      {post.excerpt}
                    </p>
                    <div className="mt-10 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-900">
                      Read Entry 
                      <div className="w-0 h-px bg-zinc-900 group-hover:w-12 transition-all duration-700"></div>
                    </div>
                  </article>
                ))}
              </div>

              {hasMorePosts && !showAllPosts && (
                <div className="mt-20 fade-up">
                  <button 
                    onClick={() => setShowAllPosts(true)}
                    className="group flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-900"
                  >
                    View All Entries
                    <span className="group-hover:translate-x-4 transition-transform duration-700">→</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="about" className="bg-zinc-900 text-white py-32 md:py-64 px-6 animate-on-scroll">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32 items-center">
            <div className="relative max-w-sm md:max-w-md mx-auto md:mx-0 fade-up">
              <img 
                src={optimizeImage(DESIGNER_IMAGE, 1000)} 
                alt={DESIGNER_NAME} 
                className="w-full aspect-[3/4] object-cover grayscale brightness-75 hover:brightness-100 transition-all duration-1000 rounded-sm"
              />
              <div className="absolute -bottom-8 -right-8 bg-white text-zinc-900 p-10 hidden md:block z-10">
                <span className="text-[10px] uppercase tracking-[0.5em] font-black italic">Strategic Aesthetic</span>
              </div>
            </div>
            <div className="flex flex-col justify-center fade-up stagger-1">
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-12">I'm {DESIGNER_NAME}</h2>
              <p className="text-zinc-400 text-2xl leading-relaxed mb-12 font-light tracking-tight">
                {DESIGNER_BIO}
              </p>
              <button 
                onClick={() => navigateTo('contact')}
                className="text-white text-[10px] font-black uppercase tracking-[0.5em] flex items-center gap-4 group"
              >
                More About Me
                <span className="w-8 h-px bg-white group-hover:w-16 transition-all duration-700"></span>
              </button>
            </div>
          </div>
        </section>

        <section id="praise" className="py-32 md:py-64 px-6 max-w-7xl mx-auto animate-on-scroll">
           <div className="flex flex-col gap-24">
            <div className="fade-up">
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-300 mb-4">Testimonials</h2>
              <p className="text-xl md:text-3xl text-zinc-900 tracking-tight font-light">What partners say about the work.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-48">
              {TESTIMONIALS.map((t, index) => (
                <div key={t.id} className={`max-w-xl group fade-up stagger-${(index % 2) + 1}`}>
                  <blockquote className="text-2xl md:text-4xl font-light leading-snug tracking-tighter text-zinc-800 mb-10">
                    "{t.quote}"
                  </blockquote>
                  <cite className="not-italic flex items-center gap-6">
                    <div className="w-12 h-px bg-zinc-200" />
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-900">
                      {t.author} / {t.role}
                    </span>
                  </cite>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-32 md:py-80 px-6 max-w-7xl mx-auto text-center animate-on-scroll">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-300 mb-16 block fade-up">Available for new projects</span>
          <h2 className="text-6xl md:text-[12rem] font-bold tracking-tighter mb-20 hover:text-zinc-100 transition-colors duration-1000 reveal-container">
            <span className="reveal-text">Work with me.</span>
          </h2>
          <div className="fade-up stagger-2">
            <a href={`mailto:${DESIGNER_EMAIL}`} className="text-2xl md:text-5xl font-light border-b border-zinc-100 pb-4 hover:border-zinc-900 hover:text-zinc-500 transition-all duration-700">{DESIGNER_EMAIL}</a>
          </div>
        </section>
      </main>

      <Footer onNavigate={navigateTo} />

      {/* MODALS */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto custom-scrollbar modal-animate">
           <nav className="fixed top-0 left-0 w-full h-20 px-6 flex items-center justify-between bg-white/95 backdrop-blur-md z-[110] border-b border-zinc-50">
            <div className="flex items-center gap-4">
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-900">{selectedProject.title}</span>
              <span className="w-4 h-px bg-zinc-200"></span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">{Array.isArray(selectedProject.category) ? selectedProject.category[0] : selectedProject.category}</span>
            </div>
            <button onClick={() => setSelectedProject(null)} className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-red-500 transition-colors">[ Exit ]</button>
          </nav>
          
          <div className="pt-20">
            <header className="relative h-[85vh] w-full overflow-hidden bg-zinc-50">
              <img 
                src={optimizeImage(selectedProject.imageUrl, 2000)} 
                className="w-full h-full object-cover animate-on-scroll img-zoom transition-transform duration-[4s]" 
                alt={selectedProject.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="absolute bottom-20 left-0 w-full px-6">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-7xl md:text-[12vw] font-bold tracking-tighter text-zinc-900 leading-[0.8] reveal-container">
                    <span className="reveal-text">{selectedProject.title}</span>
                  </h2>
                </div>
              </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-40">
              <div className="grid lg:grid-cols-[1fr_2fr] gap-32">
                <aside className="space-y-16">
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-12">
                    <div className="fade-up stagger-1">
                      <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-300 mb-4">Client</h4>
                      <p className="text-xl font-bold tracking-tight">{selectedProject.client}</p>
                    </div>
                    <div className="fade-up stagger-2">
                      <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-300 mb-4">Service</h4>
                      <p className="text-xl font-bold tracking-tight">{selectedProject.role}</p>
                    </div>
                    <div className="fade-up stagger-3">
                      <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-300 mb-4">Released</h4>
                      <p className="text-xl font-bold tracking-tight">{selectedProject.year}</p>
                    </div>
                  </div>
                </aside>

                <article className="space-y-40">
                  <p className="text-3xl md:text-5xl font-light tracking-tighter leading-[1.1] text-zinc-800 fade-up stagger-1">
                    {selectedProject.description}
                  </p>

                  <div className="grid grid-cols-1 gap-24">
                    {selectedProject.galleryImages.map((img, i) => (
                      <div key={i} className="group relative overflow-hidden bg-zinc-50 animate-on-scroll fade-up">
                        <img 
                          src={optimizeImage(img, 1800)} 
                          className="w-full aspect-[16/10] object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                          alt={`${selectedProject.title} Detail ${i + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedBlogPost && (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto custom-scrollbar modal-animate">
          <nav className="fixed top-0 left-0 w-full h-20 px-6 flex items-center justify-between bg-white/95 backdrop-blur-md z-[110] border-b border-zinc-50">
            <span className="text-[9px] font-black uppercase tracking-[0.4em]">Journal — {selectedBlogPost.readTime}</span>
            <button onClick={() => setSelectedBlogPost(null)} className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-red-500 transition-colors">[ Exit ]</button>
          </nav>
          <div className="max-w-4xl mx-auto px-6 pt-48 pb-40">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-24 leading-[0.9] reveal-container">
              <span className="reveal-text">{selectedBlogPost.title}</span>
            </h2>
            <div className="prose prose-zinc lg:prose-2xl max-w-none fade-up stagger-1">
              <div 
                className="text-xl leading-relaxed font-light space-y-10"
                dangerouslySetInnerHTML={{ __html: selectedBlogPost.content }}
              />
            </div>
          </div>
        </div>
      )}

      <AIAssistant />
    </div>
  );
};

export default App;
