import type { Metadata } from "next"
import TeamMember from "@/components/team-member"

export const metadata: Metadata = {
  title: "About Us - AastanaTech",
  description:
    "Meet the talented team behind AastanaTech. Full-stack developers, designers, and innovators passionate about creating exceptional software.",
}

const team = [
  {
    name: "Alex Mitchell",
    role: "Founder & Lead Architect",
    bio: "Visionary leader with 10+ years of full-stack development experience. Passionate about mentoring and building scalable systems.",
    image: "/male-software-architect-professional-headshot.jpg",
  },
  {
    name: "Jordan Hayes",
    role: "Senior Frontend Engineer",
    bio: "React and Next.js specialist. Creates beautiful, performant user interfaces with deep accessibility expertise.",
    image: "/female-frontend-developer-professional-headshot.jpg",
  },
  {
    name: "Casey Walker",
    role: "Senior Backend Engineer",
    bio: "Node.js and database expert. Designs robust, scalable backend systems that handle millions of requests.",
    image: "/male-backend-developer-professional-headshot.jpg",
  },
  {
    name: "Taylor Morgan",
    role: "Mobile Developer",
    bio: "React Native specialist. Builds cross-platform mobile applications loved by millions of users.",
    image: "/female-mobile-developer-professional-headshot.jpg",
  },
  {
    name: "Morgan Blake",
    role: "UI/UX Designer",
    bio: "Design systems and user experience advocate. Creates intuitive interfaces that users love.",
    image: "/female-ui-ux-designer-professional-headshot.jpg",
  },
  {
    name: "Riley Cooper",
    role: "DevOps Engineer",
    bio: "Infrastructure and deployment expert. Ensures reliable, secure, and performant systems at scale.",
    image: "/male-devops-engineer-professional-headshot.jpg",
  },
]

export default function About() {
  return (
    <main>
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">About AastanaTech</h1>
          <p className="text-xl text-muted-foreground">
            We're a team of passionate developers, designers, and innovators dedicated to building exceptional software
            that drives business success.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-4xl font-bold text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses and individuals by delivering cutting-edge software solutions that transform ideas
                into scalable, impactful products. We believe in the power of technology to solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every project is an opportunity to create something meaningful. We bring expertise, creativity, and
                passion to every engagement.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-accent/30 rounded-2xl h-96 flex items-center justify-center animate-slide-in-right hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300">
              <p className="text-primary font-bold text-2xl text-center px-6">Building the Future of Software</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { value: "50+", label: "Projects Completed", desc: "Delivering excellence across diverse industries" },
              { value: "15+", label: "Expert Team Members", desc: "Specializing in full-stack development" },
              { value: "8+", label: "Years of Experience", desc: "Building software since 2017" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-accent/30 text-center hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-lg font-semibold text-foreground">{stat.label}</p>
                <p className="text-muted-foreground mt-2">{stat.desc}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                  <TeamMember {...member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Excellence",
                desc: "We're committed to delivering high-quality work that exceeds expectations. Every line of code, every design decision is carefully considered.",
              },
              {
                title: "Innovation",
                desc: "We stay at the forefront of technology, constantly exploring new tools and methodologies to deliver cutting-edge solutions.",
              },
              {
                title: "Collaboration",
                desc: "We believe in open communication and partnership. Your success is our success, and we work together to achieve your goals.",
              },
              {
                title: "Reliability",
                desc: "You can count on us. We deliver on our promises, meet deadlines, and maintain the highest standards of professionalism.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border border-accent/30 bg-gradient-to-br from-primary/10 to-accent/10 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-accent mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
