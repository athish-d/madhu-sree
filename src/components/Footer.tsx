import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Heart } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-white font-semibold text-sm">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-stone-400">
              {PERSONAL_INFO.role} · BCA Student at KPR College
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <span className="text-stone-700">·</span>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <span className="text-stone-700">·</span>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <span className="text-stone-700">·</span>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <span className="text-stone-700">·</span>
            <button onClick={onOpenResume} className="hover:text-emerald-400 transition-colors">
              Resume Preview
            </button>
            <span className="text-stone-700">·</span>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-stone-800"
            title="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript & Tailwind CSS.
          </div>

          <div className="flex items-center gap-2">
            <span>Java</span>
            <span>·</span>
            <span>Python</span>
            <span>·</span>
            <span>FastAPI</span>
            <span>·</span>
            <span>Supabase</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
