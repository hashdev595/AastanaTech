const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "React Native", category: "Mobile" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Firebase", category: "Cloud" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "TypeScript", category: "Language" },
  { name: "REST APIs", category: "Architecture" },
  { name: "GraphQL", category: "Architecture" },
]

export default function TechStack() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Tech Stack</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We use industry-leading technologies to build scalable, maintainable, and performant applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border text-center hover:border-accent hover:bg-card/50 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <p className="font-semibold text-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all">
                {tech.name}
              </p>
              <p className="text-xs text-muted-foreground mt-2 group-hover:text-accent transition-colors">
                {tech.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
