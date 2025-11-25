"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    html.classList.toggle("dark")
    setIsDark(!isDark)
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border animate-slide-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:animate-glow transition-all">
              TV
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              AastanaTech
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-300"
            >
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              aria-label="Toggle theme"
            >
              {mounted && (isDark ? <Sun size={18} className="animate-spin-slow" /> : <Moon size={18} />)}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              aria-label="Toggle theme"
            >
              {mounted && (isDark ? <Sun size={18} /> : <Moon size={18} />)}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in-up">
            <Link
              href="/"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
