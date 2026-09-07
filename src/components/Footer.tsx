import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08090a] light:bg-neutral-100 text-neutral-400 font-mono text-xs border-t border-neutral-800 dark:border-neutral-800 light:border-neutral-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-neutral-800/80 light:border-neutral-200 pb-8">
          <div>
            <div className="text-white dark:text-white light:text-neutral-900 font-bold text-sm tracking-wider">
              RUFATRONICS // AHMAD GARBA ADAMU
            </div>
            <div className="text-neutral-500 text-[11px] mt-1">
              AI Systems / Edge Inference / Low-Resource Computing / Geospatial Intel
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-neutral-400">
            <a href="https://github.com/rufatronics" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              GitHub
            </a>
            <a href="https://huggingface.co/rufatronics" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              HuggingFace
            </a>
            <a href="https://linkedin.com/in/ahmad-garba-adamu-91a22631b" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:contact@aga.name.ng" className="hover:text-emerald-400 transition-colors">
              Email
            </a>
            <a href="https://wa.me/2347087417103" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} AHMAD GARBA ADAMU. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-3">
            <span>NIGERIA → GLOBAL</span>
            <span>•</span>
            <span className="text-emerald-500">100% LOCAL EXECUTION</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
