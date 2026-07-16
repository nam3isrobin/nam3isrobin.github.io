'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'motion/react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { GlassButton } from '@/components/ui/GlassButton'
import { Mail, Send, CheckCircle, AlertCircle, Github, Linkedin } from 'lucide-react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xojorkkv'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setStatus('submitting')
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it.
            Send a message and I'll get back to you within 24 hours.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <GlassCard variant="strong" className="p-8 md:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label="Name"
                  error={errors.name?.message}
                  required
                >
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                      focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20
                      text-white placeholder-white/30 transition-colors"
                    placeholder="Your name"
                    disabled={status === 'submitting'}
                  />
                </FormField>
                <FormField
                  label="Email"
                  error={errors.email?.message}
                  required
                >
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' }
                    })}
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                      focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20
                      text-white placeholder-white/30 transition-colors"
                    placeholder="you@example.com"
                    disabled={status === 'submitting'}
                  />
                </FormField>
              </div>

              <FormField label="Subject" error={errors.subject?.message} required>
                <select
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                    focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20
                    text-white transition-colors appearance-none"
                  disabled={status === 'submitting'}
                >
                  <option value="">Select a topic</option>
                  <option value="project">Project Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="freelance">Freelance Work</option>
                  <option value="other">Other</option>
                </select>
              </FormField>

              <FormField label="Message" error={errors.message?.message} required>
                <textarea
                  {...register('message', {
                    required: 'Message is required',
                    minLength: { value: 20, message: 'Message too short (min 20 chars)' }
                  })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                    focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20
                    text-white placeholder-white/30 transition-colors resize-none"
                  placeholder="Tell me about your project, timeline, and budget..."
                  disabled={status === 'submitting'}
                />
              </FormField>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Message sent! I'll get back to you soon.</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Something went wrong. Try again or email directly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <GlassButton
                type="submit"
                variant="primary"
                size="lg"
                className="w-full md:w-auto"
                disabled={status === 'submitting'}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'submitting' ? (
                  <>
                    <motion.div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </GlassButton>
            </form>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Mail, title: 'Email', value: 'd3vrobin@outlook.com', href: 'mailto:d3vrobin@outlook.com' },
              { icon: Github, title: 'GitHub', value: '@nam3isrobin', href: 'https://github.com/nam3isrobin' },
              { icon: Linkedin, title: 'LinkedIn', value: 'nam3isrobin', href: 'https://linkedin.com/in/nam3isrobin' },
            ].map(({ icon: Icon, title, value, href }) => (
              <GlassCard key={title} variant="hover" className="p-6 text-center group">
                <Icon className="w-6 h-6 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <p className="text-xs font-mono text-text-muted uppercase tracking-wider">{title}</p>
                <a href={href} className="text-text hover:text-primary transition-colors block mt-1">
                  {value}
                </a>
              </GlassCard>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function FormField({ label, error, required, children }: {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-white/70 mb-2 flex items-center gap-1">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 text-sm text-red-400 flex items-center gap-1"
        >
          <AlertCircle className="w-3.5 h-3.5" />
          {error}
        </motion.p>
      )}
    </div>
  )
}