interface SectionHeadingProps {
  index: string // e.g. "02"
  eyebrow: string // e.g. "skills"
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}`}>
      <p className="eyebrow mb-3">{`// ${index}_${eyebrow}`}</p>
      <h2 className="font-display text-3xl font-semibold text-mist sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 max-w-2xl text-mist-dim leading-relaxed">{description}</p>
      )}
    </div>
  )
}
