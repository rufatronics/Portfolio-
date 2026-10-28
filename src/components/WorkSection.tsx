import React from 'react';
import { ExternalLink, Database } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { UegDemoWidget } from './UegDemoWidget';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export const WorkSection: React.FC = () => {
  return (
    <section id="work" className="py-16 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="border-b border-[var(--border)] pb-6">
          <div className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider">
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[var(--text)] mt-1">
            Featured Projects
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-8">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 rounded-sm space-y-6 hover:border-[var(--border-strong)] transition-colors"
            >
              {/* TODO: Add project screenshot image here when available */}

              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border)] pb-4">
                <div>
                  <span className="font-mono text-xs text-[var(--accent)] font-bold mr-3">{project.number}</span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-[var(--text)] inline-block">
                    {project.title}
                  </h3>
                </div>
                <div className="font-mono text-xs text-[var(--text-muted)]">
                  {project.category} / {project.year}
                </div>
              </div>

              {/* One-line Summary */}
              <p className="text-sm font-mono text-[var(--text)]">
                {project.summary}
              </p>

              {/* Problem / What I Built / Result structured lines */}
              <div className="space-y-2 font-sans text-xs sm:text-sm text-[var(--text-muted)] border-l-2 border-[var(--accent)] pl-4">
                <div>
                  <strong className="font-mono text-[var(--text)] text-xs uppercase">Problem:</strong> {project.problem}
                </div>
                <div>
                  <strong className="font-mono text-[var(--text)] text-xs uppercase">What I built:</strong> {project.whatIBuilt}
                </div>
                <div>
                  <strong className="font-mono text-[var(--text)] text-xs uppercase">Result:</strong> {project.result}
                </div>
              </div>

              {/* Plain Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-[var(--bg)] border border-[var(--border)] text-[var(--text-muted)] rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="pt-2 flex flex-wrap items-center gap-4 font-mono text-xs">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--border-strong)] bg-[var(--bg)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors rounded-sm min-h-[44px]"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent)] text-white font-bold hover:opacity-90 transition-opacity rounded-sm min-h-[44px]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live demo</span>
                  </a>
                )}

                {project.huggingFaceUrl && (
                  <a
                    href={project.huggingFaceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--border-strong)] bg-[var(--bg)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors rounded-sm min-h-[44px]"
                  >
                    <Database className="w-4 h-4 text-amber-500" />
                    <span>Hugging Face</span>
                  </a>
                )}
              </div>

              {/* Embedded UEG Interactive Demo Widget */}
              {project.id === "ueg" && (
                <div className="pt-6 border-t border-[var(--border)]">
                  <UegDemoWidget />
                </div>
              )}

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
