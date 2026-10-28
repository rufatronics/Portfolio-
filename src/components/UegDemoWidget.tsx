import React, { useState } from 'react';
import { Send, Zap, Cpu, CheckCircle2 } from 'lucide-react';

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
  const [inputPrompt, setInputPrompt] = useState('Analyze crop infection symptoms on cassava leaves in Hausa');
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
    }, 250);
  };

  return (
    <div className="border border-[var(--border)] bg-[var(--surface)] p-6 space-y-6 rounded-sm font-sans">

      {/* Title Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <div className="font-mono text-xs text-[var(--accent)] font-semibold tracking-wider uppercase flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            Interactive Classifier Demo
          </div>
          <h4 className="text-lg font-heading font-bold text-[var(--text)] mt-1">
            UEG-35M Intent & Routing Engine
          </h4>
        </div>

        <div className="font-mono text-[11px] text-[var(--text-muted)] bg-[var(--bg)] px-3 py-1.5 border border-[var(--border)] flex items-center gap-3 rounded-sm">
          <span>MODEL: <strong className="text-[var(--text)]">UEG-35M</strong></span>
          <span className="text-[var(--border-strong)]">|</span>
          <span className="text-[var(--accent)] font-semibold">Simulated example</span>
        </div>
      </div>

      <p className="text-xs text-[var(--text-muted)] leading-relaxed">
        Simulated demonstration of how the 35M-parameter bidirectional transformer evaluates intent, selects local vs cloud execution tiers, and calculates routing decisions prior to LLM invocation.
      </p>

      {/* Input Box & Quick Samples */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleClassify()}
            placeholder="Type a sample query (e.g. diagnose crop leaf disease)..."
            className="flex-1 bg-[var(--bg)] border border-[var(--border)] px-4 py-2.5 font-mono text-xs text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors rounded-sm min-h-[44px]"
          />
          <button
            onClick={() => handleClassify()}
            disabled={isAnalyzing}
            className="px-5 py-2.5 bg-[var(--accent)] hover:opacity-90 text-white font-mono text-xs font-bold uppercase transition-colors flex items-center justify-center gap-2 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded-sm min-h-[44px] cursor-pointer"
          >
            {isAnalyzing ? (
              <span className="animate-pulse">Evaluating...</span>
            ) : (
              <>
                <span>Classify</span>
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>

        {/* Quick Sample Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px]">
          <span className="text-[var(--text-muted)]">Presets:</span>
          {samplePrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => {
                setInputPrompt(p.text);
                handleClassify(p.text);
              }}
              className="px-2.5 py-1.5 bg-[var(--bg)] hover:bg-[var(--surface-hover)] text-[var(--text)] border border-[var(--border)] transition-colors rounded-sm cursor-pointer min-h-[32px]"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Output Pipeline */}
      {result && (
        <div className="border border-[var(--border)] bg-[var(--bg)] p-4 space-y-4 rounded-sm">

          <div className="flex items-center justify-between text-xs font-mono border-b border-[var(--border)] pb-2.5">
            <span className="text-[var(--text-muted)]">Classification Output (Simulated example)</span>
            <span className="text-[var(--accent)] font-semibold flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              {result.latencyMs}ms
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">

            <div className="p-2.5 bg-[var(--surface)] border border-[var(--border)] space-y-1 rounded-sm">
              <span className="text-[10px] text-[var(--text-muted)] block uppercase">Predicted Intent</span>
              <span className="text-[var(--accent)] font-bold block truncate">{result.intent}</span>
            </div>

            <div className="p-2.5 bg-[var(--surface)] border border-[var(--border)] space-y-1 rounded-sm">
              <span className="text-[10px] text-[var(--text-muted)] block uppercase">Resource Class</span>
              <span className="text-[var(--text)] font-bold block truncate">{result.resource}</span>
            </div>

            <div className="p-2.5 bg-[var(--surface)] border border-[var(--border)] space-y-1 rounded-sm">
              <span className="text-[10px] text-[var(--text-muted)] block uppercase">Language</span>
              <span className="text-[var(--text)] font-bold block truncate">{result.language}</span>
            </div>

            <div className="p-2.5 bg-[var(--surface)] border border-[var(--border)] space-y-1 rounded-sm">
              <span className="text-[10px] text-[var(--text-muted)] block uppercase">Confidence</span>
              <span className="text-[var(--accent)] font-bold block">{result.confidence}</span>
            </div>

          </div>

          <div className="p-3 border border-[var(--border)] bg-[var(--surface)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono rounded-sm">
            <div>
              <span className="text-[var(--accent)] font-bold block">{result.tier}</span>
              <span className="text-[var(--text-muted)] text-[11px]">{result.tierDescription}</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-[var(--accent)] font-semibold shrink-0">
              <CheckCircle2 className="w-4 h-4" />
              <span>Optimal Route</span>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
