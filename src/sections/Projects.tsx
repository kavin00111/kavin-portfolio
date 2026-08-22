import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-void-100/40">
      <div className="container-page">
        <SectionHeading
          index="04"
          eyebrow="projects"
          title="Featured Projects"
          description="A mix of shipped work and projects still in progress — labeled honestly either way."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
