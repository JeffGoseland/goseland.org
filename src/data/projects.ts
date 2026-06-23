import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Music Intelligence Pipeline",
    description:
      "Emotion-aware music analysis system that predicts arousal and valence from audio, then tags music semantically to prevent hallucination and provide an interpretable interface over raw predictions.",
    bullets: [
      "Dataset: DEAM (Database for Emotional Analysis in Music)",
      "Features: librosa, OpenSMILE",
      "Model: XGBoost for arousal/valence prediction",
      "Interface: Shiny for Python (interactive querying)",
    ],
    extraParagraph:
      "Raw predictions (R&sup2; ~0.43) are directional, not precise. The semantic layer interprets them into broad emotional tags: uplifting, introspective, and similar.",
    metrics: ["R&sup2; ~0.43", "Pearson r ~0.66"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/JeffGoseland/music_intelligence_pipeline",
      },
    ],
  },
  {
    title: "Neural Bard: Spotify LLM Playlist Generator",
    description:
      "Full-stack application that generates Spotify playlists from natural language via LLM (Grok), then creates them through OAuth.",
    bullets: [
      "Frontend: HTML5, Bootstrap 5, vanilla JavaScript",
      "Backend: Netlify serverless functions",
      "LLM: x.ai Grok-3-fast",
      "Features: duplicate detection, smart playlist management, OAuth flow",
    ],
    links: [
      {
        label: "Live demo",
        href: "https://spotify-llm-driven-playlist.netlify.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/JeffGoseland/spotify-llm-driven-playlist",
      },
    ],
  },
  {
    title: "Aimpoint Digital LP Challenge",
    description:
      "Mixed-integer linear programming applied to a vehicle routing dataset using scipy.optimize.linprog with the HiGHS solver: constraint design, solver selection, and practical optimization workflow.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/JeffGoseland/ad-challenge",
      },
    ],
  },
];
