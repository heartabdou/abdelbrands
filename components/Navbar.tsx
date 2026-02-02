
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const handleNav = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <button 
            onClick={() => handleNav('home')}
            className="flex items-center group z-50"
          >
            <Logo className="h-6 md:h-8 text-zinc-900 group-hover:scale-[1.02] transition-transform duration-500" />
          </button>
          
          <div className="hidden md:flex items-center space-x-10 text-[14px] font-black tracking-widest uppercase text-zinc-400">
            <button onClick={() => handleNav('projects')} className="nav-link hover:text-zinc-900 transition-colors">Work</button>
            <button onClick={() => handleNav('journal')} className="nav-link hover:text-zinc-900 transition-colors">Journal</button>
            <button onClick={() => handleNav('about')} className="nav-link hover:text-zinc-900 transition-colors">About</button>
            <button 
              onClick={() => handleNav('contact')} 
              className="border-2 border-zinc-900 px-6 py-2 text-zinc-900 rounded-full hover:bg-zinc-900 hover:text-white active:bg-zinc-800 active:text-white transition-all duration-300"
            >
              Contact
            </button>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-zinc-900 z-50 relative focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 translate-y-2 -rotate-45' : 'w-6'}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 -translate-y-2 rotate-45' : 'w-5'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center space-y-12 px-6 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <button onClick={() => handleNav('projects')} className="text-5xl font-black tracking-tighter uppercase hover:text-zinc-400 transition-colors">Work</button>
        <button onClick={() => handleNav('journal')} className="text-5xl font-black tracking-tighter uppercase hover:text-zinc-400 transition-colors">Journal</button>
        <button onClick={() => handleNav('about')} className="text-5xl font-black tracking-tighter uppercase hover:text-zinc-400 transition-colors">About</button>
        <button onClick={() => handleNav('contact')} className="text-5xl font-black tracking-tighter uppercase text-zinc-300 hover:text-zinc-900 transition-colors">Contact</button>
        
        <div className="pt-12 text-[10px] font-black uppercase tracking-[0.5em] text-zinc-300">
          Abdel Designs © 2024
        </div>
      </div>
    </>
  );
};

export default Navbar;
