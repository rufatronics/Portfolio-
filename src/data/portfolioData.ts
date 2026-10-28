export interface Project {
  id: string;
  number: string;
  title: string;
  summary: string;
  category: string;
  year: string;
  stack: string[];
  problem: string;
  whatIBuilt: string;
  result: string;
  githubUrl?: string;
  liveUrl?: string;
  huggingFaceUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "northwatch-tactical",
    number: "01",
    title: "Northwatch Tactical",
    summary: "Geospatial intelligence platform for predictive threat monitoring across Nigeria.",
    category: "Geospatial AI / SIGINT",
    year: "2025",
    stack: ["React", "TypeScript", "Leaflet", "Supabase Realtime", "Tailwind CSS"],
    problem: "Fragmented situational awareness across sector boundaries complicates threat analysis and tactical response.",
    whatIBuilt: "A unified geospatial intelligence dashboard with point density mesh and pulsing threat classification.",
    result: "Covers 37 sector boundaries with 5,400+ point density mesh for situational reporting.",
    githubUrl: "https://github.com/rufatronics/Nw0",
    liveUrl: "https://nw0.vercel.app"
  },
  {
    id: "deysafe",
    number: "02",
    title: "DeySafe",
    summary: "Lightweight privacy-first web AI suite engineered for 2GB RAM edge devices.",
    category: "Edge AI / Web AI / Privacy",
    year: "2025",
    stack: ["TypeScript", "React", "TensorFlow.js", "TFLite Web", "WebLLM", "IndexedDB"],
    problem: "Most modern AI suites require high-end hardware and constant high-speed cloud connectivity.",
    whatIBuilt: "A web-based AI suite executing computer vision and language inference locally inside browser memory.",
    result: "Runs vision and text models locally targeting ~2GB RAM footprint with zero server roundtrips.",
    githubUrl: "https://github.com/rufatronics/Deysafe",
    liveUrl: "https://deysafe.vercel.app"
  },
  {
    id: "velkrogo",
    number: "03",
    title: "VelkroGo",
    summary: "Self-hostable cross-platform AI agent written in Go with explicit security policy controls.",
    category: "AI Agents / Go / Systems",
    year: "2025",
    stack: ["Go", "Bubble Tea", "Anthropic API", "Ollama"],
    problem: "Autonomous AI coding and system agents often lack granular permission gating for file and shell access.",
    whatIBuilt: "A self-hostable agent daemon combining developer and operator personas with explicit policy approvals.",
    result: "Enforces tier-based risk gates (T0–T4) and self-testing workflows before applying system actions.",
    githubUrl: "https://github.com/rufatronics/VelkroGo"
  },
  {
    id: "ueg",
    number: "04",
    title: "Universal Edge Gateway (UEG)",
    summary: "35M-parameter bidirectional transformer for fast request routing before frontier LLMs.",
    category: "Transformers / Intent Routing / Low-Resource ML",
    year: "2025",
    stack: ["PyTorch", "HuggingFace Transformers", "ONNX", "FastAPI"],
    problem: "Invoking large frontier LLMs for trivial user prompts creates unnecessary API latency and compute costs.",
    whatIBuilt: "A 35M-parameter intent and resource classifier trained across 22 classes and 8 languages.",
    result: "Routes incoming requests across 5 compute tiers prior to cloud LLM execution.",
    githubUrl: "https://github.com/rufatronics/ueg-api",
    liveUrl: "https://ueg-api.onrender.com",
    huggingFaceUrl: "https://huggingface.co/rufatronics/ueg-classifier"
  }
];

export interface LabExperiment {
  id: string;
  name: string;
  category: "MODEL" | "DATASET" | "BENCHMARK" | "RESEARCH";
  description: string;
  specs: string;
  link?: string;
  status: "ACTIVE" | "PUBLISHED" | "RESEARCH" | "TODO";
}

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: "farmbot",
    name: "FarmBot Android Diagnostic Pipeline",
    category: "MODEL",
    description: "Android native crop diagnostic system using C++ NDK and TFLite for low-tier hardware in West African agriculture.",
    specs: "MinSdk 21 / Android NDK / C++ / TFLite",
    link: "https://github.com/rufatronics/farmbot",
    status: "PUBLISHED"
  },
  {
    id: "ueg-35m-classifier",
    name: "UEG-35M Transformer",
    category: "MODEL",
    description: "35M-parameter intent classifier model optimized with ONNX runtime for rapid edge request dispatching across 22 classes and 8 languages.",
    specs: "35M Params / FP16 Quantized",
    link: "https://huggingface.co/rufatronics/ueg-classifier",
    status: "PUBLISHED"
  },
  {
    id: "ueg-dataset-176k",
    name: "UEG 176K Intent Dataset",
    category: "DATASET",
    description: "176,000+ multi-turn and single-turn intent prompts across 22 operational classes in 8 major African & international languages.",
    specs: "176,000+ Rows / JSONL / Open Source",
    link: "https://huggingface.co/datasets/rufatronics/ueg-training-data",
    status: "PUBLISHED"
  },
  {
    id: "crop-disease-tlm",
    name: "Crop Disease TLM Dataset",
    category: "DATASET",
    description: "Thermal and multi-spectral leaf anomaly dataset gathered specifically for West African agricultural contexts.",
    specs: "Multi-class Disease Taxonomy",
    link: "https://huggingface.co/datasets/rufatronics/crop-disease-tlm-data",
    status: "PUBLISHED"
  },
  {
    id: "edge-latency-bench",
    name: "Arm64 Inference Benchmarks",
    category: "BENCHMARK",
    description: "In-depth study on latency vs RAM tradeoffs on MediaTek and Snapdragon chipsets for web and mobile AI runtimes.",
    specs: "2GB - 4GB RAM Target Profiles",
    status: "ACTIVE"
  },
  {
    id: "hausa-african-nlp",
    name: "Hausa and African-Language NLP Work",
    category: "RESEARCH",
    description: "Ongoing datasets and small language models specialized for Hausa and African language NLP tasks in low-resource environments.",
    specs: "TODO: Add real benchmark dataset size and evaluation metrics",
    status: "TODO"
  }
];
