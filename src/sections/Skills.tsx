import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'
import Reveal from '../components/Reveal'
import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-void-100/40">
      <div className="container-page">
        <SectionHeading
          index="02"
          eyebrow="skills"
          title="Skills"
          description="Organized by area, not scored with meaningless percentages — proficiency here means hands-on exposure and continued practice."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.id} delay={i * 80}>
              <SkillCard category={category} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
