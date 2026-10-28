import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--surface)] text-[var(--text-muted)] font-mono text-xs border-t border-[var(--border)] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="text-[var(--text)] font-semibold">
          Ahmad Garba Adamu
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[11px]">
          <a
            href="https://github.com/rufatronics"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://huggingface.co/rufatronics"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
          >
            Hugging Face
          </a>
          <a
            href="https://linkedin.com/in/ahmad-garba-adamu-91a22631b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contact@aga.name.ng"
            className="hover:text-[var(--accent)] transition-colors"
          >
            Email
          </a>
          <span>© 2026 Ahmad Garba Adamu</span>
        </div>

        <button
          onClick={scrollToTop}
          className="hover:text-[var(--text)] transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-[var(--accent)] px-1 py-0.5 rounded-sm"
        >
          Back to top ↑
        </button>

      </div>
    </footer>
  );
};
