import { ArrowDownRight, ArrowRight } from 'lucide-react'
import { GlassButton } from '@/components/ui/GlassButton'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SplitText } from '@/components/ui/SplitText'
import { StatusStrip } from '@/components/ui/StatusStrip'
import { HeroParticles } from '@/components/three/HeroParticles'
import React from 'react'

const pillars = [
  { label: 'AI / Local LLMs', detail: 'llama.cpp · vLLM · RAG' },
  { label: 'Full-Stack', detail: 'React · FastAPI · TypeScript' },
  { label: 'Quant Systems', detail: 'MT5 · MQL5 · Python' },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100dvh-4rem)] flex items-center px-5 sm:px-6 overflow-hidden"
    >
      <HeroParticles />

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(3,3,5,0.2) 0%, transparent 30%, transparent 60%, rgba(3,3,5,0.85) 100%), radial-gradient(ellipse 90% 70% at 50% 50%, transparent 30%, rgba(3,3,5,0.55) 100%)',
        }}
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <div className="lg:col-span-8">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Rabinarayan Sethy</span>
                <span className="h-px w-10 bg-primary/40" aria-hidden />
                <span className="font-mono text-[11px] text-text-muted/70 uppercase tracking-widest">
                  Portfolio 2026
                </span>
              </div>
            </ScrollReveal>

            <SplitText
              as="h1"
              text="Building intelligent systems"
              className="font-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight leading-[1.05] text-balance"
              splitBy="words"
              stagger={0.035}
              delay={0.08}
            />

            <ScrollReveal delay={0.2}>
              <p
                className="mt-6 text-base md:text-lg text-text-muted max-w-xl leading-relaxed"
                style={{ textWrap: 'pretty' } as React.CSSProperties}
              >
                Local LLMs, agent loops, and MT5 systems — software that runs on your machine and in
                the market.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.28} className="mt-8">
              <StatusStrip />
            </ScrollReveal>

            <ScrollReveal delay={0.35} className="mt-8 flex flex-wrap items-center gap-3">
              <GlassButton asChild size="lg" variant="primary" className="group">
                <a href="#projects">
                  View selected work
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </GlassButton>
              <GlassButton asChild size="lg" variant="ghost">
                <a href="#contact">Get in touch</a>
              </GlassButton>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4">
            <ScrollReveal delay={0.25}>
              <div className="border border-white/[0.07] rounded-2xl p-5 bg-white/[0.02] backdrop-blur-sm">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">Focus areas</p>
                <ul className="space-y-0 divide-y divide-white/[0.06]">
                  {pillars.map((p) => (
                    <li key={p.label} className="py-3.5 first:pt-0 last:pb-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-display font-semibold text-text text-sm">{p.label}</p>
                          <p className="font-mono text-[11px] text-text-muted/70 mt-1">{p.detail}</p>
                        </div>
                        <ArrowDownRight className="w-4 h-4 text-primary/60 shrink-0 mt-0.5" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.4} className="mt-16 md:mt-20">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.06] pt-6">
            <span className="font-mono text-[11px] text-text-muted/70 uppercase tracking-widest">
              Currently
            </span>
            <span className="text-sm text-text-muted">
              B.Tech CSE · VITAM · Building <span className="text-text">ForgeOS</span> & quant tooling
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}