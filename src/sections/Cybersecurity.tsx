import { ShieldCheck } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { cyberTopics, cyberGroupLabels, type CyberTopic } from '../data/cybersecurity'

const groups = Array.from(new Set(cyberTopics.map((t) => t.group))) as CyberTopic['group'][]

export default function Cybersecurity() {
  return (
    <section id="cybersecurity" className="section-pad relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <SectionHeading
          index="03"
          eyebrow="cybersecurity"
          title="Cybersecurity & Security Research"
          description="I'm interested in understanding how web applications actually work, and how that gives rise to vulnerabilities. These are areas I actively study and practice — not a list of things I've mastered or broken professionally."
        />

        <Reveal className="reticle mb-8 flex items-center gap-3 p-5">
          <ShieldCheck className="shrink-0 text-cyan-glow" size={22} />
          <p className="text-sm leading-relaxed text-mist-dim">
            No claimed CVEs, no bounty payouts, no titles — just consistent, hands-on study of how
            web security works.
          </p>
        </Reveal>

        <div className="space-y-8">
          {groups.map((group, gi) => (
            <Reveal key={group} delay={gi * 100}>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-mist-faint">
                {cyberGroupLabels[group]}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cyberTopics
                  .filter((t) => t.group === group)
                  .map((topic) => (
                    <span
                      key={topic.id}
                      className="rounded-md border border-cyan-glow/15 bg-cyan-glow/[0.04] px-3 py-1.5 font-mono text-[13px] text-mist transition-colors hover:border-cyan-glow/40 hover:bg-cyan-glow/[0.08]"
                    >
                      {topic.label}
                    </span>
                  ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
