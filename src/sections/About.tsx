import { Code2, Shield, Terminal as TerminalIcon, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { siteConfig } from '../config/site'

const highlights = [
  { icon: Code2, label: 'Writing code across languages and frameworks' },
  { icon: Shield, label: 'Studying how web applications fail' },
  { icon: TerminalIcon, label: 'Comfortable on Linux and the command line' },
  { icon: Sparkles, label: 'Learning something new most weeks' },
]

export default function About() {
  const paragraphs = siteConfig.about
    .split('\n\n')
    .map((p) => p.trim())
    .filter(Boolean)

  return (
    <section id="about" className="section-pad">
      <div className="container-page">
        <SectionHeading index="01" eyebrow="about" title="About Me" />

        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="space-y-4 text-[15px] leading-relaxed text-mist-dim">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {siteConfig.interests.map((interest) => (
                <span key={interest} className="tag">
                  {interest}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <div className="reticle grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-1">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-cyan-glow/20 bg-cyan-glow/5 text-cyan-glow">
                    <Icon size={16} />
                  </span>
                  <p className="text-sm leading-relaxed text-mist-dim">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
