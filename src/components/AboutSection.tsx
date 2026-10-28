import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Section Header */}
        <div className="border-b border-[var(--border)] pb-6">
          <div className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[var(--text)] mt-1">
            Background & Philosophy
          </h2>
        </div>

        {/* Narrative Paragraphs */}
        <div className="max-w-3xl space-y-4 font-sans text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          <p>
            I am <strong className="text-[var(--text)]">Ahmad Garba Adamu</strong>, an AI engineer and researcher based in Kano, Nigeria.
          </p>

          <p>
            My work focuses on machine learning systems engineered specifically for low-resource environments. I build models and software designed to operate reliably under strict compute, memory, and bandwidth constraints—ensuring practical utility even where flagship devices or constant internet access are unavailable.
          </p>

          <p>
            My research interests include small language models, on-device vision and speech inference, intent routing, and African-language natural language processing (NLP).
          </p>
        </div>

        {/* Two Principles as Two Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 font-sans">
          <div className="p-5 border border-[var(--border)] bg-[var(--bg)] rounded-sm space-y-2">
            <div className="font-mono text-xs font-bold uppercase text-[var(--accent)]">
              Edge-First Machine Learning
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Prioritizing local on-device inference, aggressive quantization, and offline-first execution to eliminate latency and cloud dependencies.
            </p>
          </div>

          <div className="p-5 border border-[var(--border)] bg-[var(--bg)] rounded-sm space-y-2">
            <div className="font-mono text-xs font-bold uppercase text-[var(--accent)]">
              African Contexts & Low Resources
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Engineering specifically for lower-tier mobile hardware, regional networks, and African language datasets like Hausa.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
