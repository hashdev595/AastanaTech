import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
}

export default function ProjectCard({ title, description, image, technologies, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      className="group rounded-lg overflow-hidden border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 bg-card hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
        <Image
          src={image || "/placeholder.svg?height=192&width=400&query=software project showcase"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded text-xs font-semibold bg-gradient-to-r from-primary/30 to-accent/30 text-accent border border-accent/30 group-hover:border-accent/60 group-hover:from-primary/50 group-hover:to-accent/50 transition-all"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-2 py-1 rounded text-xs font-semibold bg-muted/50 text-muted-foreground">
              +{technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </a>
  )
}
