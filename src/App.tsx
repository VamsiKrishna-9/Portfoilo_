/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TechnicalGridBackground } from './components/TechnicalGridBackground';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE] text-[#171615] dark:bg-[#121110] dark:text-[#E8E4DD] transition-colors duration-200 relative selection:bg-[#E17A43] selection:text-white">
      {/* Full-page technical graph paper background */}
      <TechnicalGridBackground />

      {/* Scroll Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Floating Pill Navigation Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
