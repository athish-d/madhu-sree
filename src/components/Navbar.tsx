import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-200 ${
        isScrolled 
          ? 'bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#about"
          className="flex items-center gap-2.5 group"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-600 ring-4 ring-emerald-500/20 group-hover:scale-125 transition-transform" />
          <span className="font-semibold text-stone-900 tracking-tight text-sm sm:text-base group-hover:text-emerald-700 transition-colors">
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(item => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-stone-900 font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 border border-stone-300 hover:border-emerald-600 hover:text-emerald-700 bg-white hover:bg-stone-50 rounded-lg transition-colors shadow-2xs"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center text-xs font-medium px-3.5 py-1.5 bg-stone-900 text-stone-100 hover:bg-emerald-700 rounded-lg transition-colors shadow-2xs"
          >
            Contact
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-200/60 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-50 border-b border-stone-200 px-6 py-4 space-y-3">
          {navItems.map(item => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-stone-700 hover:text-emerald-700 py-1"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="w-full text-left text-sm font-mono font-medium text-emerald-700 py-1 flex items-center justify-between"
            >
              <span>View Full Resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
