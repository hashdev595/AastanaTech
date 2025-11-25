import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, InnovateTech",
    content:
      "AastanaTech transformed our vision into reality. Their team delivered a stunning platform that exceeded our expectations and drove 300% growth.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, DataFlow",
    content:
      "Working with AastanaTech was seamless. Professional, communicative, and technically brilliant. Highly recommended for any serious project.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Product Manager, CloudSync",
    content:
      "The team demonstrated deep expertise in modern web technologies. They not only built what we asked for, but suggested improvements that saved us time.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Client Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from the companies we've helped build amazing software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-card border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group hover:scale-105 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent text-accent group-hover:scale-110 transition-transform"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
              <p className="text-foreground mb-6 text-lg">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-accent group-hover:text-primary transition-colors">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
