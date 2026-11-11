import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, FileText, BarChart3 } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#1A1917] text-[#EDEAE4] rounded-2xl border border-[#2D2A26] shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Top Bar */}
        <div className="p-6 bg-[#201E1B] border-b border-[#2D2A26] flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-[#E17A43] uppercase tracking-wider">
                PRJ // {project.projectNumber} · {project.category}
              </span>

              {project.statusBadge && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#E17A43]/15 text-[#E17A43] border border-[#E17A43]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E17A43] animate-pulse" />
                  {project.statusBadge}
                </span>
              )}

              {project.projectType && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#332F2A] text-[#EDEAE4] border border-[#443F39]">
                  {project.projectType}
                </span>
              )}
            </div>

            <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#A8A29E] hover:text-white hover:bg-[#2C2926] transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A8A29E] mb-2 font-semibold">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-[#D4CFC7] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Metrics / Dashboard Figures if present */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="p-4 rounded-xl bg-[#22201D] border border-[#332F2A]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#E17A43] font-semibold mb-3 flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-[#E17A43]" />
                Key Dashboard Figures & Analytics
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#171615] border border-[#2E2B27] text-center">
                    <p className="text-base sm:text-lg font-extrabold text-[#E17A43] font-mono">
                      {m.value}
                    </p>
                    <p className="text-[11px] text-[#A8A29E] mt-0.5">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Architecture & Engineering Highlights */}
          <div className="p-5 rounded-xl bg-[#22201D] border border-[#332F2A]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#E17A43] font-semibold mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              Key Features & Architectural Highlights
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D4CFC7] leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#E17A43] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A8A29E] mb-3 font-semibold">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#252320] text-[#D8D4CC] border border-[#38342F]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-5 sm:p-6 bg-[#201E1B] border-t border-[#2D2A26] flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-[#8E8A83] font-mono">
            Verified implementation & architecture
          </p>

          <div className="flex flex-wrap items-center gap-2.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2A2724] text-white border border-[#3E3A34] hover:border-[#E17A43] text-xs font-semibold transition-all btn-tactile shadow-xs"
              >
                <Github className="w-3.5 h-3.5 text-[#E17A43]" />
                <span>View Source Code</span>
                <ExternalLink className="w-3 h-3 text-[#A8A29E]" />
              </a>
            )}

            {project.researchPaperUrl && (
              <a
                href={project.researchPaperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2A2724] text-white border border-[#3E3A34] hover:border-[#E17A43] text-xs font-semibold transition-all btn-tactile shadow-xs"
              >
                <FileText className="w-3.5 h-3.5 text-[#E17A43]" />
                <span>View Research Paper</span>
                <ExternalLink className="w-3 h-3 text-[#A8A29E]" />
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E17A43] text-white hover:bg-[#CF6B35] text-xs font-bold transition-all btn-tactile shadow-xs"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
