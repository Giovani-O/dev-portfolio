interface ProjectImageProps {
  imageName: string
  alt: string
  className?: string
}

export function ProjectImage({ imageName, alt, className }: ProjectImageProps) {
  if (!imageName) return null

  const baseUrl = import.meta.env.BASE_URL ?? '/'
  const normalizedBase = baseUrl.replace(/\/$/, '')
  const imagePath = `${normalizedBase}/projects/${imageName}`

  return <img src={imagePath} alt={alt} className={className} />
}