/**
 * Returns true if a config value is still an unfilled placeholder
 * (e.g. "YOUR_GITHUB_URL") rather than a real value the user has provided.
 */
export function isPlaceholder(value: string | undefined | null): boolean {
  if (!value) return true
  return /^YOUR_/i.test(value.trim())
}
