import React, { useState, useMemo } from 'react';
import {
  Terminal,
  Database,
  Sparkles,
  Layers,
  Bot,
  Workflow,
  Network,
  MessageSquareCode,
  Zap,
  Brain,
  Cpu,
  Sliders,
  Binary,
  Languages,
  Eye,
  ScanSearch,
  Table,
  Calculator,
  BarChart2,
  PieChart,
  Filter,
  Boxes,
  SearchCheck,
  ArrowLeftRight,
  BarChart3,
  Sheet,
  BookOpen,
  Server,
  HardDrive,
  GitBranch,
  Github,
  Code2,
  Laptop,
  Compass,
} from 'lucide-react';
import { PORTFOLIO_DATA, TechnicalSkill } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

// Map icon name to Lucide icon component
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Terminal,
  Database,
  Sparkles,
  Layers,
  Bot,
  Workflow,
  Network,
  MessageSquareCode,
  Zap,
  Brain,
  Cpu,
  Sliders,
  Binary,
  Languages,
  Eye,
  ScanSearch,
  Table,
  Calculator,
  BarChart2,
  PieChart,
  Filter,
  Boxes,
  SearchCheck,
  ArrowLeftRight,
  BarChart3,
  Sheet,
  BookOpen,
  Server,
  HardDrive,
  GitBranch,
  Github,
  Code2,
  Laptop,
  Compass,
};

const FILTER_CATEGORIES = [
  'All',
  'Programming',
  'Generative AI',
  'Machine Learning',
  'Data Analysis',
  'Data Engineering',
  'Databases',
  'Developer Tools',
] as const;

