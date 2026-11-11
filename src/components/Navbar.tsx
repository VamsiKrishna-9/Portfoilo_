import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Moon, Sun, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, isDark, onToggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Section order from top to bottom
      const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'achievements', 'contact'];
      const scrollPosition = scrollY + 220;

      // Handle near bottom of page -> contact
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      const navOffset = 84;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: targetId === 'home' ? 0 : Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-3.5 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      {/* Floating Pill Container with smooth shadow and background transitions */}
      <div
        className={`pointer-events-auto backdrop-blur-md rounded-full border px-3 py-1.5 sm:px-4 sm:py-2 flex items-center justify-between gap-2 sm:gap-5 transition-all duration-300 max-w-5xl w-full ${
          isScrolled
            ? 'bg-white/96 dark:bg-[#1A1917]/96 shadow-[0_12px_36px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45)] border-[#DECFC0] dark:border-[#38332B]'
            : 'bg-white/90 dark:bg-[#1A1917]/90 shadow-[0_8px_30px_rgb(0,0,0,0.05)] border-[#E6E0D7] dark:border-[#2E2B27]'
        }`}
      >
        {/* Left: Circular VK Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-2 group shrink-0"
          aria-label="Vamsi Krishna Vadlamudi - Home"
        >
          <div className="w-8 h-8 rounded-full bg-[#171615] dark:bg-white text-white dark:text-[#171615] flex items-center justify-center font-bold text-xs tracking-tight group-hover:bg-[#E17A43] dark:group-hover:bg-[#E17A43] dark:group-hover:text-white transition-all shadow-xs">
            {PORTFOLIO_DATA.personal.initials}
          </div>
          <span className="text-xs font-bold text-[#171615] dark:text-[#E8E4DD] tracking-tight hidden lg:inline group-hover:text-[#E17A43] transition-colors">
            {PORTFOLIO_DATA.personal.shortName}
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-xs font-semibold tracking-wide transition-colors whitespace-nowrap relative py-1 ${
                  isActive
                    ? 'text-[#E17A43] font-bold'
                    : 'text-[#625E58] dark:text-[#A8A29E] hover:text-[#171615] dark:hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-[#E17A43] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Social Links, Theme Toggle, and Orange Resume Button */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* GitHub icon */}
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[#625E58] dark:text-[#A8A29E] hover:text-[#171615] dark:hover:text-white hover:bg-[#F7F4EE] dark:hover:bg-[#282624] transition-colors"
            title="GitHub (VamsiKrishna-9)"
            aria-label="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>

          {/* LinkedIn icon */}
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[#625E58] dark:text-[#A8A29E] hover:text-[#171615] dark:hover:text-white hover:bg-[#F7F4EE] dark:hover:bg-[#282624] transition-colors"
            title="LinkedIn (Vamsi Krishna Vadlamudi)"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>

          {/* Email icon */}
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[#625E58] dark:text-[#A8A29E] hover:text-[#171615] dark:hover:text-white hover:bg-[#F7F4EE] dark:hover:bg-[#282624] transition-colors"
            title={`Email (${PORTFOLIO_DATA.personal.email})`}
            aria-label="Send Email"
          >
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>

          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[#625E58] dark:text-[#A8A29E] hover:text-[#171615] dark:hover:text-white hover:bg-[#F7F4EE] dark:hover:bg-[#282624] transition-colors"
          >
            {isDark ? (
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E17A43]" />
            ) : (
              <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            )}
          </button>

          {/* Orange Resume Button */}
          <button
            onClick={onOpenResume}
            className="px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-[#E17A43] hover:bg-[#CF6B35] text-white text-xs font-bold transition-all btn-tactile shadow-xs flex items-center gap-1.5"
          >
            <Download className="w-3 h-3 text-white" />
            <span>Resume</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-[#171615] dark:text-[#E8E4DD] hover:bg-[#F7F4EE] dark:hover:bg-[#282624] transition-colors ml-0.5"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Pill-aligned floating menu) */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto absolute top-16 left-4 right-4 bg-white/95 dark:bg-[#1A1917]/95 backdrop-blur-md rounded-2xl border border-[#E6E0D7] dark:border-[#2E2B27] shadow-xl p-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#F7F4EE] dark:bg-[#262420] text-[#E17A43]'
                      : 'text-[#625E58] dark:text-[#A8A29E] hover:bg-[#F7F4EE]/60 dark:hover:bg-[#201F1D]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E17A43]" />}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
