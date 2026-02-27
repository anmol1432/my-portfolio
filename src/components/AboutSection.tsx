import { Compass, Map, Ship } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4">
          About the <span className="text-gradient-fire">Captain</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-16 max-w-lg mx-auto">
          Every great pirate has a story. Here's mine.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Ship,
              title: "The Voyage",
              desc: "4 years navigating the vast seas of frontend development — from vanilla JS islands to the React archipelago.",
            },
            {
              icon: Map,
              title: "The Map",
              desc: "I chart beautiful, accessible, and performant user interfaces. My compass always points toward clean code and great UX.",
            },
            {
              icon: Compass,
              title: "The Dream",
              desc: "To become the King of Frontend — building products that make people smile and experiences that feel like magic.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-lg p-8 border border-border hover:border-accent/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-ocean-light flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                <item.icon className="h-6 w-6 text-ocean-mid group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-display text-xl mb-3 text-foreground">{item.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
