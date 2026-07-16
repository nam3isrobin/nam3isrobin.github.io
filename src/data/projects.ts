export interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  status: 'building' | 'planning' | 'designing' | 'live' | 'coming-soon'
  gradient?: string
  demoUrl?: string
  repoUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'proj-flowfinance',
    title: 'FlowFinance',
    description: 'A premium, interactive financial planner with real-time SIP, EMI, and Loan calculators. Features smooth 3D Canvas animations and dynamic charting.',
    stack: ['HTML5 Canvas', 'Vanilla JS', 'Three.js', 'Lucide Icons', 'CSS variables'],
    status: 'live',
    gradient: 'bg-gradient-to-br from-teal-600/50 to-emerald-700/50',
    demoUrl: 'https://nam3isrobin.github.io/FlowFinance/',
    repoUrl: 'https://github.com/nam3isrobin/FlowFinance',
    featured: true,
  },
  {
    id: 'proj-quantforge',
    title: 'QuantForge: MT5 AI Command Center',
    description: 'An ultra-modern, headless MetaTrader 5 backtesting environment built with Streamlit. Automates MT5 CLI executions, visualizes equity curves with Monte Carlo simulations, and analyzes algorithmic strategies with an integrated AI Analyst.',
    stack: ['Python', 'Streamlit', 'MQL5', 'SQLite', 'Google Gemini'],
    status: 'live',
    gradient: 'bg-gradient-to-br from-slate-800/80 to-blue-900/80',
    demoUrl: 'https://github.com/nam3isrobin/QuantForge-MT5-AI-Command-Center',
    repoUrl: 'https://github.com/nam3isrobin/QuantForge-MT5-AI-Command-Center',
    featured: true,
  },
  {
    id: 'proj-forgeos',
    title: 'ForgeOS: AI Coding Assistant',
    description: 'An AI-powered software development assistant acting as an advanced pair programmer. Features a fully autonomous LangGraph agent loop that reasons, codes, and tests its own work in dynamic sandbox workspaces, with an interactive real-time execution trace UI.',
    stack: ['Python', 'LangGraph', 'FastAPI', 'Next.js', 'Groq API'],
    status: 'building',
    gradient: 'bg-gradient-to-br from-indigo-500/80 to-purple-800/80',
    repoUrl: 'https://github.com/nam3isrobin/ForgeOS',
    featured: true,
  },
]