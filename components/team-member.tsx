import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  image: string
}

export default function TeamMember({ name, role, bio, image }: TeamMemberProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group hover:scale-105 hover:-translate-y-2 animate-fade-in-up">
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
        <Image
          src={image || "/placeholder.svg?height=256&width=400&query=professional headshot"}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 bg-card">
        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">{name}</h3>
        <p className="text-primary font-semibold mb-3">{role}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
      </div>
    </div>
  )
}
