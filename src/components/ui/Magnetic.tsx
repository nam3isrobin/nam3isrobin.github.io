'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import React, { useRef, useEffect, type ReactElement, cloneElement } from 'react'
import { cn } from '@/lib/utils'

interface MagneticProps {
  children: ReactElement
  strength?: number
}

export function Magnetic({ children, strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const isHovering = useMotionValue(false)

  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(springY, [-20, 20], ['10deg', '-10deg'])
  const rotateY = useTransform(springX, [-20, 20], ['-10deg', '10deg'])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (e.clientX - centerX) / (rect.width / 2)
      const deltaY = (e.clientY - centerY) / (rect.height / 2)
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2)
      
      if (distance < 1) {
        x.set(deltaX * strength * 30)
        y.set(-deltaY * strength * 30)
        isHovering.set(true)
      }
    }

    const handleLeave = () => {
      x.set(0)
      y.set(0)
      isHovering.set(false)
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [x, y, isHovering, strength])

  const child = children as ReactElement<any>
  const childRef = (child as any).ref

  return (
    <motion.div
      ref={(el) => { ref.current = el; if (typeof childRef === 'function') childRef(el); else if (childRef) childRef.current = el; }}
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        transformPerspective: 500,
        transformStyle: 'preserve-3d',
      }}
      className={cn('inline-block', child.props.className)}
    >
      {cloneElement(child, { ref: undefined })}
    </motion.div>
  )
}