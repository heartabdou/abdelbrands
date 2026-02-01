
import React from 'react';
import { DESIGNER_NAME } from '../constants';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')}
          className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity"
        >
          {DESIGNER_NAME.toUpperCase()}
        </button>
        
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide uppercase text-zinc-500">
          <button onClick={() => onNavigate('projects')} className="hover:text-zinc-900 transition-colors">Work</button>
          <button onClick={() => onNavigate('about')} className="hover:text-zinc-900 transition-colors">About</button>
          <button onClick={() => onNavigate('contact')} className="hover:text-zinc-900 transition-colors border border-zinc-900 px-4 py-2 text-zinc-900 rounded-full hover:bg-zinc-900 hover:text-white transition-all">
            Contact
          </button>
        </div>

        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
