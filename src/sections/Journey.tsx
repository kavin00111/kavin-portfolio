import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { journeySteps } from '../data/journey'

export default function Journey() {
  return (
    <section id="journey" className="section-pad">
      <div className="container-page">
        <SectionHeading
          index="05"
          eyebrow="journey"
          title="My Journey"
          description="Not a job history — a record of what I've been learning and building, in order."
        />

        <ol className="relative border-l border-white/10 pl-8">
          {journeySteps.map((step, i) => (
            <Reveal as="li" key={step.id} delay={i * 90} className="relative mb-10 last:mb-0">
              <span
                className={`absolute -left-[calc(2rem+5px)] top-1 h-[9px] w-[9px] rounded-full ${
                  step.current
                    ? 'animate-pulse-ring bg-cyan-glow'
                    : 'bg-mist-faint'
                }`}
              />
              <p className="mb-1 font-mono text-xs text-mist-faint">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mb-1.5 font-display text-lg font-semibold text-mist">
                {step.title}
                {step.current && (
                  <span className="ml-2 rounded-full border border-signal/30 bg-signal/10 px-2 py-0.5 font-mono text-[11px] font-normal text-signal">
                    current
                  </span>
                )}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-mist-dim">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
