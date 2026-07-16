import { motion, AnimatePresence } from 'motion/react'
import { GlassButton } from '@/components/ui/GlassButton'
import { Magnetic } from '@/components/ui/Magnetic'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useScroll, useMotionValueEvent } from 'motion/react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20)
  })

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 border-b border-transparent"
        animate={{
          backgroundColor: isScrolled || isOpen ? 'rgba(10, 10, 20, 0.25)' : 'rgba(0, 0, 0, 0)',
          backdropFilter: isScrolled && !isOpen ? 'blur(24px)' : 'blur(0px)',
          borderColor: isScrolled ? 'rgba(255, 255, 255, 0.09)' : 'rgba(0, 0, 0, 0)'
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 h-14">
          <div className="flex items-center justify-between h-full">
            <Magnetic>
              <motion.a
                href="#"
                className="font-display text-xl font-bold text-gradient"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Robin
              </motion.a>
            </Magnetic>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="font-ui text-sm text-text-muted hover:text-text transition-colors relative"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 origin-left"
                    animate={{ scaleX: [0, 1] }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <GlassButton variant="ghost" size="sm" asChild>
                <a href="https://github.com/nam3isrobin" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </GlassButton>
              <button
                className="md:hidden glass p-2 rounded-xl text-text-muted hover:text-text transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="md:hidden py-4 px-6 mt-3 rounded-2xl glass border border-glass-border shadow-2xl"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className="text-text-muted hover:text-text transition-colors font-ui text-sm py-1"
                      whileHover={{ x: 4 }}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  )
}