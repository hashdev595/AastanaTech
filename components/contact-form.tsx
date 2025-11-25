"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-card border border-border p-8 rounded-lg hover:border-accent/50 transition-all duration-300 animate-fade-in-up"
    >
      <h2 className="text-2xl font-bold text-foreground">Send us a Message</h2>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 text-foreground placeholder:text-muted-foreground transition-all duration-300"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 text-foreground placeholder:text-muted-foreground transition-all duration-300"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Company</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 text-foreground placeholder:text-muted-foreground transition-all duration-300"
          placeholder="Your company"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 text-foreground placeholder:text-muted-foreground resize-none transition-all duration-300"
          placeholder="Tell us about your project..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105"
      >
        {submitted ? (
          <>
            <CheckCircle size={20} className="animate-scale-in" />
            Message Sent!
          </>
        ) : (
          <>
            Send Message
            <Send size={20} className="group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      {submitted && (
        <p className="text-center text-sm text-accent font-medium animate-fade-in">
          Thank you! We'll get back to you soon.
        </p>
      )}
    </form>
  )
}
