import { useEffect, useRef, useState } from "react";

type SkillItem = {
  label: string;
  iconPath: string;
  glow: string;
};

type SkillCategory = {
  title: string;
  items: SkillItem[];
};

const iconUrl = (fileName: string) => `${import.meta.env.BASE_URL}techicons/${fileName}`;

const SkillIcon = ({
  item,
  delay,
  index,
}: {
  item: SkillItem;
  delay: number;
  index: number;
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div
        className="group relative w-24 h-24 md:w-32 md:h-32 rounded-[1.35rem] bg-card/70 backdrop-blur-md transition-all duration-500 hover:-translate-y-2"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? `translateY(0) scale(1) rotate(${index % 2 === 0 ? "-1deg" : "1deg"})`
            : "translateY(26px) scale(0.9)",
          transitionDelay: `${delay}ms`,
        }}
      >
        <div className={`absolute inset-2 rounded-[1rem] blur-xl opacity-50 group-hover:opacity-90 transition-opacity duration-500 ${item.glow}`} />
        <div className="absolute inset-0 rounded-[1.35rem] bg-gradient-to-br from-white/35 via-transparent to-transparent pointer-events-none" />
        <div
          className="relative z-10 w-full h-full flex items-center justify-center animate-float"
          style={{ animationDelay: `${delay}ms`, animationDuration: `${3.8 + (index % 3) * 0.35}s` }}
        >
          <img src={item.iconPath} alt={item.label} className="w-14 h-14 md:w-16 md:h-16 drop-shadow-[0_6px_16px_hsl(var(--foreground)/0.24)]" loading="lazy" />
        </div>
      </div>
      <span
        className="font-body text-xs md:text-sm font-semibold text-foreground"
        style={{
          opacity: visible ? 1 : 0,
          transitionDelay: `${delay + 120}ms`,
        }}
      >
        {item.label}
      </span>
    </div>
  );
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      { label: "React", iconPath: iconUrl("React.svg"), glow: "bg-cyan-300/60" },
      { label: "TypeScript", iconPath: iconUrl("TypeScript.svg"), glow: "bg-blue-300/60" },
      { label: "JavaScript", iconPath: iconUrl("JavaScript.svg"), glow: "bg-yellow-300/60" },
      { label: "CSS3", iconPath: iconUrl("CSS3.svg"), glow: "bg-sky-300/60" },
      { label: "Sass", iconPath: iconUrl("Sass.svg"), glow: "bg-pink-300/60" },
      { label: "Angular", iconPath: iconUrl("Angular.svg"), glow: "bg-red-300/60" },
      { label: "Next.js", iconPath: iconUrl("Next.js.svg"), glow: "bg-slate-500/70" },
      { label: "HTML5", iconPath: iconUrl("HTML5.svg"), glow: "bg-orange-300/60" },
    ],
  },
  {
    title: "Backend, Data & Runtime",
    items: [
      { label: "Node.js", iconPath: iconUrl("Node.js.svg"), glow: "bg-green-300/60" },
      { label: "PostgreSQL", iconPath: iconUrl("PostgresSQL.svg"), glow: "bg-indigo-300/60" },
      { label: "Docker", iconPath: iconUrl("Docker.svg"), glow: "bg-sky-300/60" },
      { label: "Git", iconPath: iconUrl("Git.svg"), glow: "bg-orange-300/60" },
      { label: "Electron", iconPath: iconUrl("Electron.svg"), glow: "bg-teal-300/60" },
      { label: "C++", iconPath: iconUrl("C++ (CPlusPlus).svg"), glow: "bg-violet-300/60" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative overflow-hidden py-24 px-6 bg-sand-gradient">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[52rem] h-[20rem] rounded-full bg-gradient-to-r from-cyan-300/20 via-yellow-200/15 to-orange-300/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-sky-300/15 blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-0 w-56 h-56 rounded-full bg-red-300/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="w-24 h-1.5 mx-auto mb-5 rounded-full bg-gradient-to-r from-ocean-mid via-gold to-luffy" />
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4">
          Tech <span className="text-gradient-ocean">Arsenal</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-lg mx-auto">
          Animated skill icons powered by the tech stack I use to build production-ready apps.
        </p>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIdx) => (
            <div key={category.title}>
              <h3 className="font-display text-xl text-center mb-8 text-foreground">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-9 justify-items-center">
                {category.items.map((item, iconIdx) => (
                  <SkillIcon key={item.label} item={item} index={iconIdx} delay={categoryIdx * 240 + iconIdx * 110} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
