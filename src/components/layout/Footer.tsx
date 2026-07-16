import { motion } from 'motion/react'
import { GlassCard } from '@/components/ui/GlassCard'
import { Github, Linkedin, Twitter, Mail, Heart, Zap, Sparkles } from 'lucide-react'

export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/nam3isrobin', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/nam3isrobin', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/Robinraspb3rry', label: 'Twitter' },
    { icon: Mail, href: 'mailto:d3vrobin@outlook.com', label: 'Email' },
  ]

  return (
    <footer className="relative py-16 px-6 border-t border-glass-border">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Top: Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard variant="default" className="p-6 text-center">
            <Zap className="w-6 h-6 mx-auto mb-3 text-red-700" />
            <h4 className="font-display text-lg font-bold mb-2">Lightspeed Delivery</h4>
            <p className="text-text-muted text-sm">
              Shipping high-quality code at the speed of light.
            </p>
          </GlassCard>

          <GlassCard variant="default" className="p-6 text-center">
            <Heart className="w-6 h-6 mx-auto mb-3 text-pink-500" />
            <h4 className="font-display text-lg font-bold mb-2">Made with Care</h4>
            <p className="text-text-muted text-sm">
              Every pixel crafted with attention to detail and accessibility.
            </p>
          </GlassCard>

          <GlassCard variant="default" className="p-6 text-center">
            <Sparkles className="w-6 h-6 mx-auto mb-3 text-primary" />
            <h4 className="font-display text-lg font-bold mb-2">Always Learning</h4>
            <p className="text-text-muted text-sm">
              Constantly exploring new tools, patterns, and possibilities.
            </p>
          </GlassCard>
        </div>

        {/* Middle: Slogan & Socials */}
        <div className="pt-12 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <motion.h3
              className="font-display text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Let's build the <span className="text-gradient">future.</span>
            </motion.h3>
            <motion.p
              className="text-text-muted font-ui text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Turning complex problems into elegant solutions.
            </motion.p>
          </div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-hover p-2 rounded-xl transition-colors text-text-muted hover:text-text"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom: Copyright */}
        <motion.div
          className="text-center text-text-muted/60 text-sm font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          &copy; {new Date().getFullYear()} Rabinarayan Sethy. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}