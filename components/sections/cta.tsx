import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border border-accent/30 rounded-2xl p-12 md:p-20 backdrop-blur-sm hover:border-accent/60 transition-all duration-300 animate-fade-in-up">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Ready to Build Something Great?</h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss your project and create exceptional software together.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 group hover:scale-105"
        >
          Get Started Today
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
