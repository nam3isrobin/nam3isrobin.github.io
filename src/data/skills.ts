export interface Skill {
  name: string
  category: 'ai_quant' | 'fullstack' | 'systems_db' | 'creative_diy'
  level: number
  color: string
}

export const skills: Skill[] = [
  // AI, ML & Quant
  { name: 'Python', category: 'ai_quant', level: 5, color: '#3776ab' },
  { name: 'LangGraph & Agentic AI', category: 'ai_quant', level: 5, color: '#ef4444' },
  { name: 'Groq & Gemini APIs', category: 'ai_quant', level: 5, color: '#f59e0b' },
  { name: 'PyTorch & TensorFlow', category: 'ai_quant', level: 4, color: '#ee4c2c' },
  { name: 'LLM Deploy (llama.cpp/vLLM)', category: 'ai_quant', level: 5, color: '#a855f7' },
  { name: 'MT5 & MQL5 Trading', category: 'ai_quant', level: 5, color: '#00bcd4' },
  { name: 'Quant Analysis & Scalping', category: 'ai_quant', level: 4, color: '#10b981' },

  // Full-Stack
  { name: 'React (19) & Next.js', category: 'fullstack', level: 5, color: '#61dafb' },
  { name: 'TypeScript', category: 'fullstack', level: 5, color: '#3178c6' },
  { name: 'FastAPI', category: 'fullstack', level: 5, color: '#009688' },
  { name: 'Tailwind CSS & Motion', category: 'fullstack', level: 5, color: '#06b6d4' },
  { name: 'React Three Fiber & WebGL', category: 'fullstack', level: 4, color: '#f97316' },
  { name: 'WebSockets & Real-time', category: 'fullstack', level: 4, color: '#8b5cf6' },
  { name: 'Streamlit & Plotly', category: 'fullstack', level: 4, color: '#ff4b4b' },
  { name: 'Vanilla JS & Canvas API', category: 'fullstack', level: 5, color: '#f7df1e' },
  { name: 'Node.js & Express', category: 'fullstack', level: 4, color: '#339933' },

  // Systems & Databases
  { name: 'PostgreSQL, MongoDB & SQLite', category: 'systems_db', level: 4, color: '#47a248' },
  { name: 'Docker & Git/GitHub', category: 'systems_db', level: 5, color: '#2496ed' },
  { name: 'Linux / Bash Scripting', category: 'systems_db', level: 5, color: '#f89820' },
  { name: 'DSA & OOP Foundations', category: 'systems_db', level: 4, color: '#14b8a6' },

  // Creative & DIY
  { name: 'DIY Electronics & Circuits', category: 'creative_diy', level: 4, color: '#eab308' },
  { name: 'Audio Production (DAWs)', category: 'creative_diy', level: 4, color: '#ef4444' },
  { name: 'Hardware Repair & Diagn.', category: 'creative_diy', level: 4, color: '#6b7280' },
]

export const skillPillars = [
  { id: 'ai_quant', title: 'AI, ML & Quant Tech', blurb: 'Building models and quant systems.' },
  { id: 'fullstack', title: 'Full-Stack Development', blurb: 'Creating responsive user interfaces.' },
  { id: 'systems_db', title: 'Systems & Databases', blurb: 'Architecting robust data solutions.' },
  { id: 'creative_diy', title: 'Creative & DIY', blurb: 'Exploring hardware and audio.' },
]