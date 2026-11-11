import React, { useEffect, useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, ExternalLink, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [customPdfUrl, setCustomPdfUrl] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('uploaded_resume_pdf') || null;
    }
    return null;
  });
  const [customPdfName, setCustomPdfName] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('uploaded_resume_pdf_name') || 'Vamsi_Krishna_Resume.pdf';
    }
    return 'Vamsi_Krishna_Resume.pdf';
  });
  const [uploadNotice, setUploadNotice] = useState<string | null>(null);

  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setUploadNotice('Please select a valid .pdf file.');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setCustomPdfUrl(result);
        setCustomPdfName(file.name);
        try {
          localStorage.setItem('uploaded_resume_pdf', result);
          localStorage.setItem('uploaded_resume_pdf_name', file.name);
        } catch (err) {
          // File might exceed localStorage quota, keep in memory
        }
        setUploadNotice(`Resume PDF "${file.name}" loaded successfully!`);
        setTimeout(() => setUploadNotice(null), 3500);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadPdf = () => {
    if (customPdfUrl) {
      const link = document.createElement('a');
      link.href = customPdfUrl;
      link.download = customPdfName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Direct browser print to PDF
      window.print();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `
============================================================
${PORTFOLIO_DATA.personal.name}
${PORTFOLIO_DATA.personal.title}
Email: ${PORTFOLIO_DATA.personal.email} | Location: ${PORTFOLIO_DATA.personal.location}
GitHub: ${PORTFOLIO_DATA.personal.github}
LinkedIn: ${PORTFOLIO_DATA.personal.linkedin}
============================================================

PROFESSIONAL SUMMARY
${PORTFOLIO_DATA.personal.bio}

EDUCATION
B.Tech in Data Science
RVR & JC College of Engineering, Guntur
Status: Graduated

TECHNICAL SKILLS
- Programming: Python, SQL
- Data Science: NumPy, Pandas, Scikit-learn, Jupyter Notebook
- Machine Learning: Linear Regression, Polynomial Regression, Ridge, Lasso, Elastic Net, Model Evaluation, Hyperparameter Tuning
- Deep Learning: CNN, LSTM, CNN-LSTM, CNN-BiLSTM, TensorFlow/Keras
- Explainable AI: SHAP, LIME
- Generative AI: LLMs, LangChain, LangGraph, Prompt Engineering, Groq
- Data Visualization: Power BI, Matplotlib, Seaborn
- Database & Data Engineering: MySQL, PostgreSQL, Supabase, Hadoop, Medallion Architecture
- Development: React, FastAPI, REST APIs, Git, GitHub

WORK EXPERIENCE
Machine Learning Intern | OPTIFYX TECHNOLOGY
January 25, 2025 – February 25, 2025 (4 weeks)
- Worked on machine learning concepts and practical implementation.
- Explored data preparation and model development.
- Gained hands-on exposure to machine learning workflows.

FEATURED PROJECTS
1. MediAI – Hospital Patient Experience & Operations Platform
   - Patient, Doctor, Staff, and Admin workflows.
   - Medallion Architecture (Bronze, Silver, Gold).
   - Data cleaning and transformation. MySQL and Supabase integration.
   - Technologies: React, TypeScript, Python, FastAPI, MySQL, Supabase, PostgreSQL, Power BI.

2. Explainable AI for Battery State of Health Prediction
   - NASA Battery Dataset preprocessing & hybrid CNN-LSTM / CNN-BiLSTM architecture.
   - Battery State of Health (SOH) estimation with MAE and RMSE evaluation.
   - Model interpretability using SHAP and LIME.
   - Technologies: Python, TensorFlow/Keras, CNN-LSTM, CNN-BiLSTM, SHAP, LIME, NumPy, Pandas, Scikit-learn.

3. Conversational AI Chatbot
   - Multi-turn question answering using LangChain and Groq high-speed LLM inference.
   - Persistent chat storage and cross-chat memory management.
   - Technologies: Python, LangChain, Groq, Streamlit, LLMs.

4. Sales Analysis Dashboard
   - Interactive Power BI dashboard analyzing sales performance and KPIs.
   - Technologies: Power BI, SQL, Python, Pandas.

ACHIEVEMENTS & ACTIVITIES
- Participated in Uncalled Innovators Hackathon (2023).
- Completed Machine Learning Internship at OPTIFYX TECHNOLOGY.
- Developed practical projects in healthcare AI, predictive analytics, and conversational AI.
============================================================
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Resume_${PORTFOLIO_DATA.personal.name.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    const summary = `${PORTFOLIO_DATA.personal.name} - ${PORTFOLIO_DATA.personal.title}\n${PORTFOLIO_DATA.personal.email}\n${PORTFOLIO_DATA.personal.bio}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#181715] rounded-2xl border border-[#E5E0D8] dark:border-[#33302C] shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Header toolbar */}
        <div className="p-4 sm:p-5 bg-[#F8F5EF] dark:bg-[#1E1D1A] border-b border-[#E5E0D8] dark:border-[#2C2926] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#FAECE4] dark:bg-[#332219] flex items-center justify-center text-[#D97745]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 id="resume-title" className="text-sm sm:text-base font-bold text-[#222222] dark:text-[#F3EFE7] leading-none">
                Curriculum Vitae · {PORTFOLIO_DATA.personal.name}
              </h3>
              <p className="text-[11px] font-mono text-[#8A857D] dark:text-[#A8A29E] mt-0.5">
                Official Portfolio Resume Document
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="application/pdf"
              className="hidden"
            />

            {/* Download PDF Button */}
            <button
              onClick={handleDownloadPdf}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E17A43] text-white hover:bg-[#CF6B35] text-xs font-bold transition-all btn-tactile shadow-xs"
              title="Download PDF resume"
            >
              <Download className="w-3.5 h-3.5 text-white" />
              <span>Download PDF</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#625E58] dark:text-[#A8A29E] hover:text-[#171615] dark:hover:text-white hover:bg-[#F7F4EE] dark:hover:bg-[#2C2926] transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Upload status banner if active */}
        {uploadNotice && (
          <div className="px-5 py-2 bg-[#FAECE4] dark:bg-[#2A1E18] border-b border-[#E17A43]/30 text-xs font-medium text-[#E17A43] flex items-center justify-between">
            <span>{uploadNotice}</span>
            <button onClick={() => setUploadNotice(null)} className="hover:underline">Dismiss</button>
          </div>
        )}

        {/* Resume Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white dark:bg-[#141312] text-[#222222] dark:text-[#E8E6E1]">
          {/* Header */}
          <div className="border-b border-[#E5E0D8] dark:border-[#2C2926] pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#222222] dark:text-white">
              {PORTFOLIO_DATA.personal.name}
            </h1>
            <p className="text-sm font-semibold text-[#D97745] mt-1 font-mono">
              {PORTFOLIO_DATA.personal.title}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#6B6660] dark:text-[#A8A29E] mt-3 font-mono">
              <span>{PORTFOLIO_DATA.personal.email}</span>
              <span>·</span>
              <span>{PORTFOLIO_DATA.personal.location}</span>
              <span>·</span>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#D97745] underline"
              >
                GitHub Profile
              </a>
              <span>·</span>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#D97745] underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#D97745] font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-sm text-[#44413D] dark:text-[#C5C0B8] leading-relaxed">
              {PORTFOLIO_DATA.personal.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#D97745] font-bold mb-3">
              Education
            </h2>
            <div className="p-4 rounded-xl bg-[#F8F5EF] dark:bg-[#1E1D1A] border border-[#E5E0D8]/80 dark:border-[#2C2926]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-sm font-bold text-[#222222] dark:text-[#F3EFE7]">
                  B.Tech in Data Science
                </h3>
                <span className="text-xs font-semibold text-[#D97745]">
                  Status: Graduated
                </span>
              </div>
              <p className="text-xs text-[#55524D] dark:text-[#A8A29E] mt-1">
                RVR & JC College of Engineering, Guntur
              </p>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#D97745] font-bold mb-3">
              Work Experience
            </h2>
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#F8F5EF] dark:bg-[#1E1D1A] border border-[#E5E0D8]/80 dark:border-[#2C2926] space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-sm font-bold text-[#222222] dark:text-[#F3EFE7]">
                      {exp.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#D97745]">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#8A857D] dark:text-[#A8A29E]">
                    {exp.period} ({exp.duration})
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-[#44413D] dark:text-[#C5C0B8]">
                  {exp.description.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-[#D97745] font-bold">›</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#D97745] font-bold mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#F8F5EF] dark:bg-[#1E1D1A] border border-[#E5E0D8]/80 dark:border-[#2C2926]">
                <strong className="text-[#222222] dark:text-white">Programming:</strong> Python, SQL
              </div>
              <div className="p-3 rounded-lg bg-[#F8F5EF] dark:bg-[#1E1D1A] border border-[#E5E0D8]/80 dark:border-[#2C2926]">
                <strong className="text-[#222222] dark:text-white">Data Science:</strong> NumPy, Pandas, Scikit-learn, Jupyter
              </div>
              <div className="p-3 rounded-lg bg-[#F8F5EF] dark:bg-[#1E1D1A] border border-[#E5E0D8]/80 dark:border-[#2C2926]">
                <strong className="text-[#222222] dark:text-white">Machine Learning:</strong> Linear & Polynomial Regression, Ridge, Lasso, Elastic Net, Hyperparameter Tuning
              </div>
              <div className="p-3 rounded-lg bg-[#F8F5EF] dark:bg-[#1E1D1A] border border-[#E5E0D8]/80 dark:border-[#2C2926]">
                <strong className="text-[#222222] dark:text-white">Deep Learning:</strong> CNN, LSTM, CNN-LSTM, CNN-BiLSTM, TensorFlow/Keras
              </div>
              <div className="p-3 rounded-lg bg-[#F8F5EF] dark:bg-[#1E1D1A] border border-[#E5E0D8]/80 dark:border-[#2C2926]">
                <strong className="text-[#222222] dark:text-white">Explainable AI:</strong> SHAP, LIME
              </div>
              <div className="p-3 rounded-lg bg-[#F8F5EF] dark:bg-[#1E1D1A] border border-[#E5E0D8]/80 dark:border-[#2C2926]">
                <strong className="text-[#222222] dark:text-white">Generative AI:</strong> LLMs, LangChain, LangGraph, Prompt Engineering, Groq
              </div>
              <div className="p-3 rounded-lg bg-[#F8F5EF] dark:bg-[#1E1D1A] border border-[#E5E0D8]/80 dark:border-[#2C2926]">
                <strong className="text-[#222222] dark:text-white">Data Visualization:</strong> Power BI, Matplotlib, Seaborn
              </div>
              <div className="p-3 rounded-lg bg-[#F8F5EF] dark:bg-[#1E1D1A] border border-[#E5E0D8]/80 dark:border-[#2C2926]">
                <strong className="text-[#222222] dark:text-white">Database & Engineering:</strong> MySQL, PostgreSQL, Supabase, Hadoop, Medallion
              </div>
              <div className="p-3 rounded-lg bg-[#F8F5EF] dark:bg-[#1E1D1A] border border-[#E5E0D8]/80 dark:border-[#2C2926] sm:col-span-2">
                <strong className="text-[#222222] dark:text-white">Development:</strong> React, FastAPI, REST APIs, Git, GitHub
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#D97745] font-bold mb-3">
              Key Projects
            </h2>
            <div className="space-y-4">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-xl bg-[#F8F5EF] dark:bg-[#1E1D1A] border border-[#E5E0D8]/80 dark:border-[#2C2926]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="text-sm font-bold text-[#222222] dark:text-[#F3EFE7]">
                      {proj.title}
                    </h3>
                    <span className="text-xs font-mono text-[#D97745]">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#55524D] dark:text-[#A8A29E] mb-2 leading-relaxed">
                    {proj.description}
                  </p>
                  <p className="text-[11px] font-mono text-[#8A857D] dark:text-[#7C776F]">
                    Stack: {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#D97745] font-bold mb-3">
              Achievements & Activities
            </h2>
            <ul className="space-y-2 text-xs text-[#44413D] dark:text-[#C5C0B8]">
              {PORTFOLIO_DATA.achievements.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#D97745] font-bold">›</span>
                  <div>
                    <strong className="text-[#222222] dark:text-white">{ach.title}</strong>
                    {ach.year && ` (${ach.year})`}: {ach.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-[#F8F5EF] dark:bg-[#1E1D1A] border-t border-[#E5E0D8] dark:border-[#2C2926] flex items-center justify-between">
          <button
            onClick={copyToClipboard}
            className="inline-flex items-center gap-1.5 text-xs text-[#55524D] dark:text-[#A8A29E] hover:text-[#222222] dark:hover:text-white"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600">Copied Summary</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Quick Summary</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-[#55524D] dark:text-[#A8A29E] hover:text-[#222222] dark:hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
