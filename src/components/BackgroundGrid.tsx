/**
 * Subtle technical background for the hero: a faint grid, a soft radial
 * glow, and a slow scanline sweep. Purely decorative — hidden from
 * assistive tech and capped so it never competes with the content.
 */
export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute left-0 right-0 top-0 h-40 animate-scan bg-gradient-to-b from-transparent via-cyan-glow/[0.04] to-transparent" />
      <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-electric/10 blur-[120px]" />
    </div>
  )
}
