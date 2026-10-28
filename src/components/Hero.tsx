import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative border-b border-[var(--border)] bg-grid-pattern pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Hero Top Grid: Photo + Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

          {/* Photo Column */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="border border-[var(--border)] bg-[var(--surface)] p-2 shadow-sm rounded-sm">
              <img
                src="/images/ahmad-garba-adamu.jpg"
                alt="Ahmad Garba Adamu"
                className="w-full h-auto object-cover rounded-xs filter grayscale contrast-105 hover:grayscale-0 transition-all duration-300"
              />
              <div className="mt-2 px-1 py-1 font-mono text-[11px] text-[var(--text-muted)] flex justify-between items-center border-t border-[var(--border)]">
                <span>Ahmad Garba Adamu</span>
                <span className="text-[var(--accent)] font-semibold">@rufatronics</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="md:col-span-8 lg:col-span-9 space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[var(--text)] tracking-tight leading-[1.1]">
                Reliable AI systems for low-resource environments.
              </h1>

              <p className="max-w-2xl text-base sm:text-lg text-[var(--text-muted)] font-normal leading-relaxed">
                AI engineer and researcher in Kano, Nigeria. I work on small language models, on-device AI, and Hausa and African-language NLP.
              </p>
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 font-mono text-xs">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--text)] text-[var(--bg)] font-bold uppercase tracking-wider hover:bg-[var(--accent)] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded-sm min-h-[44px]"
              >
                <span>View work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text)] font-bold uppercase tracking-wider hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded-sm min-h-[44px]"
              >
                <span>Get in touch</span>
              </a>
            </div>
          </div>

        </div>

        {/* Proof Strip */}
        <div className="pt-6 border-t border-[var(--border)]">
          <div className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider mb-3">
            Key Figures & Benchmarks
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
            {/* Figure 1 */}
            <div className="p-4 border border-[var(--border)] bg-[var(--surface)] rounded-sm">
              <div className="text-xl sm:text-2xl font-bold text-[var(--accent)]">35M</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">Parameter Intent Model</div>
            </div>

            {/* Figure 2 */}
            <div className="p-4 border border-[var(--border)] bg-[var(--surface)] rounded-sm">
              <div className="text-xl sm:text-2xl font-bold text-[var(--accent)]">176,000+</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">Dataset Rows Curation</div>
            </div>

            {/* Figure 3 */}
            <div className="p-4 border border-[var(--border)] bg-[var(--surface)] rounded-sm">
              <div className="text-xl sm:text-2xl font-bold text-[var(--accent)]">22 Classes</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">Across 8 Languages</div>
            </div>

            {/* Figure 4 */}
            <div className="p-4 border border-[var(--border)] bg-[var(--surface)] rounded-sm">
              <div className="text-xl sm:text-2xl font-bold text-[var(--accent)]">~2GB RAM</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">Target Edge Constraint</div>
            </div>
          </div>

          {/* TODO: Add real benchmark accuracy scores once validated on test set */}
          {/* TODO: Add verified Hugging Face download counts across published models */}
        </div>

      </div>
    </section>
  );
};
