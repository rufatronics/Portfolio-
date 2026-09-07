import React from 'react';
import { MapPin, Terminal, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-neutral-800 dark:border-neutral-800 light:border-neutral-200 bg-[#090a0b] light:bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800 light:border-neutral-200 pb-8">
          <div>
            <div className="font-mono text-xs text-emerald-400 tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400"></span>
              04 // HUMAN ENGINEERING NARRATIVE
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white dark:text-white light:text-neutral-900 uppercase mt-2">
              ABOUT AHMAD
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-400 light:text-neutral-600 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>KANO / ABUJA, NIGERIA → WORLDWIDE</span>
          </div>
        </div>

        {/* About Grid: Editorial Image + Narrative Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Real Photo Integration Editorially */}
          <div className="lg:col-span-5 relative">

            {/* Structural Wireframe Outer Frame */}
            <div className="relative border border-neutral-700 light:border-neutral-400 bg-[#0c0d0e] light:bg-white p-3 shadow-2xl">

              {/* Photo Container */}
              <div className="relative overflow-hidden border border-neutral-800 light:border-neutral-300">
                <img
                  src="/images/ahmad-garba-adamu.jpg"
                  alt="Ahmad Garba Adamu (@rufatronics)"
                  className="w-full h-auto max-h-[520px] object-cover filter grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                />

                {/* Tech Metadata Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/85 backdrop-blur-md border border-neutral-800 p-2.5 font-mono text-[10px] text-neutral-300 flex justify-between items-center">
                  <div>
                    <span className="text-emerald-400 font-bold block">AHMAD GARBA ADAMU</span>
                    <span className="text-neutral-400 text-[9px]">AGA / @RUFATRONICS</span>
                  </div>
                  <span className="text-neutral-500 font-mono">SYS.VER: 2026</span>
                </div>
              </div>

              {/* Geometric Corner Accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-emerald-500"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-emerald-500"></div>

            </div>

            {/* Coordinates Badge */}
            <div className="mt-4 font-mono text-[10px] text-neutral-500 flex items-center justify-between px-1">
              <span>LAT: 12.0022° N, LON: 8.5920° E</span>
              <span>EDGE AI / RESEARCH</span>
            </div>

          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">

            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white dark:text-white light:text-neutral-900 leading-snug">
              Building practical technology under real-world computational constraints.
            </h3>

            <div className="space-y-4 font-sans text-sm text-neutral-300 dark:text-neutral-300 light:text-neutral-700 leading-relaxed">
              <p>
                I am <strong className="text-white light:text-neutral-900 font-semibold">Ahmad Garba Adamu</strong> (known online as <strong className="text-emerald-400 font-mono">@rufatronics</strong> or <strong className="text-white light:text-neutral-900 font-semibold">Aga</strong>), an AI engineer and low-resource systems researcher based in Nigeria.
              </p>

              <p>
                My work centers on the intersection of machine learning, edge computing, and low-resource systems. I build tools that operate under strict bandwidth, memory, and hardware constraints—ensuring that cutting-edge artificial intelligence serves people in environments where expensive GPUs and permanent 5G connectivity are not guaranteed.
              </p>

              <p>
                From on-device crop diagnostics running natively in C++ on older Android phones (<strong className="text-neutral-100 light:text-neutral-900">FarmBot</strong>) to privacy-first browser AI suites (<strong className="text-neutral-100 light:text-neutral-900">DeySafe</strong>) and sub-3ms intent classification models (<strong className="text-neutral-100 light:text-neutral-900">UEG</strong>), my engineering philosophy prioritizes utility, local execution, and open research.
              </p>
            </div>

            {/* Core Values / Themes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-800/80 light:border-neutral-200 font-mono text-xs">
              <div className="p-3 bg-neutral-900/60 light:bg-white border border-neutral-800/80 light:border-neutral-300 space-y-1">
                <div className="text-emerald-400 font-bold uppercase flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>EDGE-FIRST ML</span>
                </div>
                <p className="text-[11px] text-neutral-400 light:text-neutral-600 font-sans">
                  Prioritizing local on-device inference, quantization, and offline resilience.
                </p>
              </div>

              <div className="p-3 bg-neutral-900/60 light:bg-white border border-neutral-800/80 light:border-neutral-300 space-y-1">
                <div className="text-emerald-400 font-bold uppercase flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>AFRICAN CONTEXTS</span>
                </div>
                <p className="text-[11px] text-neutral-400 light:text-neutral-600 font-sans">
                  Engineering specifically for low-RAM mobile hardware and regional needs.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
