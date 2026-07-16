import { useScroll, useTransform } from 'motion/react'
import { motion } from 'motion/react'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const progressColor = useTransform(scrollYProgress, [0, 0.5, 1], ['#a855f7', '#ec4899', '#f97316'])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 h-1 z-50 pointer-events-none"
        style={{ width: progressWidth, background: progressColor }}
      />
    </>
  )
}