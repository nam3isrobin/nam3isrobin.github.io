import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { Cpu, TrendingUp, Music, Wrench, GraduationCap, Globe, Database } from 'lucide-react'
import profileImg from '@/assets/profile.png'

const stats = [
  { value: 'B.Tech', label: 'CSE', icon: GraduationCap },
  { value: 'Local LLMs', label: 'llama.cpp & vLLM', icon: Cpu },
  { value: 'MT5 & MQL5', label: 'Algorithmic Systems', icon: TrendingUp },
  { value: 'Full-Stack', label: 'Web Apps & Dev', icon: Globe },
  { value: 'DIY & Music', label: 'Hardware & Audio', icon: Wrench },
]

const features = [
  { icon: Cpu, title: 'Artificial Intelligence & ML', desc: 'Deploying local LLMs with GGUF quantization, vLLM acceleration, RAG, and deep learning pipelines.' },
  { icon: Globe, title: 'Full-Stack Web Development', desc: 'Designing and building high-performance, responsive web applications using React, Next.js, Vite, and TypeScript with fluid animations and premium glassmorphic styling.' },
  { icon: TrendingUp, title: 'Quantitative FinTech', desc: 'Automated MetaTrader 5 backtesting strategies, MQL5 scalping systems, and risk management pipelines.' },
  { icon: Database, title: 'Systems, Databases & DevOps', desc: 'Architecting PostgreSQL and MongoDB databases, managing containerized Docker workflows, and scripting Linux terminal environments.' },
  { icon: Wrench, title: 'Hardware DIY & Tinkering', desc: 'Component-level diagnostic troubleshooting, circuit board repair, and electronics tinkering.' },
  { icon: Music, title: 'Creative Audio Technology', desc: 'Digital Audio Workstations, MIDI sequencing, and high-fidelity audio system setups.' },
]

export function About() {
  return (
    <section id="about" className="py-12 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="text-gradient">Me</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Photo Column */}
          <div className="lg:col-span-4 flex justify-center">
            <ScrollReveal delay={0.2}>
              <GlassCard className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden flex items-center justify-center border-glass-borderHover group shadow-2xl">
                {/* Profile Image */}
                <img
                  src={profileImg}
                  alt="Rabinarayan Sethy"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Visual overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-80 transition-opacity pointer-events-none" />

                {/* Glass glow border overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-pink-500 to-orange-500 opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none" />
              </GlassCard>
            </ScrollReveal>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-8 space-y-8">
            <ScrollReveal delay={0.3} className="space-y-4">
              <p className="text-text text-lg leading-relaxed">
                Hello! I'm <strong>Rabinarayan Sethy</strong>, though I often go by <strong>Robin</strong>. I'm currently a B.Tech student in Computer Science and Engineering at Vignan Institute of Technology and Management.
              </p>
              <p className="text-text text-lg leading-relaxed">
                My technical playground revolves around three main pillars: artificial intelligence, full-stack web development, and financial technology. I love the challenge of local deployment and optimization of Large Language Models (LLMs)—specializing in quantization formats like GGUF and deployment acceleration with tools like llama.cpp and vLLM. As a developer, I design and build highly interactive, responsive web applications using modern frameworks like React, Next.js, and TypeScript. Alongside that, I build automated, algorithmic trading systems, using MQL5 scripting and Python to build backtesting engines and real-time execution pipelines for MetaTrader 5 (MT5).
              </p>
              <p className="text-text text-lg leading-relaxed">
                I'm also a tinkerer and maker at heart. Whether it's diagnosing hardware failures, building DIY electronics, or troubleshooting circuits, I get a genuine kick out of building physical things. When I step away from the keyboard, you can usually find me producing music, playing the guitar, piano, or flute, or diving deep into the world of high-fidelity audio systems. I'm always open to talking about LLMs, trading setups, music, or hardware projects—feel free to reach out!
              </p>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.4} stagger={0.1} className="mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {stats.map((stat) => (
              <GlassCard key={stat.label} variant="hover" className="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(20%-13px)] p-4 text-center group">
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                <div className="font-display text-2xl font-bold text-text mb-0.5">{stat.value}</div>
                <div className="text-text-muted text-xs">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5} stagger={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <GlassCard key={feature.title} variant="hover" className="p-6 group">
                <feature.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-text-muted">{feature.desc}</p>
              </GlassCard>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}