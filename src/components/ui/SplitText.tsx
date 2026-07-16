import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface SplitTextProps {
  text: string
  className?: string
  splitBy?: 'chars' | 'words' | 'lines'
  delay?: number
  stagger?: number
  as?: 'h1' | 'h2' | 'p' | 'span'
}

export function SplitText({ 
  text, 
  className = '', 
  splitBy = 'chars', 
  delay = 0, 
  stagger = 0.03,
  as: Tag = 'h1'
}: SplitTextProps) {
  const ref = useRef<any>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  const items = splitBy === 'chars' 
    ? text.split('') 
    : splitBy === 'words' 
      ? text.split(' ') 
      : text.split('\n')

  return (
    <Tag ref={ref} className={cn('block', className)} aria-label={text}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: splitBy === 'lines' ? '100%' : '50%', rotateX: -90 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: delay + i * stagger,
          }}
          style={{ 
            display: splitBy === 'chars' ? 'inline-block' : 'inline', 
            whiteSpace: splitBy === 'chars' ? 'pre' : 'normal' 
          }}
        >
          {item}{splitBy === 'words' && ' '}
        </motion.span>
      ))}
    </Tag>
  )
}