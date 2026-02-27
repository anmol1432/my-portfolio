import { Anchor, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const navItems = ["about", "skills", "experience", "education", "contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 font-display text-xl text-foreground">
          <Anchor className="h-6 w-6 text-primary" />
          <span>Anmol<span className="text-primary font-bold">Singh</span></span>
        </button>
        <div className="hidden md:flex items-center gap-8 font-body font-semibold text-sm">
          {navItems.map((s) => (
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
          <a href="https://www.linkedin.com/in/anmol-singh-285a541a4/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground ml-2">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-3 animate-fade-in">
          {navItems.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="block w-full text-left capitalize text-muted-foreground hover:text-accent transition-colors font-body font-semibold text-sm py-2"
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
