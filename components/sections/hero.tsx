"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
        <div className="space-y-4">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm border border-accent/30 animate-scale-in">
              Welcome to AastanaTech
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Full-Stack Development
            <span
              className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              That Scales
            </span>
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            We build beautiful, scalable software solutions using modern technologies. From frontend interfaces to
            robust backend systems, we deliver excellence at every layer.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Link
            href="/contact"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 flex items-center gap-2 group hover:scale-105"
          >
            Start Your Project
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/projects"
            className="px-8 py-3 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
          >
            View Our Work
          </Link>
        </div>

        <div className="pt-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <p className="text-sm text-muted-foreground mb-6">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="font-semibold text-accent">50+ Projects Delivered</div>
            <div className="w-px h-6 bg-muted" />
            <div className="font-semibold text-accent">15+ Team Members</div>
            <div className="w-px h-6 bg-muted" />
            <div className="font-semibold text-accent">8+ Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
