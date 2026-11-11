import React from 'react';
import {
  Calendar,
  Building2,
  Award,
  Trophy,
  Sparkles,
  Activity,
  Linkedin,
  ExternalLink,
  MapPin,
} from 'lucide-react';
import { PORTFOLIO_DATA, EducationItem, AchievementItem } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Education: React.FC = () => {
  return (
    <>
      {/* ================= EDUCATION SECTION ================= */}
      <section id="education" className="py-20 md:py-28 relative scroll-mt-20 sm:scroll-mt-24 border-b border-[#E6E0D7]/70 dark:border-[#2C2926]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E17A43]">
                  06 // ACADEMIC BACKGROUND
                </span>
                <span className="h-px w-8 bg-[#E17A43]/40" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171615] dark:text-[#FFFFFF] tracking-tight mb-3">
                Education
              </h2>
              <div className="w-16 h-1 bg-[#E17A43] rounded-full mb-4" />

              <p className="text-sm sm:text-base text-[#625E58] dark:text-[#A8A29E] leading-relaxed">
                Formal academic qualifications in computer science, data science, mathematics, and foundational sciences.
              </p>
            </div>
          </ScrollReveal>

          {/* Three Equal-Sized Education Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {PORTFOLIO_DATA.education.map((edu: EducationItem, index: number) => (
              <ScrollReveal key={index} delay={index * 120} className="h-full">
                <div
                  className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#1A1917] border border-[#E6E0D7] dark:border-[#2C2926] shadow-2xs card-technical hover:border-[#E17A43]/60 transition-all flex flex-col justify-between h-full group relative overflow-hidden"
                >
                {/* Subtle top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E17A43] via-[#CF6B35] to-[#E17A43]/30 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Card Top: Qualification Label (Left) and Duration (Right) */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#FAECE4] dark:bg-[#2C1F17] text-[#E17A43] border border-[#E17A43]/30 shadow-2xs">
                      {edu.label}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#625E58] dark:text-[#A8A29E]">
                      <Calendar className="w-3.5 h-3.5 text-[#E17A43]" />
                      <span>{edu.duration}</span>
                    </span>
                  </div>

                  {/* Degree / Qualification Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#171615] dark:text-[#FFFFFF] mb-3 tracking-tight group-hover:text-[#E17A43] transition-colors leading-snug">
                    {edu.degree}
                  </h3>

                  {/* Institution Name & Board */}
                  <div className="space-y-1 mb-6">
                    <p className="text-sm font-medium text-[#625E58] dark:text-[#A8A29E] leading-relaxed flex items-start gap-1.5">
                      <Building2 className="w-4 h-4 text-[#E17A43] shrink-0 mt-0.5" />
                      <span>{edu.institution}</span>
                    </p>

                    {edu.board && (
                      <p className="text-xs font-mono text-[#625E58]/80 dark:text-[#8E8A83] pl-5.5">
                        Board: <span className="font-semibold text-[#171615] dark:text-[#D1CDC5]">{edu.board}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Bottom: Horizontal Divider & Evaluation Badge */}
                <div>
                  <div className="w-full h-px bg-[#E6E0D7]/70 dark:bg-[#282624] mb-4" />

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#625E58] dark:text-[#8E8A83] font-semibold">
                      Evaluation
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono font-bold bg-[#FAECE4] dark:bg-[#2C1F17] text-[#E17A43] border border-[#E17A43]/30 shadow-2xs group-hover:bg-[#E17A43] group-hover:text-white transition-colors">
                      <Award className="w-3.5 h-3.5" />
                      <span>{edu.evaluation}</span>
                    </span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>

    {/* ================= ACHIEVEMENTS & ACTIVITIES SECTION (Exactly Five Entries) ================= */}
    <section id="achievements" className="py-20 md:py-28 relative scroll-mt-20 sm:scroll-mt-24 border-b border-[#E6E0D7]/70 dark:border-[#2C2926]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E17A43]">
                07 // ACHIEVEMENTS & ACTIVITIES
              </span>
              <span className="h-px w-8 bg-[#E17A43]/40" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171615] dark:text-[#FFFFFF] tracking-tight mb-3">
              Achievements & Activities
            </h2>
            <div className="w-16 h-1 bg-[#E17A43] rounded-full mb-4" />

            <p className="text-sm sm:text-base text-[#625E58] dark:text-[#A8A29E] leading-relaxed">
              Competitive honors, hackathon innovation, and national & inter-university sports representation.
            </p>
          </div>
        </ScrollReveal>

        {/* Exactly Five Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {PORTFOLIO_DATA.achievements.map((item: AchievementItem, index: number) => {
            // Icon selection based on achievement category/type
            const getIcon = () => {
              if (item.category === 'sports') return Activity;
              if (item.isPlacement) return Trophy;
              return Sparkles;
            };
            const ItemIcon = getIcon();

            return (
              <ScrollReveal key={item.id || index} delay={index * 90} className="h-full">
                <div
                  className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#1A1917] border border-[#E6E0D7] dark:border-[#2C2926] shadow-2xs card-technical hover:border-[#E17A43]/60 transition-all flex flex-col justify-between h-full group relative overflow-hidden"
                >
                  {/* Subtle top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E17A43] via-[#CF6B35] to-[#E17A43]/30 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Top Row: Icon on left, Badges / Year on right */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#FAECE4] dark:bg-[#2E2018] flex items-center justify-center text-[#E17A43] shrink-0 group-hover:bg-[#E17A43] group-hover:text-white transition-all shadow-2xs">
                        <ItemIcon className="w-5 h-5 stroke-[1.75]" />
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 justify-end">
                        {/* Light orange highlight badge for 2nd Place / 4th Place */}
                        {item.recognition && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FAECE4] dark:bg-[#2C1F17] text-[#E17A43] border border-[#E17A43]/40 shadow-2xs">
                            <Trophy className="w-3.5 h-3.5 text-[#E17A43]" />
                            <span>{item.recognition}</span>
                          </span>
                        )}

                        {/* Participation indicator badge */}
                        {item.badge && !item.recognition && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#F7F4EE] dark:bg-[#22201D] text-[#625E58] dark:text-[#A8A29E] border border-[#E6E0D7] dark:border-[#332F2A]">
                            <span>{item.badge}</span>
                          </span>
                        )}

                        {/* Year Badge */}
                        {item.year && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold text-[#625E58] dark:text-[#A8A29E] bg-[#F7F4EE] dark:bg-[#22201D] border border-[#E6E0D7] dark:border-[#332F2A]">
                            <Calendar className="w-3 h-3 text-[#E17A43]" />
                            <span>{item.year}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#171615] dark:text-[#FFFFFF] group-hover:text-[#E17A43] transition-colors mb-2.5 leading-snug">
                      {item.title}
                    </h3>

                    {/* Institution Represented & Venue when available */}
                    {(item.institutionRepresented || item.venue) && (
                      <div className="space-y-1 mb-3 pt-1 border-t border-[#E6E0D7]/50 dark:border-[#282624]">
                        {item.institutionRepresented && (
                          <p className="text-xs font-medium text-[#625E58] dark:text-[#8E8A83] flex items-start gap-1.5 pt-1">
                            <Building2 className="w-3.5 h-3.5 text-[#E17A43] shrink-0 mt-0.5" />
                            <span>Represented: <span className="text-[#171615] dark:text-[#D1CDC5] font-semibold">{item.institutionRepresented}</span></span>
                          </p>
                        )}
                        {item.venue && (
                          <p className="text-xs font-medium text-[#625E58] dark:text-[#8E8A83] flex items-start gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#E17A43] shrink-0 mt-0.5" />
                            <span>Venue: <span className="text-[#171615] dark:text-[#D1CDC5] font-semibold">{item.venue}</span></span>
                          </p>
                        )}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#625E58] dark:text-[#A8A29E] leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom: Type label and clickable LinkedIn link if present */}
                  <div className="pt-4 border-t border-[#E6E0D7]/70 dark:border-[#282624] mt-auto flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-[#625E58] dark:text-[#8E8A83] uppercase tracking-wider font-medium">
                      {item.type}
                    </span>

                    {item.linkedinUrl && (
                      <a
                        href={item.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E17A43] hover:text-[#CF6B35] transition-colors"
                        title="View Recognition on LinkedIn"
                      >
                        <Linkedin className="w-3.5 h-3.5 text-[#E17A43]" />
                        <span>View on LinkedIn</span>
                        <ExternalLink className="w-3 h-3 text-[#E17A43]" />
                      </a>
                    )}
                  </div>

                </div>
              </ScrollReveal>
            );
            })}
          </div>

        </div>
      </section>
    </>
  );
};
