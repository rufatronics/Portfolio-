import React from 'react';
import { Cpu, Network, Terminal, Globe } from 'lucide-react';

export const StackSection: React.FC = () => {
  const domains = [
    {
      title: 'AI / ML & TRANSFORMERS',
      icon: Cpu,
      items: ['PyTorch', 'HuggingFace', 'Transformers', 'ONNX Runtime', 'Intent Routing', 'Model Quantization (FP16/INT8)', 'Dataset Curation'],
    },
    {
      title: 'EDGE INFERENCE & LOW-RESOURCE',
      icon: Network,
      items: ['TFLite Web / Native', 'TensorFlow.js', 'MLC WebLLM', 'Android NDK (C++/CMake)', 'Local Memory Lifecycle', 'IndexedDB / Service Worker'],
    },
    {
      title: 'SYSTEMS & AGENT ARCHITECTURE',
      icon: Terminal,
      items: ['Go (Golang)', 'Bubble Tea TUI', 'Security Policy Gates (T0–T4)', 'Provider-Agnostic LLM Routing', 'Autonomous Workflows', 'Diff Review & Rollbacks'],
    },
    {
      title: 'GEOSPATIAL & WEB APPLICATIONS',
      icon: Globe,
      items: ['TypeScript', 'React 18', 'Vite', 'Tailwind CSS', 'Leaflet / React-Leaflet', 'Supabase Realtime Postgres', 'Framer Motion'],
    },
  ];

  return (
    <section id="stack" className="py-20 border-b border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800 light:border-neutral-200 pb-8">
          <div>
            <div className="font-mono text-xs text-emerald-400 tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400"></span>
              03 // TECHNICAL CREDIBILITY
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white dark:text-white light:text-neutral-900 uppercase mt-2">
              CAPABILITY MATRIX
            </h2>
          </div>
          <p className="max-w-md text-xs font-mono text-neutral-400 light:text-neutral-600 leading-relaxed">
            Engineering domains and core stack utilized across edge systems, research experiments, and production deployments.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <div
                key={idx}
                className="border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 bg-[#0a0b0c] light:bg-white p-6 space-y-4 hover:border-emerald-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 border-b border-neutral-800 light:border-neutral-200 pb-3">
                  <div className="p-2 border border-neutral-700 light:border-neutral-300 text-emerald-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-white dark:text-white light:text-neutral-900 tracking-wide">
                    {domain.title}
                  </h3>
                </div>

                <ul className="space-y-2 font-mono text-xs text-neutral-300 dark:text-neutral-300 light:text-neutral-700">
                  {domain.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-emerald-400 text-[10px]">■</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
