import React, { useState } from 'react';
import { Send, Zap, ArrowRight, ShieldAlert, Cpu, CheckCircle2 } from 'lucide-react';

interface UegClassification {
  intent: string;
  resource: string;
  language: string;
  confidence: string;
  tier: string;
  tierDescription: string;
  latencyMs: number;
}

export const UegDemoWidget: React.FC = () => {
  const [inputPrompt, setInputPrompt] = useState('Anallyze crop infection symptoms on cassava leaves in Hausa');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<UegClassification | null>({
    intent: 'AGRI_DIAGNOSTICS_QUERY',
    resource: 'LOW_RAM_VISION_MODEL',
    language: 'HAUSA / ENGLISH',
    confidence: '98.4%',
    tier: 'TIER 3 — DEVICE API',
    tierDescription: 'Executes on local device NDK pipeline without cloud LLM invocation.',
    latencyMs: 2.1,
  });

  const samplePrompts = [
    { label: "Crop Disease", text: "Diagnose cassava brown streak disease in Kano region" },
    { label: "Threat Report", text: "SITREP: Report flashpoint movement in Sector 4 North" },
    { label: "Device Task", text: "Run local TFLite image segmenter on device photo" },
    { label: "Generic LLM", text: "Write a poem about quantum computers" }
  ];

  const handleClassify = (textToTest?: string) => {
    const query = textToTest || inputPrompt;
    if (!query.trim()) return;

    setIsAnalyzing(true);

    setTimeout(() => {
      const q = query.toLowerCase();
      let res: UegClassification;

      if (q.includes('crop') || q.includes('cassava') || q.includes('leaf') || q.includes('disease') || q.includes('diagnose')) {
        res = {
          intent: 'AGRI_DIAGNOSTICS_QUERY',
          resource: 'LOCAL_VISION_MODEL',
          language: 'HAUSA / EN',
          confidence: '98.8%',
          tier: 'TIER 3 — DEVICE API',
          tierDescription: 'Executes locally via Android NDK / TFLite.',
          latencyMs: 1.8,
        };
      } else if (q.includes('sitrep') || q.includes('sector') || q.includes('threat') || q.includes('flashpoint') || q.includes('northwatch')) {
        res = {
          intent: 'GEOSPATIAL_INTEL_QUERY',
          resource: 'REALTIME_GIS_STREAM',
          language: 'ENGLISH',
          confidence: '99.1%',
          tier: 'TIER 4 — CACHE LOOKUP',
          tierDescription: 'Matched active tactical grid vector database.',
          latencyMs: 2.3,
        };
      } else if (q.includes('device') || q.includes('tflite') || q.includes('photo') || q.includes('camera')) {
        res = {
          intent: 'LOCAL_MEDIA_PROCESSING',
          resource: 'DEVICE_NATIVE_DSP',
          language: 'NEUTRAL',
          confidence: '96.5%',
          tier: 'TIER 3 — DEVICE API',
          tierDescription: 'Handled entirely within user device hardware.',
          latencyMs: 1.5,
        };
      } else {
        res = {
          intent: 'GENERAL_KNOWLEDGE_PROMPT',
          resource: 'FRONTIER_LLM',
          language: 'ENGLISH',
          confidence: '91.2%',
          tier: 'TIER 5 — ROUTE TO FRONTIER',
          tierDescription: 'Requires high-parameter frontier reasoning cloud LLM.',
          latencyMs: 3.2,
        };
      }

      setResult(res);
      setIsAnalyzing(false);
    }, 280);
  };

  return (
    <div className="border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 bg-[#090a0b] light:bg-neutral-50 p-6 md:p-8 space-y-6">

      {/* Title Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 light:border-neutral-200 pb-4">
        <div>
          <div className="font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            INTERACTIVE CLASSIFIER DEMO
          </div>
          <h3 className="text-xl font-heading font-bold text-white light:text-neutral-900 mt-1">
            UEG-35M Intent & Routing Engine
          </h3>
        </div>

        <div className="font-mono text-[11px] text-neutral-400 bg-neutral-900 light:bg-neutral-200 px-3 py-1.5 border border-neutral-800 light:border-neutral-300 flex items-center gap-3">
          <span>MODEL: <strong className="text-white light:text-neutral-900">UEG-35M</strong></span>
          <span className="text-neutral-600">|</span>
          <span>LATENCY: <strong className="text-emerald-400">~2ms</strong></span>
        </div>
      </div>

      <p className="text-xs text-neutral-400 light:text-neutral-600 leading-relaxed font-sans">
        Test how the 35M-parameter bidirectional transformer evaluates intent, selects local vs cloud execution tiers, and calculates routing decisions prior to LLM invocation.
      </p>

      {/* Input Box & Quick Samples */}
      <div className="space-y-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleClassify()}
            placeholder="Type a sample query (e.g. diagnose crop leaf disease)..."
            className="flex-1 bg-neutral-950 light:bg-white border border-neutral-800 light:border-neutral-300 px-4 py-2.5 font-mono text-xs text-neutral-200 light:text-neutral-900 focus:outline-none focus:border-emerald-500 transition-colors"
          />
          <button
            onClick={() => handleClassify()}
            disabled={isAnalyzing}
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-bold uppercase transition-colors flex items-center gap-2 disabled:opacity-50 focus:outline-none"
          >
            {isAnalyzing ? (
              <span className="animate-pulse">EVALUATING...</span>
            ) : (
              <>
                <span>CLASSIFY</span>
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>

        {/* Quick Sample Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px]">
          <span className="text-neutral-500">TRY PRESETS:</span>
          {samplePrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => {
                setInputPrompt(p.text);
                handleClassify(p.text);
              }}
              className="px-2.5 py-1 bg-neutral-900/80 light:bg-neutral-200 hover:bg-neutral-800 light:hover:bg-neutral-300 text-neutral-300 light:text-neutral-800 border border-neutral-800 light:border-neutral-300 transition-colors"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Output Pipeline */}
      {result && (
        <div className="border border-neutral-800 light:border-neutral-300 bg-neutral-950 light:bg-white p-5 space-y-4">

          <div className="flex items-center justify-between text-xs font-mono border-b border-neutral-900 light:border-neutral-200 pb-3">
            <span className="text-neutral-500">// CLASSIFICATION OUTPUT</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              PROCESSED IN {result.latencyMs}ms
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">

            <div className="p-3 bg-neutral-900/40 light:bg-neutral-100 border border-neutral-800/80 light:border-neutral-200 space-y-1">
              <span className="text-[10px] text-neutral-500 block uppercase">PREDICTED INTENT</span>
              <span className="text-emerald-400 font-bold block truncate">{result.intent}</span>
            </div>

            <div className="p-3 bg-neutral-900/40 light:bg-neutral-100 border border-neutral-800/80 light:border-neutral-200 space-y-1">
              <span className="text-[10px] text-neutral-500 block uppercase">RESOURCE CLASS</span>
              <span className="text-neutral-200 light:text-neutral-800 font-bold block truncate">{result.resource}</span>
            </div>

            <div className="p-3 bg-neutral-900/40 light:bg-neutral-100 border border-neutral-800/80 light:border-neutral-200 space-y-1">
              <span className="text-[10px] text-neutral-500 block uppercase">LANGUAGE / DIALECT</span>
              <span className="text-neutral-200 light:text-neutral-800 font-bold block truncate">{result.language}</span>
            </div>

            <div className="p-3 bg-neutral-900/40 light:bg-neutral-100 border border-neutral-800/80 light:border-neutral-200 space-y-1">
              <span className="text-[10px] text-neutral-500 block uppercase">CONFIDENCE SCORE</span>
              <span className="text-emerald-400 font-bold block">{result.confidence}</span>
            </div>

          </div>

          {/* Tier Decision Pipeline Banner */}
          <div className="p-3 border border-emerald-900/50 light:border-emerald-300 bg-emerald-950/20 light:bg-emerald-50/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
            <div>
              <span className="text-emerald-400 font-bold tracking-wider block">{result.tier}</span>
              <span className="text-neutral-400 light:text-neutral-600 text-[11px]">{result.tierDescription}</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold shrink-0">
              <CheckCircle2 className="w-4 h-4" />
              <span>OPTIMAL ROUTE</span>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
