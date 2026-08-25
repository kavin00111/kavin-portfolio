import { Download, Mail } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { siteConfig } from '../config/site'
import { skillCategories } from '../data/skills'
import { projects } from '../data/projects'
import { isPlaceholder } from '../lib/placeholder'

export default function Resume() {
  const previewSkills = Array.from(new Set(skillCategories.flatMap((c) => c.skills))).slice(0, 16)

  return (
    <section id="resume" className="section-pad bg-void-100/40">
      <div className="container-page">
        <SectionHeading
          index="08"
          eyebrow="resume"
          title="Resume"
          description="A quick summary of everything on this page — plus a downloadable copy."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="reticle space-y-6 p-7">
              <div>
                <h3 className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-mist-faint">
                  Education
                </h3>
                <p className="text-sm text-mist">{siteConfig.education.degree}</p>
                <p className="text-sm text-mist-dim">{siteConfig.education.institution}</p>
              </div>

              <div>
                <h3 className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-mist-faint">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {previewSkills.map((s) => (
                      <span key={s} className="tag">
                        {s}
                      </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-mist-faint">
                  Projects
                </h3>
                <ul className="space-y-1 text-sm text-mist-dim">
                  {projects.map((p) => (
                    <li key={p.id}>
                      {p.name} <span className="text-mist-faint">— {p.status}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-mist-faint">
                  Cybersecurity Interests
                </h3>
                <p className="text-sm text-mist-dim">
                  Web application security, reconnaissance, vulnerability research, and bug bounty
                  methodology.
                </p>
              </div>

              {!isPlaceholder(siteConfig.links.email) && (
                <div>
                  <h3 className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-mist-faint">
                    Contact
                  </h3>
                  <p className="flex items-center gap-1.5 text-sm text-mist-dim">
                    <Mail size={14} /> {siteConfig.links.email}
                  </p>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="reticle flex h-full flex-col justify-center gap-4 p-7 text-center">
              <p className="text-sm text-mist-dim">
                Prefer a PDF? Grab the full resume below.
              </p>
              <a href={siteConfig.resumePath} download className="btn-primary">
                <Download size={16} />
                Download Resume
              </a>
              <p className="font-mono text-[11px] text-mist-faint">
                Add your file at <code>public/resume.pdf</code>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
