import React, { useState } from 'react';
import { Phone, MessageSquare, Database, ArrowUpRight, Copy, Check } from 'lucide-react';

// Custom LinkedIn Icon SVG
const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
  </svg>
);

// Custom Github Icon SVG
const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const email = "contact@aga.name.ng";
  const phone = "+234 708 741 7103";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 border-b border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="border-b border-neutral-800 light:border-neutral-200 pb-8">
          <div className="font-mono text-xs text-emerald-400 tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400"></span>
            05 // DIRECT COMMUNICATIONS
          </div>
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold text-white dark:text-white light:text-neutral-900 uppercase mt-2">
            HAVE SOMETHING <br />
            <span className="text-neutral-400 light:text-neutral-600">WORTH BUILDING?</span>
          </h2>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Main Direct Actions */}
          <div className="lg:col-span-8 space-y-6">

            <p className="text-base text-neutral-300 dark:text-neutral-300 light:text-neutral-700 font-sans leading-relaxed max-w-2xl">
              Available for technical consultations, edge AI engineering projects, research collaborations, and open-source contributions. Direct contact methods below:
            </p>

            {/* Email Direct Action Banner */}
            <div className="border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 bg-[#0a0b0c] light:bg-white p-6 sm:p-8 space-y-4">
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">// PRIMARY EMAIL DISPATCH</div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <a
                  href={`mailto:${email}`}
                  className="font-mono text-xl sm:text-2xl font-bold text-white dark:text-white light:text-neutral-900 hover:text-emerald-400 transition-colors"
                >
                  {email}
                </a>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCopyEmail}
                    className="p-3 border border-neutral-700 light:border-neutral-300 hover:border-emerald-500 text-neutral-300 hover:text-emerald-400 transition-colors focus:outline-none cursor-pointer"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>

                  <a
                    href={`mailto:${email}`}
                    className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-bold uppercase transition-colors flex items-center gap-2"
                  >
                    <span>EMAIL AHMAD</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">

              <a
                href="https://wa.me/2347087417103"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 border border-neutral-800 light:border-neutral-300 bg-[#0a0b0c] light:bg-white hover:border-emerald-500 transition-colors flex items-center justify-between group"
              >
                <div className="space-y-1">
                  <div className="text-neutral-500 text-[10px] uppercase">// WHATSAPP DIRECT</div>
                  <div className="text-neutral-200 light:text-neutral-900 font-bold group-hover:text-emerald-400 transition-colors">{phone}</div>
                </div>
                <MessageSquare className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="p-5 border border-neutral-800 light:border-neutral-300 bg-[#0a0b0c] light:bg-white hover:border-emerald-500 transition-colors flex items-center justify-between group"
              >
                <div className="space-y-1">
                  <div className="text-neutral-500 text-[10px] uppercase">// PHONE CALL</div>
                  <div className="text-neutral-200 light:text-neutral-900 font-bold group-hover:text-emerald-400 transition-colors">{phone}</div>
                </div>
                <Phone className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors" />
              </a>

            </div>

          </div>

          {/* Social Profiles Column */}
          <div className="lg:col-span-4 border border-neutral-800 light:border-neutral-300 bg-[#0a0b0c] light:bg-white p-6 space-y-6 font-mono text-xs">
            <div className="text-neutral-500 text-[10px] uppercase tracking-widest border-b border-neutral-800 light:border-neutral-200 pb-3">
              // PUBLIC PROFILES & REPOSITORIES
            </div>

            <div className="space-y-3">
              <a
                href="https://github.com/rufatronics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 border border-neutral-800/80 light:border-neutral-200 hover:border-emerald-500 text-neutral-300 light:text-neutral-800 hover:text-emerald-400 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-4 h-4" />
                  <span>github.com/rufatronics</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://huggingface.co/rufatronics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 border border-neutral-800/80 light:border-neutral-200 hover:border-emerald-500 text-neutral-300 light:text-neutral-800 hover:text-emerald-400 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Database className="w-4 h-4 text-amber-400" />
                  <span>huggingface.co/rufatronics</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://linkedin.com/in/ahmad-garba-adamu-91a22631b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 border border-neutral-800/80 light:border-neutral-200 hover:border-emerald-500 text-neutral-300 light:text-neutral-800 hover:text-emerald-400 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span>linkedin.com/in/ahmad-garba-adamu</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-3 bg-neutral-900/60 light:bg-neutral-100 text-[11px] text-neutral-400 light:text-neutral-600 border border-neutral-800 light:border-neutral-200">
              <span className="text-emerald-400 font-bold block mb-1">NO MIDDLEMEN:</span>
              Direct communication preferred. Responses within 24 hours.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
