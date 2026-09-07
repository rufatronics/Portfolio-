export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  stack: string[];
  description: string;
  features: string[];
  metrics?: { label: string; value: string }[];
  protocol?: string;
  encryption?: string;
  vision?: string;
  githubUrl?: string;
  liveUrl?: string;
  huggingFaceUrl?: string;
  datasetUrl?: string;
  imagePlaceholderText: string;
}

export const PROJECTS: Project[] = [
  {
    id: "northwatch-tactical",
    number: "01",
    title: "NORTHWATCH TACTICAL / NW0",
    tagline: "High-fidelity geospatial intelligence platform for predictive threat analysis across Nigeria.",
    category: "GEOSPATIAL AI / DEFENSE / SIGINT",
    year: "2025",
    stack: ["React 18", "Vite", "TypeScript", "Leaflet", "Supabase Realtime", "Tailwind CSS", "Framer Motion"],
    description: "Northwatch is a unified geospatial intelligence HUD built for predictive situational awareness, tactical reasoning, and threat monitoring across Nigeria's 37 sector boundaries.",
    features: [
      "National AI Grid with 5,400+ point density mesh",
      "Mapping across 37 sectors & Critical Flashpoints",
      "Pulsing HUD markers & threat classification",
      "Tactical reasoning / SITREPs & SIGINT feed",
      "Tactical Mode & High-res Satellite Mode rendering"
    ],
    metrics: [
      { label: "GRID MESH", value: "5,400+ points" },
      { label: "SECTORS", value: "37 covered" },
      { label: "PROTOCOL", value: "SITREP-4.1" },
      { label: "ENCRYPTION", value: "AES-256-GCM" }
    ],
    protocol: "SITREP-4.1",
    encryption: "AES-256-GCM",
    vision: "A unified predictive operating picture designed to move from reactive reporting toward proactive intervention.",
    githubUrl: "https://github.com/rufatronics/Nw0",
    liveUrl: "https://nw0.vercel.app",
    imagePlaceholderText: "TACTICAL HUD // GEOSPATIAL MESH"
  },
  {
    id: "deysafe",
    number: "02",
    title: "DEYSAFE",
    tagline: "Lightweight privacy-first web AI suite engineered for 2GB RAM edge devices.",
    category: "EDGE AI / WEB AI / PRIVACY",
    year: "2025",
    stack: ["TypeScript", "React", "Vite", "TensorFlow.js", "TFLite Web", "MLC WebLLM", "IndexedDB", "Service Worker"],
    description: "DeySafe proves useful AI should not require an expensive flagship device or permanent 5G connectivity. It executes computer vision and language inference locally inside the browser memory footprint.",
    features: [
      "On-device TFLite vision inference & model lifecycle manager",
      "Browser-based WebLLM chat running via Web Workers",
      "Offline model caching via IndexedDB & Service Worker",
      "Low-memory load/unload/cleanup routines targeting ~2GB RAM",
      "Zero server roundtrips — full client-side execution"
    ],
    metrics: [
      { label: "MEMORY TARGET", value: "~2GB RAM" },
      { label: "LATENCY", value: "Client Native" },
      { label: "STORAGE", value: "IndexedDB Cache" }
    ],
    vision: "Useful AI should not require an expensive device or permanent cloud connection.",
    githubUrl: "https://github.com/rufatronics/Deysafe",
    liveUrl: "https://deysafe.vercel.app",
    imagePlaceholderText: "DEYSAFE // ON-DEVICE INFERENCE ENGINE"
  },
  {
    id: "velkrogo",
    number: "03",
    title: "VELKROGO",
    tagline: "Self-hostable cross-platform AI agent written in Go with explicit security policy controls.",
    category: "AI AGENTS / GO / SYSTEMS",
    year: "2025",
    stack: ["Go", "Bubble Tea", "Anthropic API", "OpenAI-compatible APIs", "Ollama", "Web GUI"],
    description: "VelkroGo combines two operative personas: Coder (development services & repo modification) and Operator (files, shell, browser, network). Every action flows through explicit, revocable approval gates.",
    features: [
      "T0–T4 risk classification & policy gates",
      "Scoped session grants for high-risk capabilities",
      "Daemon architecture with Bubble Tea TUI and Web GUI frontends",
      "Provider-agnostic routing (Ollama, Anthropic, OpenAI)",
      "Self-modification workflow: Diff review → Self-test → Snapshot → Rollback"
    ],
    metrics: [
      { label: "LANGUAGE", value: "Go (Golang)" },
      { label: "RISK TIERS", value: "T0 to T4" },
      { label: "STATUS", value: "Phase 1 Implemented" }
    ],
    githubUrl: "https://github.com/rufatronics/VelkroGo",
    imagePlaceholderText: "VELKROGO // CODER & OPERATOR DAEMON"
  },
  {
    id: "ueg",
    number: "04",
    title: "UEG / UNIVERSAL EDGE GATEWAY",
    tagline: "35M-parameter bidirectional transformer for sub-3ms request routing before frontier LLMs.",
    category: "TRANSFORMERS / NLP ROUTING / ML RESEARCH",
    year: "2025",
    stack: ["PyTorch", "HuggingFace Transformers", "ONNX", "FastAPI", "Dataset Curation"],
    description: "UEG classifies incoming user intent, required resource class, and language across 22 classes before invoking expensive LLMs. It routes requests through 5 cost and compute tiers.",
    features: [
      "22 intent classes & 8 supported languages",
      "5 routing tiers: DROP/BLOCK, STATIC, DEVICE API, CACHE, FRONTIER",
      "Trained on 176,000+ curated synthetic & real prompt examples",
      "Published open HuggingFace model and dataset",
      "Low latency lightweight classifier footprint"
    ],
    metrics: [
      { label: "ACCURACY", value: "~90%+ (Reported)" },
      { label: "AVG LATENCY", value: "~2ms (VS 220ms Llama)" },
      { label: "PARAMETERS", value: "35M Transformer" },
      { label: "COVERAGE", value: "100%" }
    ],
    githubUrl: "https://github.com/rufatronics/ueg-api",
    liveUrl: "https://ueg-api.onrender.com",
    huggingFaceUrl: "https://huggingface.co/rufatronics/ueg-classifier",
    datasetUrl: "https://huggingface.co/datasets/rufatronics/ueg-training-data",
    imagePlaceholderText: "UEG // 35M PARAMETER INTENT ROUTER"
  },
  {
    id: "farmbot",
    number: "05",
    title: "FARMBOT",
    tagline: "Android native crop diagnostic system designed for low-tier hardware in African agriculture.",
    category: "COMPUTER VISION / ANDROID NDK / EDGE AGRI",
    year: "2024",
    stack: ["Kotlin", "Android NDK", "C++", "CMake", "TFLite", "Gradio", "GitHub Actions"],
    description: "FarmBot brings computer vision diagnosis directly to rural farmers. Running natively via C++ NDK on Android 5.0+ devices, it functions completely without internet connection.",
    features: [
      "MinSdk 21 (Android 5.0+) target for older phone compatibility",
      "Native C++ inference pipeline via CMake and NDK bindings",
      "Offline crop disease detection & treatment recommendations",
      "Companion HuggingFace models: crop-assistant, crop_doctor, health_scan",
      "Interactive Web Gradio demo on HuggingFace Spaces"
    ],
    metrics: [
      { label: "MIN SDK", value: "21 (Android 5.0)" },
      { label: "INFERENCE", value: "Native C++ NDK" },
      { label: "OFFLINE", value: "100% Autonomous" }
    ],
    vision: "Bring AI-powered crop diagnostics to farmers even when they have old phones or unreliable internet access.",
    githubUrl: "https://github.com/rufatronics/farmbot",
    huggingFaceUrl: "https://huggingface.co/spaces/rufatronics/farmbot-demo",
    datasetUrl: "https://huggingface.co/datasets/rufatronics/crop-disease-tlm-data",
    imagePlaceholderText: "FARMBOT // NATIVE C++ DIAGNOSTIC PIPELINE"
  }
];

