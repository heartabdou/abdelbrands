
import React from 'react';
import Logo from './Logo';
import { LINKEDIN_URL, BEHANCE_URL, BRAND_NAME } from '../constants';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white px-6 py-20 animate-on-scroll border-t border-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 fade-up">
          <div className="flex items-center gap-8">
            <Logo className="h-5 text-zinc-900" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300">
              © {currentYear} {BRAND_NAME}
            </span>
          </div>

          <div className="flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-900">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="nav-link">LinkedIn</a>
            <a href={BEHANCE_URL} target="_blank" rel="noopener noreferrer" className="nav-link">Behance</a>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="ml-4 text-zinc-300 hover:text-zinc-900 transition-colors uppercase font-black"
            >
              ↑ Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
