import React from 'react';
import {
  ArrowDown,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HeroOrbitalCanvas } from './HeroOrbitalCanvas';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 84;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#E6E0D7]/70 dark:border-[#2C2926]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: Editorial Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Pill Badges: Availability & Location */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              {/* Availability pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#1E1D1A] border border-[#E6E0D7] dark:border-[#332F2A] shadow-2xs text-xs font-semibold text-[#171615] dark:text-[#E8E4DD]">
                <span className="w-2 h-2 rounded-full bg-[#E17A43] inline-block animate-pulse" />
                <span>{PORTFOLIO_DATA.personal.availability}</span>
              </div>

              {/* Location pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#1E1D1A] border border-[#E6E0D7] dark:border-[#332F2A] shadow-2xs text-xs font-medium text-[#625E58] dark:text-[#A8A29E]">
                <MapPin className="w-3 h-3 text-[#E17A43]" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
            </div>

            {/* Main Heading: Vamsi Krishna Vadlamudi (Extremely bold, tight tracking) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-[#171615] dark:text-[#FFFFFF] tracking-tight leading-[1.08] mb-3">
              {PORTFOLIO_DATA.personal.name}
            </h1>

            {/* Professional Subtitle: AI Engineer & Data Engineer (Italic Orange) */}
            <p className="text-xl sm:text-2xl md:text-[1.65rem] italic font-medium text-[#E17A43] mb-5 tracking-tight">
              {PORTFOLIO_DATA.personal.heroSubtitle}
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#625E58] dark:text-[#B8B4AC] leading-relaxed max-w-xl mb-8">
              {PORTFOLIO_DATA.personal.heroDescription}
            </p>

            {/* Primary Action Buttons: VIEW RESUME & VIEW PROJECTS */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#E17A43] text-white hover:bg-[#CF6B35] text-xs sm:text-sm font-bold tracking-wide uppercase transition-all btn-tactile shadow-sm flex items-center justify-center gap-2 group"
              >
                <span>View Resume</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white dark:bg-[#1C1A18] text-[#171615] dark:text-[#E8E4DD] border border-[#E6E0D7] dark:border-[#383531] hover:border-[#E17A43] dark:hover:border-[#E17A43] text-xs sm:text-sm font-bold tracking-wide uppercase transition-all btn-tactile shadow-2xs flex items-center justify-center gap-2"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 text-[#E17A43]" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Custom Animated AI Neural-Network Orbital Visualization */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <HeroOrbitalCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};
