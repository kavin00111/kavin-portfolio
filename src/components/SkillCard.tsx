import type { SkillCategory } from '../data/skills'

export default function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <div className="reticle flex h-full flex-col p-6">
      <h3 className="mb-1.5 font-display text-base font-semibold text-mist">{category.title}</h3>
      <p className="mb-5 text-[13px] text-mist-dim">{category.description}</p>
      <div className="mt-auto flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span key={skill} className="tag hover:border-cyan-glow/40 hover:text-cyan-glow">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
