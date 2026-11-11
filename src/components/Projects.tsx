import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  TrendingUp,
  Sparkles,
  FolderGit2,
} from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ScrollReveal } from './ScrollReveal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative scroll-mt-20 sm:scroll-mt-24 border-b border-[#E6E0D7]/70 dark:border-[#2C2926]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER (Matching Work Experience) ================= */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E17A43]">
                05 // FEATURED PROJECTS
              </span>
              <span className="h-px w-8 bg-[#E17A43]/40" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171615] dark:text-[#FFFFFF] tracking-tight mb-3">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-[#E17A43] rounded-full mb-4" />

            <p className="text-sm sm:text-base text-[#625E58] dark:text-[#A8A29E] leading-relaxed">
              Production-grade systems and architecture across healthcare operations, student placement platforms, explainable deep learning, enterprise data warehouses, and executive business intelligence.
            </p>
          </div>
        </ScrollReveal>

        {/* ================= VERTICAL TIMELINE CONTAINER (Identical to Work Experience) ================= */}
        <div className="relative pl-4 sm:pl-6 md:pl-10 border-l-2 border-[#E6E0D7] dark:border-[#2C2926] space-y-10 sm:space-y-12 ml-2 sm:ml-4">
          {PORTFOLIO_DATA.projects.map((project: ProjectItem, index: number) => {
            const isPersonal = project.isFeaturedPersonal;

            return (
              <ScrollReveal key={project.id} delay={index * 100} className="relative group">
                
                {/* Timeline circular node marker on the vertical rail */}
                <div
                  className={`absolute -left-[25px] sm:-left-[33px] md:-left-[49px] top-6 w-8 h-8 rounded-full bg-white dark:bg-[#1A1917] border-2 flex items-center justify-center shadow-xs transition-transform group-hover:scale-110 font-mono font-bold text-xs ${
                    isPersonal
                      ? 'border-[#E17A43] text-[#E17A43] ring-4 ring-[#E17A43]/20'
                      : 'border-[#E17A43] text-[#E17A43]'
                  }`}
                  aria-hidden="true"
                >
                  {project.projectNumber}
                </div>

                {/* Main Project Card (Light card surface matching Work Experience) */}
                <div
                  className={`p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1A1917] border shadow-2xs card-technical transition-all duration-200 ${
                    isPersonal
                      ? 'border-[#E17A43]/50 ring-1 ring-[#E17A43]/20 hover:border-[#E17A43]'
                      : 'border-[#E6E0D7] dark:border-[#2C2926] hover:border-[#E17A43]/60'
                  }`}
                >
                  
                  {/* Top Bar: Category, Project Number, Status Badges */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-5 border-b border-[#E6E0D7]/70 dark:border-[#282624]">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-sm font-bold font-mono text-[#E17A43] uppercase tracking-wider flex items-center gap-1.5">
                          <FolderGit2 className="w-3.5 h-3.5 text-[#E17A43]" />
                          {project.category}
                        </span>

                        <span className="text-xs text-[#625E58] dark:text-[#8E8A83] font-mono">
                          (PRJ // {project.projectNumber})
                        </span>

                        {project.projectType && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FAECE4] dark:bg-[#2C1F17] text-[#E17A43] border border-[#E17A43]/30">
                            <Sparkles className="w-3 h-3 text-[#E17A43]" />
                            {project.projectType}
                          </span>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#171615] dark:text-[#FFFFFF] tracking-tight group-hover:text-[#E17A43] transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    {/* Right side: Status Badge (BETA STAGE, etc.) */}
                    {project.statusBadge && (
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E17A43] text-white text-xs font-bold uppercase tracking-wider shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          {project.statusBadge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Description */}
                  <p className="text-sm sm:text-base text-[#625E58] dark:text-[#B8B4AC] leading-relaxed my-4 font-normal">
                    {project.description}
                  </p>

                  {/* Specific Key Metrics for Project 05 (Sales Dashboard) */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="mb-6 p-4 rounded-xl bg-[#F7F4EE] dark:bg-[#201F1D] border border-[#E6E0D7] dark:border-[#2E2B27]">
                      <div className="flex items-center gap-1.5 mb-2.5">
                        <TrendingUp className="w-3.5 h-3.5 text-[#E17A43]" />
                        <span className="text-xs font-mono uppercase tracking-wider text-[#E17A43] font-bold">
                          Verified Performance Metrics & Business Figures:
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {project.metrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-3 rounded-lg bg-white dark:bg-[#171615] border border-[#E6E0D7] dark:border-[#2C2926] text-center shadow-2xs"
                          >
                            <span className="text-base sm:text-lg font-extrabold text-[#E17A43] font-mono block">
                              {metric.value}
                            </span>
                            <span className="text-xs text-[#625E58] dark:text-[#A8A29E] block mt-0.5 font-medium">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Highlights List */}
                  <div className="mt-3 mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#625E58] dark:text-[#8E8A83] font-semibold mb-3">
                      Key Architectural & Engineering Highlights:
                    </h4>
                    <ul className="space-y-2.5">
                      {project.highlights.map((highlight: string, hIdx: number) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-sm text-[#171615]/90 dark:text-[#D6D2CB] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#E17A43] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
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
                      {project.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#F7F4EE] dark:bg-[#22201D] text-[#171615] dark:text-[#D1CDC5] border border-[#E6E0D7] dark:border-[#332F2A] hover:border-[#E17A43]/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-5 mt-4 border-t border-[#E6E0D7]/70 dark:border-[#282624]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#625E58] dark:text-[#A8A29E] hover:text-[#E17A43] transition-colors cursor-pointer group/btn"
                    >
                      <span>Deep Dive Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#E17A43] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>

                    <div className="flex flex-wrap items-center gap-2.5">
                      {/* GitHub Button - ONLY if valid githubUrl exists */}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#201E1C] border border-[#E6E0D7] dark:border-[#383531] text-xs font-semibold text-[#171615] dark:text-[#D1CDC5] hover:border-[#E17A43] hover:text-[#E17A43] transition-all btn-tactile shadow-2xs"
                        >
                          <Github className="w-3.5 h-3.5 text-[#E17A43]" />
                          <span>View Source Code</span>
                          <ExternalLink className="w-3 h-3 text-[#625E58]" />
                        </a>
                      )}

                      {/* Research Paper Link - For Project 03 */}
                      {project.researchPaperUrl && (
                        <a
                          href={project.researchPaperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#201E1C] border border-[#E6E0D7] dark:border-[#383531] text-xs font-semibold text-[#171615] dark:text-[#D1CDC5] hover:border-[#E17A43] hover:text-[#E17A43] transition-all btn-tactile shadow-2xs"
                        >
                          <FileText className="w-3.5 h-3.5 text-[#E17A43]" />
                          <span>View Research Paper</span>
                          <ExternalLink className="w-3 h-3 text-[#625E58]" />
                        </a>
                      )}

                      {/* Live Demo Button - ONLY if valid demoUrl exists */}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#E17A43] text-white hover:bg-[#CF6B35] text-xs font-bold transition-all btn-tactile shadow-2xs"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
