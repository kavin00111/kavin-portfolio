import { useEffect, useState } from 'react'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { siteConfig } from '../config/site'
import BackgroundGrid from '../components/BackgroundGrid'

const TYPED_TEXT = `whoami`

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function Hero() {
  const [typed, setTyped] = useState(() => (prefersReducedMotion() ? TYPED_TEXT : ''))

  useEffect(() => {
    if (prefersReducedMotion()) return
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setTyped(TYPED_TEXT.slice(0, i))
      if (i >= TYPED_TEXT.length) clearInterval(interval)
    }, 110)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <BackgroundGrid />

      <div className="container-page relative py-20">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-mist-dim">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          Open to internships &amp; opportunities
        </div>

        <p className="mb-3 font-mono text-sm text-cyan-glow">
          {typed}
          <span className="animate-blink">_</span>
        </p>

        <h1 className="font-display text-4xl font-bold leading-[1.05] text-mist text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>

        <p className="mt-5 max-w-2xl font-mono text-sm text-mist-dim sm:text-base">
          {siteConfig.role}
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-mist-dim sm:text-lg">
          {siteConfig.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button onClick={() => scrollTo('projects')} className="btn-primary">
            View My Work
          </button>
          <a href={siteConfig.resumePath} download className="btn-secondary">
            <Download size={16} />
            Download Resume
          </a>
          <button onClick={() => scrollTo('contact')} className="btn-ghost">
            <Mail size={15} />
            Contact Me
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-float text-mist-faint transition-colors hover:text-cyan-glow sm:block"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  )
}
