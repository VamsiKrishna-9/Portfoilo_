import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="bg-white/80 dark:bg-[#141312]/80 border-t border-[#E6E0D7] dark:border-[#282624] py-12 text-[#625E58] dark:text-[#A8A29E] relative z-10 backdrop-blur-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E6E0D7]/70 dark:border-[#282624]">
          {/* Brand info */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-full bg-[#171615] dark:bg-white text-white dark:text-[#171615] flex items-center justify-center font-bold text-xs tracking-tight shadow-xs">
              {PORTFOLIO_DATA.personal.initials}
            </div>
            <div>
              <p className="text-base font-bold text-[#171615] dark:text-[#FFFFFF]">
                {PORTFOLIO_DATA.personal.name}
              </p>
              <p className="text-xs font-mono text-[#E17A43] font-medium">
                AI Engineer & Data Scientist
              </p>
            </div>
          </div>

          {/* Quick Links with smooth scroll */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold">
            <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-[#E17A43] transition-colors">
              About
            </a>
            <a href="#skills" onClick={(e) => scrollToSection(e, '#skills')} className="hover:text-[#E17A43] transition-colors">
              Skills
            </a>
            <a href="#experience" onClick={(e) => scrollToSection(e, '#experience')} className="hover:text-[#E17A43] transition-colors">
              Experience
            </a>
            <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="hover:text-[#E17A43] transition-colors">
              Projects
            </a>
            <a href="#education" onClick={(e) => scrollToSection(e, '#education')} className="hover:text-[#E17A43] transition-colors">
              Education
            </a>
            <a href="#achievements" onClick={(e) => scrollToSection(e, '#achievements')} className="hover:text-[#E17A43] transition-colors">
              Achievements
            </a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-[#E17A43] transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#F7F4EE] dark:bg-[#1E1D1A] border border-[#E6E0D7] dark:border-[#332F2A] flex items-center justify-center text-[#625E58] dark:text-[#A8A29E] hover:text-[#171615] dark:hover:text-white hover:border-[#E17A43] transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile (https://github.com/VamsiKrishna-9)"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#F7F4EE] dark:bg-[#1E1D1A] border border-[#E6E0D7] dark:border-[#332F2A] flex items-center justify-center text-[#625E58] dark:text-[#A8A29E] hover:text-[#171615] dark:hover:text-white hover:border-[#E17A43] transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile (Vamsi Krishna Vadlamudi)"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="w-8 h-8 rounded-full bg-[#F7F4EE] dark:bg-[#1E1D1A] border border-[#E6E0D7] dark:border-[#332F2A] flex items-center justify-center text-[#625E58] dark:text-[#A8A29E] hover:text-[#171615] dark:hover:text-white hover:border-[#E17A43] transition-colors"
              aria-label="Email"
              title={`Email ${PORTFOLIO_DATA.personal.email}`}
            >
              <Mail className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#171615] text-white dark:bg-white dark:text-[#171615] flex items-center justify-center hover:bg-[#E17A43] dark:hover:bg-[#E17A43] dark:hover:text-white transition-colors ml-2 btn-tactile shadow-xs"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#625E58]/80 dark:text-[#9E9991]">
          <p>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-[#625E58]/70">
            AI Engineer & Data Scientist // Technical Architecture
          </p>
        </div>
      </div>
    </footer>
  );
};