export interface LabExperiment {
  id: string;
  name: string;
  category: "MODEL" | "DATASET" | "BENCHMARK" | "ARCHIVAL";
  description: string;
  tags: string[];
  specs: string;
  link?: string;
  status: "ACTIVE" | "PUBLISHED" | "RESEARCH";
}

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: "velkrolm-arch",
    name: "VELKRO-LM SPECIFICATIONS",
    category: "MODEL",
    description: "Compact sparse-attention transformer research exploring token efficiency and computational graphs on arm64 SoC clusters.",
    tags: ["Transformer", "Sparse Attention", "Edge"],
    specs: "Custom Kernel / Arm64 NEON",
    status: "RESEARCH"
  },
  {
    id: "ueg-dataset-176k",
    name: "UEG 176K INTENT DATASET",
    category: "DATASET",
    description: "176,000+ multi-turn and single-turn intent prompts across 22 operational classes in 8 major African & international languages.",
    tags: ["NLP", "Multilingual", "Dataset"],
    specs: "176,400 Rows / JSONL / Open-Source",
    link: "https://huggingface.co/datasets/rufatronics/ueg-training-data",
    status: "PUBLISHED"
  },
  {
    id: "crop-disease-tlm",
    name: "CROP DISEASE TLM DATASET",
    category: "DATASET",
    description: "Thermal and multi-spectral leaf anomaly dataset gathered specifically for low-resource West African agricultural contexts.",
    tags: ["Computer Vision", "Agriculture"],
    specs: "Multi-class Disease Taxonomy",
    link: "https://huggingface.co/datasets/rufatronics/crop-disease-tlm-data",
    status: "PUBLISHED"
  },
  {
    id: "ueg-35m-classifier",
    name: "UEG-35M TRANSFORMER",
    category: "MODEL",
    description: "Sub-3ms classifier model optimized with ONNX runtime for rapid edge-to-cloud request dispatching.",
    tags: ["Routing", "ONNX", "Edge"],
    specs: "35M Params / FP16 Quantized",
    link: "https://huggingface.co/rufatronics/ueg-classifier",
    status: "PUBLISHED"
  },
  {
    id: "edge-latency-bench",
    name: "ARM64 INFERENCE BENCHMARKS",
    category: "BENCHMARK",
    description: "In-depth latency vs RAM tradeoff study on MediaTek Helio G-series and Snapdragon 6xx chipsets for TFLite Web and WebLLM.",
    tags: ["Benchmarking", "Android NDK", "TFLite"],
    specs: "2GB - 4GB RAM Hardware Profiles",
    status: "ACTIVE"
  }
];
