import { Code, Smartphone, Palette, Cog, Zap, Shield } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Modern, responsive interfaces built with React, Next.js, and Tailwind CSS. We create beautiful user experiences that drive engagement.",
  },
  {
    icon: Cog,
    title: "Backend Development",
    description:
      "Robust server-side solutions with Node.js and Express. Scalable APIs, database optimization, and cloud deployment expertise.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps with React Native. Building touch-optimized experiences for iOS and Android.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that connects aesthetics with functionality. Prototypes, wireframes, and design systems that scale.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Speed and efficiency matter. We optimize your applications for performance, SEO, and user satisfaction.",
  },
  {
    icon: Shield,
    title: "Security & DevOps",
    description:
      "Secure infrastructure, automated deployments, and monitoring. Building applications that you can trust with your data.",
  },
]

export default function Services() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for every stage of your software development journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-card border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group hover:scale-105 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-4 group-hover:from-primary/50 group-hover:to-accent/50 transition-all">
                <service.icon size={24} className="text-accent group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
