import type { Metadata } from "next"
import { Code, Smartphone, Palette, Cog, Zap, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Services - AastanaTech",
  description:
    "Comprehensive full-stack development services including frontend, backend, mobile, UI/UX design, and custom software solutions.",
}

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Modern, responsive interfaces built with React, Next.js, and Tailwind CSS.",
    details: [
      "React & Next.js applications",
      "Responsive design for all devices",
      "Performance optimization",
      "Accessibility compliance",
      "SEO optimization",
      "Progressive Web Apps (PWA)",
    ],
  },
  {
    icon: Cog,
    title: "Backend Development",
    description: "Robust server-side solutions with Node.js and Express.js.",
    details: [
      "Node.js & Express.js APIs",
      "Database design and optimization",
      "Authentication & authorization",
      "Scalable architecture",
      "API documentation",
      "Testing & QA",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps with React Native.",
    details: [
      "iOS & Android development",
      "Cross-platform solutions",
      "Native performance",
      "App store deployment",
      "Real-time features",
      "Offline support",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that connects aesthetics with functionality.",
    details: [
      "User research & testing",
      "Wireframing & prototyping",
      "Design systems",
      "Component libraries",
      "Interactive mockups",
      "Brand guidelines",
    ],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed and efficiency matter. We optimize for the best experience.",
    details: [
      "Speed optimization",
      "Code splitting",
      "Image optimization",
      "Caching strategies",
      "Bundle analysis",
      "Monitoring & analytics",
    ],
  },
  {
    icon: Shield,
    title: "Security & DevOps",
    description: "Secure infrastructure and automated deployments.",
    details: [
      "Security audits",
      "Infrastructure setup",
      "CI/CD pipelines",
      "Monitoring & logging",
      "Backup & recovery",
      "Compliance support",
    ],
  },
]

export default function Services() {
  return (
    <main>
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive solutions for every stage of your software development journey. From concept to deployment,
            we've got you covered.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start p-8 rounded-lg border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 bg-card hover:scale-105 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div>
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-6 hover:from-primary/50 hover:to-accent/50 transition-all">
                    <service.icon size={32} className="text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4 hover:text-accent transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">What We Deliver:</h3>
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Why Choose AastanaTech?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Expert Team",
                desc: "Highly skilled developers with years of experience in modern technologies.",
              },
              {
                title: "Quality Focus",
                desc: "We maintain high standards of code quality, performance, and user experience.",
              },
              {
                title: "Dedicated Support",
                desc: "Ongoing support and maintenance to ensure your application runs smoothly.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="space-y-3 p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-accent/30 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {benefit.title}
                </p>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
