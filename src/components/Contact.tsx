import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'validating' | 'submitted' | 'error'
  >('idle');
  const [mailToUrl, setMailToUrl] = useState<string>('');

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please specify a subject';
    } else if (formData.subject.trim().length < 3) {
      errs.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write your message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmissionStatus('validating');

    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
        existing.push({
          ...formData,
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem('portfolio_messages', JSON.stringify(existing));
      } catch (err) {
        // Safe fallback
      }

      const encodedSubject = encodeURIComponent(`[Portfolio] ${formData.subject}`);
      const encodedBody = encodeURIComponent(
        `Hi Vamsi Krishna,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      );
      setMailToUrl(`mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodedSubject}&body=${encodedBody}`);

      setSubmissionStatus('submitted');
    }, 350);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setSubmissionStatus('idle');
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative scroll-mt-20 sm:scroll-mt-24 border-t border-[#E6E0D7]/70 dark:border-[#2C2926]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E17A43] mb-2">
              07 · Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171615] dark:text-[#FFFFFF] tracking-tight">
              Let's Connect
            </h2>
            <div className="w-16 h-1 bg-[#E17A43] rounded-full mt-3 mb-4" />
            <p className="text-base sm:text-lg text-[#625E58] dark:text-[#B8B4AC] leading-relaxed">
              I'm always interested in discussing AI, Data Science, Generative AI, and opportunities to build innovative technology solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info & Socials */}
          <ScrollReveal delay={0} className="lg:col-span-5 space-y-5">
            {/* Email Card with 1-Click Copy */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#1A1917] border border-[#E6E0D7] dark:border-[#2C2926] card-technical">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAECE4] dark:bg-[#2E2018] flex items-center justify-center text-[#E17A43]">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-[#625E58] dark:text-[#A8A29E] hover:text-[#171615] dark:hover:text-white bg-[#F7F4EE] dark:bg-[#201F1D] border border-[#E6E0D7] dark:border-[#332F2A] transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#625E58] dark:text-[#9E9991] mb-1">
                Direct Email
              </h3>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="text-base font-bold text-[#171615] dark:text-[#FFFFFF] hover:text-[#E17A43] dark:hover:text-[#E17A43] transition-colors break-all"
              >
                {PORTFOLIO_DATA.personal.email}
              </a>
              <p className="text-xs text-[#625E58] dark:text-[#9E9991] mt-1.5">
                Fastest response for project inquiries and full-time hiring discussions.
              </p>
            </div>

            {/* Social Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* LinkedIn */}
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white dark:bg-[#1A1917] border border-[#E6E0D7] dark:border-[#2C2926] card-technical group block"
                title="LinkedIn Profile"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FAECE4] dark:bg-[#2E2018] flex items-center justify-center text-[#E17A43]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#625E58] group-hover:text-[#E17A43] transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-[#171615] dark:text-[#FFFFFF] group-hover:text-[#E17A43] transition-colors">
                  LinkedIn Profile
                </h4>
                <p className="text-xs text-[#625E58] dark:text-[#9E9991] mt-0.5 font-mono truncate">
                  vamsi-krishna-vadlamudi
                </p>
              </a>

              {/* GitHub */}
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white dark:bg-[#1A1917] border border-[#E6E0D7] dark:border-[#2C2926] card-technical group block"
                title="GitHub Profile (VamsiKrishna-9)"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FAECE4] dark:bg-[#2E2018] flex items-center justify-center text-[#E17A43]">
                    <Github className="w-4 h-4" />
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#625E58] group-hover:text-[#E17A43] transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-[#171615] dark:text-[#FFFFFF] group-hover:text-[#E17A43] transition-colors">
                  GitHub Profile
                </h4>
                <p className="text-xs text-[#625E58] dark:text-[#9E9991] mt-0.5 font-mono truncate">
                  @VamsiKrishna-9
                </p>
              </a>
            </div>

            {/* Location & Relocation */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#1A1917] border border-[#E6E0D7] dark:border-[#2C2926] flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#FAECE4] dark:bg-[#2E2018] flex items-center justify-center text-[#E17A43] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#625E58] dark:text-[#9E9991]">
                  Location
                </h4>
                <p className="text-sm font-bold text-[#171615] dark:text-[#FFFFFF]">
                  {PORTFOLIO_DATA.personal.location}
                </p>
                <p className="text-xs text-[#625E58] dark:text-[#A8A29E]">
                  {PORTFOLIO_DATA.personal.locationDetail} · Open to remote & on-site
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Contact Form */}
          <ScrollReveal delay={120} className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1A1917] border border-[#E6E0D7] dark:border-[#2C2926] shadow-sm">
              <h3 className="text-xl font-bold text-[#171615] dark:text-[#FFFFFF] mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-[#625E58] dark:text-[#9E9991] mb-6 font-mono">
                Direct client-side validation with prefilled mail client generation
              </p>

              {submissionStatus === 'submitted' ? (
                <div className="p-6 rounded-xl bg-[#FAECE4]/60 dark:bg-[#2A1E18] border border-[#E17A43]/30 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E17A43] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-bold text-[#171615] dark:text-[#FFFFFF]">
                        Message Validated & Ready!
                      </h4>
                      <p className="text-xs sm:text-sm text-[#625E58] dark:text-[#C5C0B8] mt-1 leading-relaxed">
                        Thank you, <span className="font-semibold text-[#171615] dark:text-white">{formData.name}</span>. Your message regarding <span className="font-semibold">"{formData.subject}"</span> has been logged.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white/90 dark:bg-[#1C1A18] border border-[#E6E0D7] dark:border-[#383531] text-xs text-[#625E58] dark:text-[#A8A29E] space-y-1">
                    <p className="font-semibold text-[#171615] dark:text-[#FFFFFF]">
                      Direct Mail Delivery:
                    </p>
                    <p>
                      Click the button below to launch your email client with your message pre-filled directly to Vamsi Krishna.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={mailToUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E17A43] text-white hover:bg-[#CF6B35] text-xs font-bold transition-all btn-tactile shadow-xs"
                    >
                      <span>Open in Mail Client</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white" />
                    </a>

                    <button
                      onClick={handleReset}
                      className="px-4 py-2 rounded-full text-xs font-medium text-[#625E58] dark:text-[#A8A29E] hover:text-[#171615] dark:hover:text-white transition-colors"
                    >
                      Write another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#171615] dark:text-[#E8E6E1] mb-1.5">
                        Your Name <span className="text-[#E17A43]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. John Doe"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F7F4EE] dark:bg-[#201F1D] border text-xs text-[#171615] dark:text-[#FFFFFF] placeholder-[#625E58]/60 focus:outline-none focus:ring-1 transition-all ${
                          errors.name
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-[#E6E0D7] dark:border-[#332F2A] focus:border-[#E17A43] focus:ring-[#E17A43]/20'
                        }`}
                      />
                      {errors.name && (
                        <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#171615] dark:text-[#E8E6E1] mb-1.5">
                        Your Email <span className="text-[#E17A43]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="e.g. john@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F7F4EE] dark:bg-[#201F1D] border text-xs text-[#171615] dark:text-[#FFFFFF] placeholder-[#625E58]/60 focus:outline-none focus:ring-1 transition-all ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-[#E6E0D7] dark:border-[#332F2A] focus:border-[#E17A43] focus:ring-[#E17A43]/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-[#171615] dark:text-[#E8E6E1] mb-1.5">
                      Subject <span className="text-[#E17A43]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      placeholder="e.g. AI Engineering Role / Project Inquiry"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F7F4EE] dark:bg-[#201F1D] border text-xs text-[#171615] dark:text-[#FFFFFF] placeholder-[#625E58]/60 focus:outline-none focus:ring-1 transition-all ${
                        errors.subject
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                          : 'border-[#E6E0D7] dark:border-[#332F2A] focus:border-[#E17A43] focus:ring-[#E17A43]/20'
                      }`}
                    />
                    {errors.subject && (
                      <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#171615] dark:text-[#E8E6E1] mb-1.5 flex items-center justify-between">
                      <span>Message <span className="text-[#E17A43]">*</span></span>
                      <span className="text-[10px] font-mono text-[#625E58]">
                        {formData.message.length} chars
                      </span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Describe your inquiry, project parameters, or team discussion topic..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F7F4EE] dark:bg-[#201F1D] border text-xs text-[#171615] dark:text-[#FFFFFF] placeholder-[#625E58]/60 focus:outline-none focus:ring-1 transition-all resize-none ${
                        errors.message
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                          : 'border-[#E6E0D7] dark:border-[#332F2A] focus:border-[#E17A43] focus:ring-[#E17A43]/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submissionStatus === 'validating'}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#E17A43] text-white hover:bg-[#CF6B35] text-xs font-bold tracking-wide transition-all btn-tactile shadow-xs flex items-center justify-center gap-2"
                    >
                      <span>
                        {submissionStatus === 'validating' ? 'Validating...' : 'Validate & Prepare Email'}
                      </span>
                      <Send className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
