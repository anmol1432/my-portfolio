import heroOcean from "@/assets/hero-ocean.png";
import { ArrowDown, MapPin, Mail, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroOcean} alt="Ocean adventure" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="font-body font-bold text-sm tracking-[0.3em] uppercase text-accent mb-4 animate-float">
          ⚓ Software Developer
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-4 text-foreground">
          Hi, I'm{" "}
          <span className="text-gradient-ocean">Anmol</span>{" "}
          Singh
        </h1>
        <p className="font-body text-base text-muted-foreground flex items-center justify-center gap-2 mb-6">
          <MapPin className="h-4 w-4" /> Beas City, Amritsar, Punjab
        </p>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10">
          4+ years crafting scalable web apps with React, Angular & TypeScript. Every project is a new island to conquer on this Grand Line!
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            Explore My Journey
            <ArrowDown className="h-4 w-4" />
          </button>
          <a
            href="https://www.linkedin.com/in/anmol-singh-285a541a4/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60 Q360 0 720 60 Q1080 120 1440 60 V100 H0Z" fill="hsl(42 60% 97%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
