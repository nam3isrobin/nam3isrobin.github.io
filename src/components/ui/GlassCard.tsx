import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'strong' | 'hover'
  gradientBorder?: boolean
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = 'default', gradientBorder = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl backdrop-blur-xl border transition-all duration-300',
          variant === 'default' && 'bg-glass border-glass-border',
          variant === 'strong' && 'bg-glass-strong border-glass-border',
          variant === 'hover' && 'bg-glass border-glass-border glass-hover',
          gradientBorder && 'gradient-border',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
GlassCard.displayName = 'GlassCard'