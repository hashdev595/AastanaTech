import type { Metadata } from "next"
import ProjectCard from "@/components/project-card"

export const metadata: Metadata = {
  title: "Projects - AastanaTech",
  description:
    "Explore our portfolio of successful projects. Full-stack applications, mobile apps, and web platforms built for innovative companies.",
}

const projects = [
  {
    title: "CloudFlow Platform",
    description: "Enterprise data management platform for real-time analytics and insights.",
    image: "/modern-analytics-dashboard.jpg",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Redis"],
    link: "#",
  },
  {
    title: "MobileFirst App",
    description: "Cross-platform mobile application for fitness tracking and social community building.",
    image: "/mobile-app-interface-fitness-tracking.jpg",
    technologies: ["React Native", "Node.js", "Firebase", "MongoDB"],
    link: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce solution with payment processing and inventory management.",
    image: "/e-commerce-shopping-platform-interface.jpg",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Node.js", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Social Network",
    description: "Interactive social platform with real-time messaging and content sharing.",
    image: "/social-media-feed-interface.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "WebRTC"],
    link: "#",
  },
  {
    title: "AI Learning Platform",
    description: "Intelligent tutoring system with personalized learning paths and progress tracking.",
    image: "/education-learning-platform-interface.jpg",
    technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "React"],
    link: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "Comprehensive business intelligence dashboard for startup management.",
    image: "/saas-business-dashboard-with-metrics.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Recharts", "Express"],
    link: "#",
  },
]

export default function Projects() {
  return (
    <main>
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">Our Projects</h1>
          <p className="text-xl text-muted-foreground">
            Explore the innovative solutions we've built for forward-thinking companies. Each project represents our
            commitment to excellence.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Ready to Be Our Next Success Story?</h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss your project and create something amazing together.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </main>
  )
}
