import React, { useState } from 'react';
import { LAB_EXPERIMENTS } from '../data/portfolioData';
import { FlaskConical, ExternalLink, Cpu, Database, BarChart3, ArrowUpRight } from 'lucide-react';

export const AiLabSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');

  const categories = ['ALL', 'MODEL', 'DATASET', 'BENCHMARK', 'RESEARCH'];

  const filteredExperiments = LAB_EXPERIMENTS.filter((item) => {
    if (filter === 'ALL') return true;
    if (filter === 'RESEARCH') return item.status === 'RESEARCH';
    return item.category === filter;
  });

  return (
    <section id="lab" className="py-20 border-b border-neutral-800 dark:border-neutral-800 light:border-neutral-200 bg-[#090a0b] light:bg-neutral-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800 light:border-neutral-200 pb-8">
          <div>
            <div className="font-mono text-xs text-emerald-400 tracking-widest uppercase flex items-center gap-2">
              <FlaskConical className="w-4 h-4 text-emerald-400" />
              02 // EXPERIMENTAL DIVISION
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white dark:text-white light:text-neutral-900 uppercase mt-2">
              AI LAB & RESEARCH
            </h2>
          </div>
          <div className="max-w-md text-xs font-mono text-neutral-400 light:text-neutral-600 space-y-1">
            <p>MODELS / DATASETS / BENCHMARKS / EDGE SYSTEMS</p>
            <p className="text-emerald-400 font-semibold">Active research on low-resource LLM routing and edge quantization.</p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="text-neutral-500 uppercase tracking-wider mr-2 text-[11px]">// CATEGORY:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 border transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-emerald-500 text-black font-bold border-emerald-500'
                  : 'bg-neutral-900/60 light:bg-white text-neutral-400 light:text-neutral-700 border-neutral-800 light:border-neutral-300 hover:border-neutral-600'
              }`}
            >
              [{cat}]
            </button>
          ))}
        </div>

        {/* Lab Research Index / Table */}
        <div className="border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 bg-[#0c0d0e] light:bg-white divide-y divide-neutral-800/80 light:divide-neutral-200 font-mono">

          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-[11px] text-neutral-500 font-semibold uppercase tracking-wider bg-neutral-950 light:bg-neutral-100">
            <div className="col-span-3">EXPERIMENT / ENTRY</div>
            <div className="col-span-2">TYPE</div>
            <div className="col-span-4">RESEARCH SCOPE</div>
            <div className="col-span-2">TECHNICAL SPECS</div>
            <div className="col-span-1 text-right">STATUS</div>
          </div>

          {/* Table Rows */}
          {filteredExperiments.map((lab) => (
            <div
              key={lab.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-neutral-900/30 light:hover:bg-neutral-50 transition-colors"
            >
              {/* Name */}
              <div className="col-span-1 md:col-span-3 space-y-1">
                <div className="text-sm font-bold text-white dark:text-white light:text-neutral-900 flex items-center gap-2">
                  <span>{lab.name}</span>
                  {lab.link && (
                    <a
                      href={lab.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-emerald-400"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
                <div className="text-[10px] text-neutral-500">ID: {lab.id}</div>
              </div>

              {/* Type Category Badge */}
              <div className="col-span-1 md:col-span-2">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-bold bg-neutral-900 light:bg-neutral-100 border border-neutral-800 light:border-neutral-300 text-emerald-400">
                  {lab.category === 'MODEL' && <Cpu className="w-3 h-3" />}
                  {lab.category === 'DATASET' && <Database className="w-3 h-3 text-amber-400" />}
                  {lab.category === 'BENCHMARK' && <BarChart3 className="w-3 h-3 text-cyan-400" />}
                  {lab.category}
                </span>
              </div>

              {/* Scope Description */}
              <div className="col-span-1 md:col-span-4 text-xs text-neutral-300 dark:text-neutral-300 light:text-neutral-700 font-sans">
                {lab.description}
                <div className="flex flex-wrap gap-1.5 mt-2 font-mono text-[10px] text-neutral-500">
                  {lab.tags.map((t, idx) => (
                    <span key={idx}>#{t}</span>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div className="col-span-1 md:col-span-2 text-xs text-neutral-400 light:text-neutral-600">
                {lab.specs}
              </div>

              {/* Status Indicator */}
              <div className="col-span-1 md:col-span-1 md:text-right">
                <span
                  className={`inline-block px-2 py-0.5 text-[10px] font-bold border ${
                    lab.status === 'PUBLISHED'
                      ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800'
                      : lab.status === 'ACTIVE'
                      ? 'bg-cyan-950/40 text-cyan-400 border-cyan-800'
                      : 'bg-amber-950/40 text-amber-400 border-amber-800'
                  }`}
                >
                  {lab.status}
                </span>
              </div>

            </div>
          ))}

        </div>

        {/* Lab Thesis Note */}
        <div className="p-6 border border-dashed border-neutral-800 light:border-neutral-300 bg-neutral-950/60 light:bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs">
          <div className="space-y-1">
            <span className="text-neutral-200 light:text-neutral-800 font-bold block">LOCAL & EDGE INFERENCE THESIS</span>
            <p className="text-neutral-400 light:text-neutral-600 text-[11px] max-w-2xl font-sans">
              All models and datasets produced under the Rufatronics initiative prioritize transparent benchmarks, open-access weights, and functional low-RAM deployment.
            </p>
          </div>
          <a
            href="https://huggingface.co/rufatronics"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-neutral-700 light:border-neutral-300 hover:border-emerald-500 text-neutral-200 light:text-neutral-800 hover:text-emerald-400 transition-colors shrink-0 flex items-center gap-2"
          >
            <span>HUGGINGFACE ORGANISATION</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
