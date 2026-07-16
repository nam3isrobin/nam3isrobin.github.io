import React, { forwardRef } from 'react'
import type { HTMLMotionProps } from 'motion/react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { Magnetic } from './Magnetic'

interface GlassButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  gradient?: boolean
  magnetic?: boolean
  asChild?: boolean
  href?: string
  target?: string
  rel?: string
}

export const GlassButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, GlassButtonProps>(
  ({ className, variant = 'primary', size = 'md', gradient = false, magnetic = false, asChild = false, children, whileHover, whileTap, ...props }: GlassButtonProps, ref) => {
    const baseStyles = cn(
      'relative inline-flex items-center justify-center font-ui font-medium rounded-xl',
      'backdrop-blur-xl border transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg',
      'disabled:opacity-50 disabled:pointer-events-none',
      size === 'sm' && 'px-4 py-2 text-sm gap-2',
      size === 'md' && 'px-6 py-3 text-base gap-2.5',
      size === 'lg' && 'px-8 py-4 text-lg gap-3',
      variant === 'primary' && 'bg-glass-strong border-glass-borderHover text-white',
      variant === 'secondary' && 'bg-glass border-glass-border text-white/80 hover:bg-glass-strong',
      variant === 'ghost' && 'bg-transparent border-glass-border text-white/60 hover:bg-glass hover:text-white',
      gradient && 'gradient-border',
      className
    )

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<any>
      // Cast the element type or default to span
      const typeStr = typeof child.type === 'string' ? child.type : 'span'
      const Component = (motion as any)[typeStr] || motion.span
      
      return (
        <Component
          ref={ref as any}
          {...child.props}
          className={cn(baseStyles, child.props.className)}
          whileHover={whileHover || { scale: 1.02, y: -2 }}
          whileTap={whileTap || { scale: 0.98 }}
          {...props}
        >
          {child.props.children}
          {gradient && (
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-pink-500 to-orange-500 opacity-0 hover:opacity-20 transition-opacity pointer-events-none" />
          )}
        </Component>
      )
    }

    if (magnetic) {
      return (
        <Magnetic>
          <motion.button
            ref={ref as any}
            className={baseStyles}
            whileHover={whileHover || { scale: 1.02, y: -2 }}
            whileTap={whileTap || { scale: 0.98 }}
            {...props}
          >
            {children as React.ReactNode}
            {gradient && (
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-pink-500 to-orange-500 opacity-0 hover:opacity-20 transition-opacity pointer-events-none" />
            )}
          </motion.button>
        </Magnetic>
      )
    }

    return (
      <motion.button
        ref={ref as any}
        className={baseStyles}
        whileHover={whileHover || { scale: 1.02, y: -2 }}
        whileTap={whileTap || { scale: 0.98 }}
        {...props}
      >
        {children as React.ReactNode}
        {gradient && (
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-pink-500 to-orange-500 opacity-0 hover:opacity-20 transition-opacity pointer-events-none" />
        )}
      </motion.button>
    )
  }
)
GlassButton.displayName = 'GlassButton'