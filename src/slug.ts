export const formatSlug = (text: string, prefix?: string) => {
  const base = text
    ?.toLowerCase()
    .trim()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')

  return prefix ? `${prefix}-${base}` : base
}
