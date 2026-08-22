import { GraduationCap, MapPin } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { siteConfig } from '../config/site'

export default function Education() {
  const { degree, institution, location } = siteConfig.education

  return (
    <section id="education" className="section-pad bg-void-100/40">
      <div className="container-page">
        <SectionHeading index="06" eyebrow="education" title="Education" />

        <Reveal>
          <div className="reticle flex flex-col gap-5 p-7 sm:flex-row sm:items-start">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-cyan-glow/20 bg-cyan-glow/5 text-cyan-glow">
              <GraduationCap size={22} />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-mist">{degree}</h3>
              <p className="mt-1 text-mist-dim">{institution}</p>
              <p className="mt-2 flex items-center gap-1.5 font-mono text-xs text-mist-faint">
                <MapPin size={13} />
                {location}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
