import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Thousand Sunny Dashboard",
    desc: "A real-time analytics dashboard with interactive charts and responsive design. Built with React, TypeScript, and Recharts.",
    tags: ["React", "TypeScript", "Tailwind"],
    color: "from-ocean-mid to-ocean-deep",
  },
  {
    title: "Grand Line Store",
    desc: "Full-featured e-commerce frontend with cart, filters, and seamless checkout flow. Pixel-perfect responsive UI.",
    tags: ["Next.js", "Stripe", "Framer Motion"],
    color: "from-accent to-gold",
  },
  {
    title: "Poneglyph Notes",
    desc: "A minimalist note-taking app with markdown support, offline-first architecture, and beautiful typography.",
    tags: ["React", "IndexedDB", "PWA"],
    color: "from-ocean-deep to-ocean-mid",
  },
  {
    title: "Crew Finder",
    desc: "A team collaboration tool with real-time updates, drag-and-drop boards, and role-based access control.",
    tags: ["React", "WebSocket", "DnD"],
    color: "from-gold to-accent",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4">
          Treasure <span className="text-gradient-fire">Log</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-16 max-w-lg mx-auto">
          Projects I've conquered across the seas of the internet.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card rounded-lg border border-border overflow-hidden hover:border-accent/40 transition-all hover:-translate-y-1"
            >
              {/* Gradient header */}
              <div className={`h-32 bg-gradient-to-r ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`} />

              <div className="p-6">
                <h3 className="font-display text-xl mb-2 text-foreground">{project.title}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-body text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="inline-flex items-center gap-1 text-sm font-body font-semibold text-accent hover:underline">
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a href="#" className="inline-flex items-center gap-1 text-sm font-body font-semibold text-primary hover:underline">
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
