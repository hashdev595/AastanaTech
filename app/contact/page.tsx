import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - AastanaTech",
  description:
    "Get in touch with AastanaTech. Discuss your project, ask questions, or schedule a consultation with our team.",
}

export default function Contact() {
  return (
    <main>
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">Get In Touch</h1>
          <p className="text-xl text-muted-foreground">
            Have a project in mind? We'd love to hear about it. Reach out and let's create something amazing together.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-4 rounded-lg border border-border hover:border-accent hover:bg-card/50 transition-all duration-300">
                  <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:hello@AastanaTech.dev"
                      className="text-muted-foreground hover:text-accent transition-colors duration-300"
                    >
                      hello@AastanaTech.dev
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 rounded-lg border border-border hover:border-accent hover:bg-card/50 transition-all duration-300">
                  <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a
                      href="tel:+1-555-123-4567"
                      className="text-muted-foreground hover:text-accent transition-colors duration-300"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 rounded-lg border border-border hover:border-accent hover:bg-card/50 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Office</p>
                    <p className="text-muted-foreground">
                      123 Tech Street
                      <br />
                      San Francisco, CA 94102
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { Icon: Github, label: "GitHub" },
                  { Icon: Linkedin, label: "LinkedIn" },
                  { Icon: Twitter, label: "Twitter" },
                ].map(({ Icon, label }, index) => (
                  <a
                    key={index}
                    href="#"
                    title={label}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 text-accent hover:from-primary/50 hover:to-accent/50 hover:text-primary-foreground transition-all duration-300 flex items-center justify-center border border-accent/30 hover:border-accent/60 hover:scale-110 hover:-translate-y-1"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
