import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
  </svg>
);

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "contact@aga.name.ng";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Section Header */}
        <div className="border-b border-[var(--border)] pb-6">
          <div className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider">
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[var(--text)] mt-1">
            Get in Touch
          </h2>
        </div>

        {/* Subline */}
        <p className="text-base text-[var(--text-muted)] font-sans max-w-2xl leading-relaxed">
          Open to research collaborations, ML engineering roles, and freelance edge-AI projects.
        </p>

        {/* Big Primary Email Button */}
        <div className="p-6 sm:p-8 border border-[var(--border)] bg-[var(--surface)] space-y-4 rounded-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <a
              href={`mailto:${email}`}
              className="font-mono text-xl sm:text-3xl font-bold text-[var(--text)] hover:text-[var(--accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded-sm p-1"
            >
              {email}
            </a>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="p-3 border border-[var(--border-strong)] bg-[var(--bg)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded-sm cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-[var(--accent)]" /> : <Copy className="w-4 h-4" />}
              </button>

              <a
                href={`mailto:${email}`}
                className="px-6 py-3.5 bg-[var(--accent)] hover:opacity-90 text-white font-mono text-xs font-bold uppercase transition-opacity flex items-center gap-2 rounded-sm min-h-[44px]"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Secondary Buttons & Notice */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
          <a
            href="https://wa.me/2347087417103"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] text-[var(--text)] transition-colors flex items-center justify-between rounded-sm min-h-[44px]"
          >
            <span>WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="https://linkedin.com/in/ahmad-garba-adamu-91a22631b"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] text-[var(--text)] transition-colors flex items-center justify-between rounded-sm min-h-[44px]"
          >
            <div className="flex items-center gap-2">
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </div>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="p-4 border border-[var(--border)] bg-[var(--bg)] text-[var(--text-muted)] flex items-center rounded-sm sm:col-span-2 lg:col-span-1">
            <span>I reply within 24 hours.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
