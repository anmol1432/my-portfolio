import { Anchor, Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 font-display text-xl text-foreground">
          <Anchor className="h-6 w-6 text-accent" />
          <span>Dev<span className="text-accent">Voyage</span></span>
        </button>
        <div className="hidden md:flex items-center gap-8 font-body font-semibold text-sm">
          {["about", "skills", "projects", "contact"].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="capitalize text-muted-foreground hover:text-accent transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
