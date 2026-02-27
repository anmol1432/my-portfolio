import { Compass, Map, Ship } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4">
          About the <span className="text-gradient-fire">Captain</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-16 max-w-2xl mx-auto">
          Frontend Developer with 4+ years of experience building scalable web applications using React.js, Angular, TypeScript, and JavaScript. Strong in UI architecture, performance optimization, and integrating complex tools. Passionate about creating intuitive and dynamic user experiences.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Ship,
              title: "The Voyage",
              desc: "From Angular enterprise apps at KocharTech to React medical software at Ficode — 4 years navigating diverse tech seas.",
            },
            {
              icon: Map,
              title: "The Map",
              desc: "UI architecture, performance optimization, and integrating complex tools like Paper.js, FFmpeg, and Form.io into production apps.",
            },
            {
              icon: Compass,
              title: "The Dream",
              desc: "Building products that solve real problems — from orthopaedic planning software to cloud surveillance platforms and beyond.",
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
