import { Anchor, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl md:text-5xl mb-4">
          Join My <span className="text-gradient-fire">Crew</span>
        </h2>
        <p className="text-muted-foreground font-body mb-12 max-w-md mx-auto">
          Looking for a nakama to build something amazing? Let's set sail together.
        </p>

        <div className="bg-card rounded-lg border border-border p-8 md:p-12">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Your Message..."
              className="w-full px-4 py-3 rounded-lg bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground font-body font-bold py-3 rounded-lg hover:scale-[1.02] transition-transform shadow-md"
            >
              Send Message ⚓
            </button>
          </form>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10 text-sm text-muted-foreground font-body">
          <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> anmol@example.com</span>
          <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> Beas City, Amritsar, Punjab</span>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto max-w-5xl mt-20 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-body">
          <div className="flex items-center gap-2">
            <Anchor className="h-4 w-4 text-accent" />
            <span className="font-display">Anmol Singh</span>
          </div>
          <p>© 2026 — Built with dreams and determination</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
