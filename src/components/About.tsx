import React from 'react';
import {
  Brain,
  Database,
  Sparkles,
  Workflow,
  ArrowRight,
  GraduationCap,
  MapPin,
  CheckCircle2,
  Cpu,
  Sliders,
  Server,
  LayoutDashboard,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  const specializationIcons = {
    'ai-ml': Brain,
    'data-eng': Database,
    'gen-ai': Sparkles,
  };

  const lifecycleIcons = [
    Database,
    Cpu,
    Sliders,
    Server,
    LayoutDashboard,
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-20 sm:scroll-mt-24 border-b border-[#E6E0D7]/70 dark:border-[#2C2926]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">

        {/* ================= 1. WHO I AM: Personal Introduction & Academic Foundation ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Narrative Bio */}
          <ScrollReveal className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E17A43]">
                01 · Overview
              </span>
              <span className="h-px w-8 bg-[#E17A43]/40" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171615] dark:text-[#FFFFFF] tracking-tight mb-3">
              About Me
            </h2>
            <div className="w-14 h-1 bg-[#E17A43] rounded-full mb-6" />

            <p className="text-base sm:text-lg text-[#171615] dark:text-[#F3EFEA] font-medium leading-relaxed mb-4">
              {PORTFOLIO_DATA.personal.bio}
            </p>

            <p className="text-sm sm:text-base text-[#625E58] dark:text-[#A8A29E] leading-relaxed mb-6">
              My engineering philosophy revolves around building transparent, explainable, and performant AI systems. Whether formulating predictive machine learning models, orchestrating Medallion data pipelines, or fine-tuning retrieval-augmented LLM reasoning, I focus on transforming complex data into robust, production-ready applications.
            </p>

            {/* Quick Credentials / Status Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#1E1D1A] border border-[#E6E0D7] dark:border-[#332F2A] text-xs font-medium text-[#171615] dark:text-[#E8E4DD] shadow-2xs">
                <GraduationCap className="w-3.5 h-3.5 text-[#E17A43]" />
                <span>B.Tech in Data Science</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#1E1D1A] border border-[#E6E0D7] dark:border-[#332F2A] text-xs font-medium text-[#171615] dark:text-[#E8E4DD] shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#E17A43]" />
                <span>Guntur, Andhra Pradesh, India</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAECE4] dark:bg-[#2C1F17] border border-[#E17A43]/30 text-xs font-semibold text-[#E17A43] shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E17A43]" />
                <span>{PORTFOLIO_DATA.personal.availability}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Academic Foundation Card */}
          <ScrollReveal delay={120} className="lg:col-span-5 w-full">
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#1A1917] border border-[#E6E0D7] dark:border-[#2C2926] shadow-xs relative overflow-hidden card-technical">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E17A43] via-[#CF6B35] to-[#E17A43]/30" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#E17A43] font-bold">
                  Academic Foundation
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#FAECE4] dark:bg-[#2C1F17] text-[#E17A43] border border-[#E17A43]/20">
                  Graduated
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#171615] dark:text-[#FFFFFF] mb-1">
                B.Tech in Data Science
              </h3>
              <p className="text-sm font-medium text-[#625E58] dark:text-[#B8B4AC] mb-4">
                RVR & JC College of Engineering, Guntur
              </p>

              <p className="text-xs sm:text-sm text-[#625E58] dark:text-[#A8A29E] leading-relaxed mb-6">
                Comprehensive training in machine learning algorithms, deep neural network architectures, distributed data processing, probability & statistics, and software engineering.
              </p>

              <div className="pt-4 border-t border-[#E6E0D7]/70 dark:border-[#282624] space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#625E58] dark:text-[#9E9991]">Discipline:</span>
                  <span className="font-semibold text-[#171615] dark:text-[#E8E4DD]">Data Science & Engineering</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#625E58] dark:text-[#9E9991]">Specializations:</span>
                  <span className="font-semibold text-[#E17A43]">AI, ML, DL & Generative Systems</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#625E58] dark:text-[#9E9991]">Location:</span>
                  <span className="font-semibold text-[#171615] dark:text-[#E8E4DD]">Andhra Pradesh, India</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ================= 2. WHAT TECHNOLOGIES I WORK WITH: Three Compact Specialization Cards ================= */}
        <div>
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E17A43]">
                    02 · Core Focus
                  </span>
                  <span className="h-px w-8 bg-[#E17A43]/40" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171615] dark:text-[#FFFFFF] tracking-tight">
                  Core Specializations
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#625E58] dark:text-[#9E9991] max-w-md">
                Three interconnected technical domains driving intelligent solutions from structured data to intelligent user experiences.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.specializations.map((spec, idx) => {
              const IconComponent = specializationIcons[spec.id as keyof typeof specializationIcons] || Brain;
              return (
                <ScrollReveal key={spec.id} delay={idx * 100} className="h-full">
                  <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#1A1917] border border-[#E6E0D7] dark:border-[#2C2926] card-technical hover:border-[#E17A43]/70 group flex flex-col justify-between h-full">
                    <div>
                      {/* Icon & Title Row */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-[#FAECE4] dark:bg-[#2C1F17] flex items-center justify-center text-[#E17A43] group-hover:bg-[#E17A43] group-hover:text-white transition-colors duration-200 shadow-2xs">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-mono text-[#625E58] dark:text-[#8E8A83] font-medium tracking-wide uppercase">
                          Domain
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-[#171615] dark:text-[#FFFFFF] mb-1 group-hover:text-[#E17A43] transition-colors">
                        {spec.title}
                      </h4>

                      <p className="text-xs font-mono font-medium text-[#E17A43] mb-3">
                        {spec.focus}
                      </p>

                      <p className="text-xs sm:text-sm text-[#625E58] dark:text-[#A8A29E] leading-relaxed mb-6">
                        {spec.description}
                      </p>
                    </div>

                    {/* Skills Tag Pills */}
                    <div className="pt-4 border-t border-[#E6E0D7]/70 dark:border-[#282624] flex flex-wrap gap-1.5">
                      {spec.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#F7F4EE] dark:bg-[#22201D] text-[#625E58] dark:text-[#B5B0A8] border border-[#E6E0D7] dark:border-[#332F2A] group-hover:border-[#E17A43]/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* ================= 3. HOW I BUILD INTELLIGENT SYSTEMS: Renamed Lifecycle & Workflow ================= */}
        <ScrollReveal delay={50} className="bg-white dark:bg-[#1A1917] rounded-2xl p-6 sm:p-8 md:p-10 border border-[#E6E0D7] dark:border-[#2C2926] shadow-xs">
          {/* Workflow Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E6E0D7]/70 dark:border-[#282624]">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#FAECE4] dark:bg-[#2C1F17] flex items-center justify-center text-[#E17A43] shadow-2xs">
                <Workflow className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E17A43]">
                  03 · Engineering Workflow
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#171615] dark:text-[#FFFFFF] tracking-tight">
                  How I Build Intelligent Systems
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#625E58] dark:text-[#A8A29E] max-w-md italic">
              "{PORTFOLIO_DATA.personal.lifecycleNote}"
            </p>
          </div>

          {/* Stepped Process Grid across 5 stages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PORTFOLIO_DATA.developmentLifecycle.map((item, index) => {
              const StageIcon = lifecycleIcons[index] || Cpu;
              return (
                <div
                  key={item.step}
                  style={{
                    transitionDelay: `${index * 60}ms`,
                  }}
                  className="relative p-5 rounded-xl bg-[#F7F4EE] dark:bg-[#201F1D] border border-[#E6E0D7] dark:border-[#2E2B27] flex flex-col justify-between card-technical group hover:border-[#E17A43]/60 transition-all"
                >
                  <div>
                    {/* Step indicator header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-white dark:bg-[#171615] border border-[#E6E0D7] dark:border-[#332F2A] flex items-center justify-center text-[11px] font-mono font-bold text-[#E17A43]">
                          {item.step}
                        </span>
                        <div className="w-6 h-6 rounded-md bg-[#FAECE4] dark:bg-[#2E2018] flex items-center justify-center text-[#E17A43]">
                          <StageIcon className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {index < PORTFOLIO_DATA.developmentLifecycle.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-[#625E58]/40 dark:text-[#666] hidden lg:block group-hover:text-[#E17A43] group-hover:translate-x-0.5 transition-all" />
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-[#171615] dark:text-[#E8E4DD] mb-2 leading-snug group-hover:text-[#E17A43] transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs text-[#625E58] dark:text-[#9F9B93] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