type FilterCategoryType = (typeof FILTER_CATEGORIES)[number];

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategoryType>('All');
  const [selectedSkill, setSelectedSkill] = useState<TechnicalSkill | null>(null);

  const allSkills = PORTFOLIO_DATA.technicalSkills;

  // Filter skills based on selected category
  const filteredSkills = useMemo(() => {
    if (activeFilter === 'All') return allSkills;
    if (activeFilter === 'Machine Learning') {
      return allSkills.filter((s) => s.category === 'Machine Learning & Deep Learning');
    }
    if (activeFilter === 'Data Analysis') {
      return allSkills.filter((s) => s.category === 'Data Analysis & Visualization');
    }
    return allSkills.filter((s) => s.category === activeFilter);
  }, [activeFilter, allSkills]);

  // Infinite Marquee list duplicated
  const marqueeSkills = useMemo(() => {
    return [...allSkills, ...allSkills];
  }, [allSkills]);

  return (
    <section id="skills" className="py-20 md:py-28 relative scroll-mt-20 sm:scroll-mt-24 border-b border-[#E6E0D7]/70 dark:border-[#2C2926]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= 1. SECTION HEADER & COMPACT FILTER NAV ================= */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E17A43]">
                  03 // TECHNICAL MATRIX
                </span>
                <span className="h-px w-8 bg-[#E17A43]/40" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171615] dark:text-[#FFFFFF] tracking-tight mb-2">
                Technical Skills
              </h2>

              <p className="text-sm text-[#625E58] dark:text-[#A8A29E] leading-relaxed">
                Core engineering proficiencies across AI systems, data science pipelines, backend services, and cloud tools.
              </p>
            </div>

            {/* Compact Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 lg:justify-end">
              {FILTER_CATEGORIES.map((cat) => {
                const isActive = activeFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#171615] text-white dark:bg-white dark:text-[#171615] shadow-xs ring-1 ring-[#171615] dark:ring-white scale-[1.02]'
                        : 'bg-white dark:bg-[#1E1D1A] text-[#625E58] dark:text-[#A8A29E] border border-[#E6E0D7] dark:border-[#332F2A] hover:border-[#E17A43]/60 hover:text-[#171615] dark:hover:text-white'
                    }`}
                    aria-pressed={isActive}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* ================= 2. COMPACT SKILLS MATRIX GRID ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3 transition-all duration-300">
          {filteredSkills.map((skill: TechnicalSkill, index: number) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            const isSelected = selectedSkill?.name === skill.name;

            return (
              <button
                key={skill.name}
                type="button"
                onClick={() => setSelectedSkill(isSelected ? null : skill)}
                style={{
                  transitionDelay: `${(index % 12) * 25}ms`,
                }}
                className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between group relative select-none animate-in fade-in zoom-in-95 fill-mode-both ${
                  isSelected
                    ? 'bg-[#FAECE4] dark:bg-[#2C1F17] border-2 border-[#E17A43] ring-2 ring-[#E17A43]/20 shadow-xs'
                    : 'bg-white dark:bg-[#1A1917] border-[#E6E0D7] dark:border-[#2C2926] shadow-2xs hover:border-[#E17A43]/60 hover:-translate-y-0.5'
                }`}
                title={skill.name}
              >
                {/* Active indicator dot */}
                {isSelected && (
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#E17A43] animate-pulse" />
                )}

                <div>
                  {/* Icon Row */}
                  <div className="flex items-center justify-between gap-1.5 mb-2">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#E17A43] text-white shadow-xs'
                          : 'bg-[#FAECE4] dark:bg-[#2E2018] text-[#E17A43] group-hover:bg-[#E17A43] group-hover:text-white'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Skill Name */}
                  <h3
                    className={`text-xs sm:text-[13px] font-bold leading-snug break-words transition-colors ${
                      isSelected
                        ? 'text-[#171615] dark:text-white'
                        : 'text-[#171615] dark:text-[#FFFFFF] group-hover:text-[#E17A43]'
                    }`}
                  >
                    {skill.name}
                  </h3>
                </div>

                {/* Category label */}
                <p className="text-[10px] text-[#625E58] dark:text-[#9E9991] font-medium leading-tight mt-1.5 truncate">
                  {skill.category}
                </p>
              </button>
            );
          })}
        </div>

        {/* ================= 3. CONTINUOUS SCROLLING SKILLS MARQUEE ================= */}
        <ScrollReveal delay={80} className="mt-8 pt-6 border-t border-[#E6E0D7]/70 dark:border-[#2C2926] relative overflow-hidden select-none">
          {/* Left & Right Edge Gradients for seamless infinite fade */}
          <div className="absolute left-0 top-6 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#F7F4EE] dark:from-[#121110] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-6 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#F7F4EE] dark:from-[#121110] to-transparent z-10 pointer-events-none" />

          {/* Continuous Infinite Marquee Strip */}
          <div className="w-full overflow-hidden bg-[#EFE9DF]/40 dark:bg-[#161514] border-y border-[#E6E0D7] dark:border-[#2C2926] py-2.5 rounded-xl">
            <div className="animate-skill-ticker flex items-center">
              {marqueeSkills.map((skill: TechnicalSkill, idx: number) => {
                const IconComponent = iconMap[skill.icon] || Code2;
                return (
                  <div
                    key={`${skill.name}-${idx}`}
                    onClick={() => setSelectedSkill(skill)}
                    className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#1A1917] border border-[#E6E0D7] dark:border-[#2C2926] shadow-2xs mx-1.5 shrink-0 select-none group/item hover:border-[#E17A43]/60 transition-colors cursor-pointer"
                  >
                    <div className="w-6 h-6 rounded-md bg-[#FAECE4] dark:bg-[#2C1F17] flex items-center justify-center text-[#E17A43] group-hover/item:bg-[#E17A43] group-hover/item:text-white transition-colors shrink-0">
                      <IconComponent className="w-3.5 h-3.5 stroke-[1.75]" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold text-[#171615] dark:text-[#FFFFFF] whitespace-nowrap group-hover/item:text-[#E17A43] transition-colors leading-tight">
                        {skill.name}
                      </span>
                      <span className="text-[9px] text-[#625E58] dark:text-[#9E9991] font-medium whitespace-nowrap leading-none mt-0.5">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
