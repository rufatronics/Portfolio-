import React from 'react';

export const StackSection: React.FC = () => {
  const groups = [
    {
      title: 'Machine Learning',
      items: ['PyTorch', 'Hugging Face Transformers', 'ONNX Runtime', 'Intent Routing', 'Model Quantization (FP16/INT8)', 'Dataset Curation'],
    },
    {
      title: 'Edge & Mobile Runtimes',
      items: ['TFLite (Web & Native)', 'TensorFlow.js', 'MLC WebLLM', 'Android NDK (C++ / CMake)', 'Browser Memory Management', 'IndexedDB & Service Workers'],
    },
    {
      title: 'Systems & Agents',
      items: ['Go (Golang)', 'Bubble Tea TUI', 'Security Policy Gates', 'Provider-Agnostic LLM Routing', 'Autonomous Workflows', 'Diff Review & Rollbacks'],
    },
    {
      title: 'Web & Geospatial',
      items: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Leaflet', 'Supabase Realtime'],
    },
  ];

  return (
    <section id="skills" className="py-16 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Section Header */}
        <div className="border-b border-[var(--border)] pb-6">
          <div className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider">
            Technical Skills
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[var(--text)] mt-1">
            Skills & Stack
          </h2>
        </div>

        {/* Compact Grouped Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group, idx) => (
            <div
              key={idx}
              className="border border-[var(--border)] bg-[var(--surface)] p-5 space-y-3 rounded-sm"
            >
              <h3 className="font-heading font-bold text-sm text-[var(--text)] border-b border-[var(--border)] pb-2">
                {group.title}
              </h3>

              <ul className="space-y-1.5 font-sans text-xs text-[var(--text-muted)]">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[var(--accent)] font-mono">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
