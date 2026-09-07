import React, { useState } from 'react';
import { ExternalLink, Database, ChevronRight, X, Terminal } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { UegDemoWidget } from './UegDemoWidget';

// Custom GitHub Icon SVG
const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-20 border-b border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800 light:border-neutral-200 pb-8">
          <div>
            <div className="font-mono text-xs text-emerald-400 tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400"></span>
              01 // INDEXED PORTFOLIO
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white dark:text-white light:text-neutral-900 uppercase mt-2">
              SELECTED WORK
            </h2>
          </div>
          <p className="max-w-md text-xs font-mono text-neutral-400 light:text-neutral-600 leading-relaxed">
            Engineering archive featuring geospatial intelligence, local browser AI, self-hostable agent daemons, 35M intent routers, and edge agricultural vision.
          </p>
        </div>

        {/* Projects Editorial Index */}
        <div className="space-y-24">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={project.id}
                className="group border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 bg-[#0a0b0c] light:bg-white p-6 sm:p-8 lg:p-10 transition-all hover:border-neutral-600 light:hover:border-neutral-400 relative"
              >
                {/* Project Frame Structural Grid Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-500"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-500"></div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                  {/* Metadata & Technical Info (Left / Right asymmetric layout) */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>

                    {/* Numbering & Category */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800/80 light:border-neutral-200 pb-3 font-mono text-xs">
                      <span className="text-2xl font-bold text-emerald-400 font-mono tracking-tighter">
                        {project.number}
                      </span>
                      <span className="text-neutral-400 light:text-neutral-600 font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-neutral-500">
                        [{project.year}]
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white dark:text-white light:text-neutral-900 tracking-tight group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-neutral-300 dark:text-neutral-300 light:text-neutral-700 mt-2 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-xs font-sans text-neutral-400 light:text-neutral-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features Bullet List */}
                    <div className="space-y-2 pt-2">
                      <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">// KEY ARCHITECTURE & FEATURES</div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-neutral-300 dark:text-neutral-300 light:text-neutral-800">
                        {project.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <span className="text-emerald-400 mt-0.5">›</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.stack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-[11px] font-mono bg-neutral-900 light:bg-neutral-100 border border-neutral-800 light:border-neutral-300 text-neutral-300 light:text-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 flex flex-wrap items-center gap-4 font-mono text-xs">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-700 light:border-neutral-300 bg-neutral-900/60 light:bg-neutral-100 text-neutral-200 light:text-neutral-800 hover:border-emerald-500 hover:text-emerald-400 transition-colors"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>GITHUB REPO</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>LIVE DEMO</span>
                        </a>
                      )}

                      {project.huggingFaceUrl && (
                        <a
                          href={project.huggingFaceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-700 light:border-neutral-300 bg-neutral-900/60 light:bg-neutral-100 text-neutral-200 light:text-neutral-800 hover:border-emerald-500 hover:text-emerald-400 transition-colors"
                        >
                          <Database className="w-4 h-4 text-amber-400" />
                          <span>HUGGINGFACE</span>
                        </a>
                      )}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <span>FULL SPEC</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                  {/* Display Image Showcase / Technical Panel */}
                  <div className={`lg:col-span-5 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>

                    <div className="border border-neutral-800 light:border-neutral-300 bg-[#070809] light:bg-neutral-100 p-4 space-y-3 font-mono">
                      <div className="flex items-center justify-between text-[10px] text-neutral-500 border-b border-neutral-800/80 light:border-neutral-300 pb-2">
                        <span>SYS_RENDER // {project.id.toUpperCase()}</span>
                        <span className="text-emerald-400">STATUS: OK</span>
                      </div>

                      <div className="h-48 sm:h-56 bg-neutral-900/90 light:bg-neutral-200 border border-neutral-800 light:border-neutral-300 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group-hover:border-emerald-500/50 transition-colors">
                        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none"></div>

                        <Terminal className="w-8 h-8 text-emerald-400/80 mb-3" />
                        <span className="text-xs font-bold text-neutral-200 light:text-neutral-800 tracking-wider">
                          {project.imagePlaceholderText}
                        </span>
                        <span className="text-[10px] text-neutral-500 mt-2 max-w-xs">
                          {project.vision || "High-performance low-resource architecture design"}
                        </span>
                      </div>

                      {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-800/80 light:border-neutral-300 text-[10px]">
                          {project.metrics.map((metric, mIdx) => (
                            <div key={mIdx} className="p-2 bg-neutral-900/60 light:bg-white border border-neutral-800/80 light:border-neutral-200">
                              <span className="text-neutral-500 block">{metric.label}</span>
                              <span className="text-emerald-400 font-bold">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>

                  </div>

                </div>

                {project.id === "ueg" && (
                  <div className="mt-10 pt-8 border-t border-neutral-800 light:border-neutral-200">
                    <UegDemoWidget />
                  </div>
                )}

              </article>
            );
          })}
        </div>

      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="max-w-2xl w-full bg-[#0c0d0e] light:bg-white border border-neutral-700 light:border-neutral-300 p-6 md:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white focus:outline-none cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
              SYSTEM ARCHITECTURE SPECIFICATION // {selectedProject.number}
            </div>

            <h3 className="text-2xl font-heading font-bold text-white light:text-neutral-900">
              {selectedProject.title}
            </h3>

            <p className="text-sm text-neutral-300 light:text-neutral-700 font-mono leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="space-y-3 font-mono text-xs border-t border-b border-neutral-800 light:border-neutral-200 py-4">
              <div className="text-neutral-500 uppercase tracking-wider">// DETAILED CAPABILITIES</div>
              {selectedProject.features.map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-neutral-300 light:text-neutral-800">
                  <span className="text-emerald-400">■</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {selectedProject.vision && (
              <div className="p-4 bg-neutral-900/60 light:bg-neutral-100 border-l-2 border-emerald-500 text-xs font-mono text-neutral-300 light:text-neutral-800">
                <span className="text-emerald-400 font-bold block mb-1">VISION & RATIONALE:</span>
                "{selectedProject.vision}"
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-xs uppercase cursor-pointer"
              >
                CLOSE SPEC
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
