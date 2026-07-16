import React from 'react'
import { ScrollReveal } from './ScrollReveal'

interface SectionHeadingProps {
  index?: string
  title: string
  highlight?: string
  description?: string
  centered?: boolean
}

export function SectionHeading({ index, title, highlight, description, centered }: SectionHeadingProps) {
  return (
    <ScrollReveal>
      {index && (
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-sm text-primary/80">{index}</span>
          <div className="h-px flex-1 bg-white/[0.06]"></div>
        </div>
      )}
      <div className={centered ? "flex flex-col items-center text-center w-full" : ""}>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
        {description && (
          <p className="text-text-muted max-w-xl text-lg text-center mx-auto">
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  )
}
