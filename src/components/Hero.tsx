import React from 'react';
import { ArrowUpRight, Cpu, Activity, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { HexBg } from './HexBg';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between border-b border-neutral-800 dark:border-neutral-800 light:border-neutral-200 overflow-hidden bg-grid-pattern pt-8 pb-12">
      {/* Signature Hexagonal Interactive Background */}
      <HexBg />

      {/* Top Metadata Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-neutral-500 border-b border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-300/80 pb-3 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-neutral-300 dark:text-neutral-300 font-semibold">AHMAD GARBA ADAMU</span>
            <span className="text-neutral-600">/</span>
            <span>AKA AGA</span>
            <span className="text-neutral-600">/</span>
            <span className="text-emerald-500 font-medium">@RUFATRONICS</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-neutral-500">NIGERIA → WORLDWIDE</span>
            <span className="flex items-center gap-1.5 text-neutral-400">
              <span className="w-2 h-2 bg-emerald-500 rounded-none animate-pulse"></span>
              SYS.ONLINE
            </span>
          </div>
        </div>

        {/* Main Hero Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-4">

          {/* Left Column: Bold Editorial Heading & Actions */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-2">
              <div className="font-mono text-xs text-emerald-400 tracking-widest uppercase flex items-center gap-2">
                <span className="inline-block w-2 h-0.5 bg-emerald-400"></span>
                AI Engineering & Research
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight text-white dark:text-white light:text-neutral-900 leading-[0.95] uppercase">
                I BUILD <br />
                <span className="text-neutral-400 light:text-neutral-600">INTELLIGENT</span> <br />
                SYSTEMS.
              </h1>
            </div>

            <p className="max-w-2xl text-base sm:text-lg text-neutral-300 dark:text-neutral-300 light:text-neutral-700 font-normal leading-relaxed border-l-2 border-emerald-500/80 pl-4">
              AI systems, edge-first software, and experiments built for real-world constraints.
              Focusing on low-resource machine learning, cross-platform agents, and African-focused technology.
            </p>

            {/* Actions & Metadata tags */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="group relative inline-flex items-center gap-3 px-6 py-3.5 bg-neutral-100 text-neutral-900 font-mono text-xs font-bold tracking-wider uppercase hover:bg-emerald-400 hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <span>VIEW WORK</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#lab"
                className="group inline-flex items-center gap-3 px-6 py-3.5 border border-neutral-700 dark:border-neutral-700 light:border-neutral-300 bg-neutral-900/40 light:bg-neutral-100 text-neutral-200 dark:text-neutral-200 light:text-neutral-800 font-mono text-xs font-bold tracking-wider uppercase hover:border-emerald-500 hover:text-emerald-400 transition-all focus:outline-none"
              >
                <Cpu className="w-4 h-4 text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                <span>EXPLORE AI LAB</span>
              </a>
            </div>

            {/* Core Capability Chips */}
            <div className="pt-6 border-t border-neutral-800/80 light:border-neutral-200 flex flex-wrap gap-2 text-[11px] font-mono text-neutral-400">
              <span className="px-2.5 py-1 bg-neutral-900 light:bg-neutral-100 border border-neutral-800 light:border-neutral-300">
                [EDGE AI]
              </span>
              <span className="px-2.5 py-1 bg-neutral-900 light:bg-neutral-100 border border-neutral-800 light:border-neutral-300">
                [LOW-RESOURCE ML]
              </span>
              <span className="px-2.5 py-1 bg-neutral-900 light:bg-neutral-100 border border-neutral-800 light:border-neutral-300">
                [NLP & ROUTING]
              </span>
              <span className="px-2.5 py-1 bg-neutral-900 light:bg-neutral-100 border border-neutral-800 light:border-neutral-300">
                [GEOSPATIAL INTEL]
              </span>
            </div>
          </div>

          {/* Right Column: "CURRENTLY BUILDING" Micro-Interface */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 bg-[#0a0b0c]/90 dark:bg-[#0a0b0c]/90 light:bg-white p-5 space-y-4 shadow-xl">

              {/* Micro Header */}
              <div className="flex items-center justify-between border-b border-neutral-800 light:border-neutral-200 pb-3">
                <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-neutral-200 light:text-neutral-900">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span>CURRENTLY BUILDING</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 light:bg-emerald-100 px-1.5 py-0.5 border border-emerald-800 light:border-emerald-300">
                  LIVE
                </span>
              </div>

              {/* System Target Details */}
              <div>
                <div className="text-sm font-heading font-bold text-white light:text-neutral-900 tracking-wide">
                  VELKRO / EDGE AI
                </div>
                <p className="text-xs text-neutral-400 light:text-neutral-600 mt-1 font-sans">
                  Autonomous agent architecture & 35M-parameter edge classifier pipeline.
                </p>
              </div>

              {/* Status Grid */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-2 border-t border-neutral-800/60 light:border-neutral-200">
                <div className="p-2 bg-neutral-900/60 light:bg-neutral-100 border border-neutral-800/80 light:border-neutral-200">
                  <span className="text-neutral-500 block text-[9px]">STATUS</span>
                  <span className="text-emerald-400 font-bold">ACTIVE</span>
                </div>
                <div className="p-2 bg-neutral-900/60 light:bg-neutral-100 border border-neutral-800/80 light:border-neutral-200">
                  <span className="text-neutral-500 block text-[9px]">FOCUS</span>
                  <span className="text-neutral-200 light:text-neutral-800 font-medium">LOW-RESOURCE ML</span>
                </div>
                <div className="p-2 bg-neutral-900/60 light:bg-neutral-100 border border-neutral-800/80 light:border-neutral-200">
                  <span className="text-neutral-500 block text-[9px]">LOCATION</span>
                  <span className="text-neutral-200 light:text-neutral-800 font-medium">NG / GLOBAL</span>
                </div>
                <div className="p-2 bg-neutral-900/60 light:bg-neutral-100 border border-neutral-800/80 light:border-neutral-200">
                  <span className="text-neutral-500 block text-[9px]">SYSTEM</span>
                  <span className="text-emerald-400 font-medium">ONLINE</span>
                </div>
              </div>

              {/* Micro Status Bar / Telemetry */}
              <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-neutral-500 border-t border-neutral-800/60 light:border-neutral-200">
                <span>LATENCY: ~2ms</span>
                <span>MEM: 2GB ADAPTIVE</span>
              </div>
            </div>

            {/* Hexagonal Visual Language Indicator Box */}
            <div className="p-4 border border-dashed border-neutral-800 light:border-neutral-300 font-mono text-xs text-neutral-400 flex items-center gap-3">
              <div className="w-8 h-8 border border-neutral-700 flex items-center justify-center shrink-0 text-emerald-400">
                <Layers className="w-4 h-4" />
              </div>
              <div className="text-[11px] leading-tight text-neutral-400 light:text-neutral-600">
                <span className="text-neutral-200 light:text-neutral-800 font-semibold block">COMPUTATIONAL INTERFACE</span>
                Sparse node geometry & local edge execution.
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
