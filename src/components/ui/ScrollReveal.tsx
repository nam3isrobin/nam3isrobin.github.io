import React, { useRef, cloneElement, type ReactElement } from 'react'
import type { HTMLMotionProps } from 'motion/react'
import { motion, useInView } from 'motion/react'
import { cn } from '@/lib/utils'

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  delay?: number
  stagger?: number
  children: React.ReactNode
  className?: string
}

export function ScrollReveal({ 
  delay = 0, 
  stagger = 0.1, 
  children, 
  className,
  ...props 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        duration: 0.7, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay,
      }}
      {...props}
    >
      {React.Children.map(children, (child, i) => 
        React.isValidElement(child) ? cloneElement(child as ReactElement<any>, {
          style: { 
            ...(child as any).props?.style, 
            transitionDelay: `${delay + i * stagger}s` 
          }
        }) : child
      )}
    </motion.div>
  )
}