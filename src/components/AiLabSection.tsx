import React, { useState } from 'react';
import { LAB_EXPERIMENTS } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const AiLabSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');

  const categories = ['ALL', 'MODEL', 'DATASET', 'BENCHMARK', 'RESEARCH'];

  const filteredExperiments = LAB_EXPERIMENTS.filter((item) => {
    if (filter === 'ALL') return true;
    return item.category === filter;
  });

  return (
    <section id="research" className="py-16 border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
          <div>
            <div className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider">
              Research & Open Models
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[var(--text)] mt-1">
              Models, Datasets & Benchmarks
            </h2>
          </div>
          <a
            href="https://huggingface.co/rufatronics"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
          >
            <span>Hugging Face Organization</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="text-[var(--text-muted)] mr-2">Filter:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 border transition-all rounded-sm cursor-pointer min-h-[36px] ${
                filter === cat
                  ? 'bg-[var(--accent)] text-white font-bold border-[var(--accent)]'
                  : 'bg-[var(--bg)] text-[var(--text-muted)] border-[var(--border)] hover:border-[var(--border-strong)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Table / Boxed Grid Layout */}
        <div className="border border-[var(--border)] bg-[var(--bg)] divide-y divide-[var(--border)] font-mono text-xs rounded-sm">

          {/* Table Header (Desktop) */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 font-semibold text-[var(--text-muted)] uppercase bg-[var(--surface)] border-b border-[var(--border)]">
            <div className="col-span-4">Name</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-4">Description</div>
            <div className="col-span-2 text-right">Status</div>
          </div>

          {/* Rows */}
          {filteredExperiments.map((lab) => (
            <div
              key={lab.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-3 p-4 sm:px-6 sm:py-4 items-start md:items-center hover:bg-[var(--surface-hover)] transition-colors"
            >
              {/* Name */}
              <div className="col-span-1 md:col-span-4 space-y-1">
                <div className="font-bold text-sm text-[var(--text)] flex items-center gap-2">
                  <span>{lab.name}</span>
                  {lab.link && (
                    <a
                      href={lab.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-[var(--accent)]"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
                <div className="text-[11px] text-[var(--text-muted)]">{lab.specs}</div>
              </div>

              {/* Type */}
              <div className="col-span-1 md:col-span-2">
                <span className="inline-block px-2 py-0.5 text-[10px] font-bold bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)] rounded-sm">
                  {lab.category}
                </span>
              </div>

              {/* Description */}
              <div className="col-span-1 md:col-span-4 text-xs font-sans text-[var(--text-muted)]">
                {lab.description}
              </div>

              {/* Status */}
              <div className="col-span-1 md:col-span-2 md:text-right">
                <span
                  className={`inline-block px-2.5 py-1 text-[10px] font-bold border rounded-sm ${
                    lab.status === 'PUBLISHED'
                      ? 'bg-[var(--accent-bg)] text-[var(--accent)] border-[var(--accent)]'
                      : lab.status === 'ACTIVE'
                      ? 'bg-[var(--surface)] text-[var(--text)] border-[var(--border-strong)]'
                      : 'bg-[var(--bg)] text-[var(--text-muted)] border-[var(--border)]'
                  }`}
                >
                  {lab.status}
                </span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
