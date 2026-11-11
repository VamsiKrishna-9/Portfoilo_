import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Award,
  CheckCircle2,
  Users,
  Building2,
  Laptop,
} from 'lucide-react';
import { PORTFOLIO_DATA, ExperienceItem } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative scroll-mt-20 sm:scroll-mt-24 border-b border-[#E6E0D7]/70 dark:border-[#2C2926]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E17A43]">
                04 // WORK EXPERIENCE
              </span>
              <span className="h-px w-8 bg-[#E17A43]/40" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171615] dark:text-[#FFFFFF] tracking-tight mb-3">
              Work Experience
            </h2>
            <div className="w-16 h-1 bg-[#E17A43] rounded-full mb-4" />

            <p className="text-sm sm:text-base text-[#625E58] dark:text-[#A8A29E] leading-relaxed">
              Hands-on industry engineering leadership, AI application workflows, cloud systems foundations, and data architecture internships.
            </p>
          </div>
        </ScrollReveal>

        {/* ================= VERTICAL TIMELINE CONTAINER ================= */}
        <div className="relative pl-4 sm:pl-6 md:pl-10 border-l-2 border-[#E6E0D7] dark:border-[#2C2926] space-y-10 sm:space-y-12 ml-2 sm:ml-4">
          {PORTFOLIO_DATA.experience.map((exp: ExperienceItem, index: number) => {
            return (
              <ScrollReveal key={exp.id || index} delay={index * 110} className="relative group">
                
                {/* Timeline node marker on the vertical rail */}
                <div
                  className={`absolute -left-[25px] sm:-left-[33px] md:-left-[49px] top-6 w-8 h-8 rounded-full bg-white dark:bg-[#1A1917] border-2 flex items-center justify-center shadow-xs transition-transform group-hover:scale-110 ${
                    exp.isCurrent
                      ? 'border-[#E17A43] text-[#E17A43] ring-4 ring-[#E17A43]/20'
                      : 'border-[#E6E0D7] dark:border-[#332F2A] text-[#625E58] dark:text-[#A8A29E] group-hover:border-[#E17A43] group-hover:text-[#E17A43]'
                  }`}
                  aria-hidden="true"
                >
                  {exp.isCurrent ? (
                    <Briefcase className="w-4 h-4 text-[#E17A43]" />
                  ) : (
                    <Award className="w-4 h-4" />
                  )}
                </div>

                {/* Main Experience Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1A1917] border border-[#E6E0D7] dark:border-[#2C2926] shadow-2xs card-technical hover:border-[#E17A43]/60 transition-all">
                  
                  {/* Top Bar: Role, Company, and Current/Status Badge */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-5 border-b border-[#E6E0D7]/70 dark:border-[#282624]">
                    <div>
                      {/* Organization & Parent Org */}
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-sm font-bold font-mono text-[#E17A43] uppercase tracking-wider flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-[#E17A43]" />
                          {exp.company}
                        </span>

                        {exp.parentOrg && (
                          <span className="text-xs text-[#625E58] dark:text-[#8E8A83] font-medium">
                            ({exp.parentOrg})
                          </span>
                        )}

                        {exp.position && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FAECE4] dark:bg-[#2C1F17] text-[#E17A43] border border-[#E17A43]/30">
                            <Users className="w-3 h-3 text-[#E17A43]" />
                            {exp.position}
                          </span>
                        )}
                      </div>

                      {/* Main Role Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#171615] dark:text-[#FFFFFF] tracking-tight">
                        {exp.title}
                      </h3>
                    </div>

                    {/* Right side: Current Badge & Period */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E17A43] text-white text-xs font-bold uppercase tracking-wider shadow-xs animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                          CURRENT
                        </span>
                      )}

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F7F4EE] dark:bg-[#22201D] border border-[#E6E0D7] dark:border-[#332F2A] text-xs font-mono font-medium text-[#171615] dark:text-[#D1CDC5]">
                        <Calendar className="w-3.5 h-3.5 text-[#E17A43]" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Metadata Row: Joining Date, Location, Work Mode, Credential Link */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-3 text-xs text-[#625E58] dark:text-[#A8A29E] font-medium">
                    {exp.joiningDate && (
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#625E58] dark:text-[#888]">Joining Date:</span>
                        <span className="font-semibold text-[#171615] dark:text-[#E8E4DD]">{exp.joiningDate}</span>
                      </div>
                    )}

                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#E17A43]" />
                      <span>{exp.location}</span>
                    </div>

                    {exp.workMode && (
                      <div className="flex items-center gap-1.5">
                        <Laptop className="w-3.5 h-3.5 text-[#E17A43]" />
                        <span>{exp.workMode}</span>
                      </div>
                    )}

                    {exp.duration && !exp.isCurrent && (
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#625E58] dark:text-[#888]">Duration:</span>
                        <span className="font-semibold text-[#171615] dark:text-[#E8E4DD]">{exp.duration}</span>
                      </div>
                    )}

                    {/* Credly Verified Credential Link */}
                    {exp.credentialUrl && (
                      <a
                        href={exp.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-[#E17A43] hover:text-[#CF6B35] underline underline-offset-4 decoration-[#E17A43]/50 transition-colors ml-auto sm:ml-0"
                      >
                        <Award className="w-3.5 h-3.5 text-[#E17A43]" />
                        <span>{exp.credentialName || 'View Credential'}</span>
                        <ExternalLink className="w-3 h-3 text-[#E17A43]" />
                      </a>
                    )}
                  </div>

                  {/* Responsibilities & Achievements List */}
                  <div className="mt-3 mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#625E58] dark:text-[#8E8A83] font-semibold mb-3">
                      Key Contributions & Engineering Scope:
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.description.map((bullet: string, bIdx: number) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-sm text-[#171615]/90 dark:text-[#D6D2CB] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#E17A43] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div className="pt-4 border-t border-[#E6E0D7]/70 dark:border-[#282624]">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-mono text-[#625E58] dark:text-[#8E8A83] mr-2">
                        Technologies:
                      </span>
                      {exp.skills.map((skill: string) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#F7F4EE] dark:bg-[#22201D] text-[#171615] dark:text-[#D1CDC5] border border-[#E6E0D7] dark:border-[#332F2A] hover:border-[#E17A43]/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
