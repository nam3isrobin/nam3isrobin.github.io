import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { GlassButton } from '@/components/ui/GlassButton'
import { ExternalLink, Github, Code, Zap } from 'lucide-react'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
            Selected <span className="text-gradient">Work</span>
          </h2>
          <p className="text-white/50 text-center max-w-2xl mx-auto mb-16">
            Building in public. Real projects, real problems, real solutions.
          </p>
        </ScrollReveal>

        <ScrollReveal stagger={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project: typeof projects[0]) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </ScrollReveal>

        {projects.filter((p: typeof projects[0]) => p.status !== 'coming-soon').length === 0 && (
          <ScrollReveal delay={0.5}>
            <GlassCard variant="strong" className="max-w-2xl mx-auto text-center p-12">
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-display text-2xl font-bold mb-2">More Coming Soon</h3>
              <p className="text-text-muted mb-6">
                I'm currently building some exciting projects. Check back soon or
                <a href="https://github.com/nam3isrobin" className="text-primary hover:text-primary/80 underline ms-1" target="_blank" rel="noopener">
                  follow my GitHub
                </a>
                for updates.
              </p>
              <GlassButton variant="ghost" asChild>
                <a href="https://github.com/nam3isrobin" target="_blank" rel="noopener">
                  View GitHub Profile
                </a>
              </GlassButton>
            </GlassCard>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const isComingSoon = project.status === 'coming-soon'

  const statusStyles = {
    building: 'border border-yellow-500/50 bg-yellow-500/20 text-yellow-300 font-bold',
    planning: 'border border-cyan-500/50 bg-cyan-500/20 text-cyan-300 font-bold',
    designing: 'border border-purple-500/50 bg-purple-500/20 text-purple-300 font-bold',
    live: 'border border-green-500/50 bg-green-500/20 text-green-300 font-bold',
    'coming-soon': 'border border-white/20 bg-white/10 text-white/70 font-bold',
  }

  return (
    <div
      className={cn(
        'rounded-2xl p-[1px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 relative group',
        project.gradient || 'bg-white/10'
      )}
    >
      <div className="rounded-[15px] bg-glass backdrop-blur-xl p-6 flex flex-col h-full hover:bg-glass-strong/90 transition-all duration-300 relative overflow-hidden">
        {isComingSoon && (
          <div className="absolute inset-0 z-10 backdrop-blur-md bg-dark-bg/20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-glass-strong px-4 py-2 rounded-full border border-white/10 text-sm text-white flex items-center gap-2 shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Under Construction
            </div>
          </div>
        )}
        <div className={cn("flex flex-col h-full transition-all duration-300", isComingSoon && "opacity-70 group-hover:blur-[2px] group-hover:opacity-40")}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className={cn('text-xs px-2 py-0.5 rounded-full font-medium', statusStyles[project.status as keyof typeof statusStyles])}>
                {project.status.replace('-', ' ')}
              </span>
            </div>
          </div>
          <h3 className="font-display text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-white/60 text-sm mb-4 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.slice(0, 5).map((tech: string) => (
              <span key={tech} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-full text-white/60">
                {tech}
              </span>
            ))}
            {project.stack.length > 5 && (
              <span className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-full text-white/40">
                +{project.stack.length - 5}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            {project.demoUrl && (
              <GlassButton
                size="sm"
                variant="ghost"
                className="flex-1 justify-center"
                asChild
              >
                <a href={project.demoUrl} target="_blank" rel="noopener">
                  <ExternalLink className="w-4 h-4 mr-1.5" />
                  Live Demo
                </a>
              </GlassButton>
            )}
            {project.repoUrl && (
              <GlassButton
                size="sm"
                variant="ghost"
                className="flex-1 justify-center"
                asChild
              >
                <a href={project.repoUrl} target="_blank" rel="noopener">
                  <Github className="w-4 h-4 mr-1.5" />
                  Code
                </a>
              </GlassButton>
            )}
            {!project.demoUrl && !project.repoUrl && (
              <GlassButton size="sm" variant="ghost" disabled className="flex-1 justify-center">
                <Code className="w-4 h-4 mr-1.5 opacity-50" />
                Private
              </GlassButton>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}