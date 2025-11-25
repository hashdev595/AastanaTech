import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import TechStack from "@/components/sections/tech-stack"
import Testimonials from "@/components/sections/testimonials"
import CTA from "@/components/sections/cta"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <TechStack />
      <Testimonials />
      <CTA />
    </main>
  )
}
