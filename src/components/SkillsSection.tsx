import { useEffect, useRef, useState } from "react";

/* ── Devil Fruit SVG Icons ── */
const DevilFruitIcon = ({ children, color, delay, label }: { children: React.ReactNode; color: string; delay: number; label: string }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div
        className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-700 ${color}`}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.5)",
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
      <span
        className="font-body text-xs font-semibold text-foreground transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          transitionDelay: `${delay + 200}ms`,
        }}
      >
        {label}
      </span>
    </div>
  );
};

/* ── Tech SVG icons ── */
const ReactIcon = () => (
  <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-10 md:h-10">
    <circle cx="20" cy="20" r="3" fill="hsl(195, 100%, 95%)" />
    <ellipse cx="20" cy="20" rx="16" ry="6" stroke="hsl(195, 100%, 90%)" strokeWidth="1.5" fill="none" />
    <ellipse cx="20" cy="20" rx="16" ry="6" stroke="hsl(195, 100%, 90%)" strokeWidth="1.5" fill="none" transform="rotate(60 20 20)" />
    <ellipse cx="20" cy="20" rx="16" ry="6" stroke="hsl(195, 100%, 90%)" strokeWidth="1.5" fill="none" transform="rotate(120 20 20)" />
  </svg>
);

const AngularIcon = () => (
  <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-10 md:h-10">
    <path d="M20 4 L6 10 L8 30 L20 36 L32 30 L34 10 Z" fill="none" stroke="hsl(0, 100%, 95%)" strokeWidth="1.5" />
    <path d="M20 10 L14 26 H18 L19.5 22 H20.5 L22 26 H26 Z" fill="hsl(0, 100%, 95%)" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-10 md:h-10">
    <rect x="6" y="6" width="28" height="28" rx="4" fill="none" stroke="hsl(210, 100%, 90%)" strokeWidth="1.5" />
    <text x="20" y="27" textAnchor="middle" fill="hsl(210, 100%, 90%)" fontSize="14" fontWeight="bold" fontFamily="sans-serif">TS</text>
  </svg>
);

const JSIcon = () => (
  <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-10 md:h-10">
    <rect x="6" y="6" width="28" height="28" rx="4" fill="none" stroke="hsl(50, 100%, 85%)" strokeWidth="1.5" />
    <text x="20" y="27" textAnchor="middle" fill="hsl(50, 100%, 85%)" fontSize="14" fontWeight="bold" fontFamily="sans-serif">JS</text>
  </svg>
);

const CSSIcon = () => (
  <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-10 md:h-10">
    <path d="M8 6 L10 32 L20 36 L30 32 L32 6 Z" fill="none" stroke="hsl(200, 100%, 90%)" strokeWidth="1.5" />
    <text x="20" y="25" textAnchor="middle" fill="hsl(200, 100%, 90%)" fontSize="10" fontWeight="bold" fontFamily="sans-serif">CSS</text>
  </svg>
);

const ReduxIcon = () => (
  <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-10 md:h-10">
    <circle cx="20" cy="14" r="5" fill="none" stroke="hsl(270, 80%, 85%)" strokeWidth="1.5" />
    <circle cx="12" cy="26" r="5" fill="none" stroke="hsl(270, 80%, 85%)" strokeWidth="1.5" />
    <circle cx="28" cy="26" r="5" fill="none" stroke="hsl(270, 80%, 85%)" strokeWidth="1.5" />
    <line x1="20" y1="19" x2="12" y2="21" stroke="hsl(270, 80%, 85%)" strokeWidth="1" />
    <line x1="20" y1="19" x2="28" y2="21" stroke="hsl(270, 80%, 85%)" strokeWidth="1" />
    <line x1="12" y1="26" x2="28" y2="26" stroke="hsl(270, 80%, 85%)" strokeWidth="1" />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-10 md:h-10">
    <path d="M20 6 L34 14 V26 L20 34 L6 26 V14 Z" fill="none" stroke="hsl(120, 60%, 80%)" strokeWidth="1.5" />
    <text x="20" y="24" textAnchor="middle" fill="hsl(120, 60%, 80%)" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Node</text>
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-10 md:h-10">
    <circle cx="20" cy="20" r="14" fill="none" stroke="hsl(12, 90%, 85%)" strokeWidth="1.5" />
    <path d="M14 20 L20 14 L26 20 L20 26 Z" fill="hsl(12, 90%, 85%)" />
  </svg>
);

const HTMLIcon = () => (
  <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-10 md:h-10">
    <path d="M8 6 L10 32 L20 36 L30 32 L32 6 Z" fill="none" stroke="hsl(14, 100%, 85%)" strokeWidth="1.5" />
    <text x="20" y="25" textAnchor="middle" fill="hsl(14, 100%, 85%)" fontSize="8" fontWeight="bold" fontFamily="sans-serif">HTML</text>
  </svg>
);

const WebpackIcon = () => (
  <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-10 md:h-10">
    <path d="M20 4 L36 13 V27 L20 36 L4 27 V13 Z" fill="none" stroke="hsl(200, 80%, 85%)" strokeWidth="1.5" />
    <path d="M20 10 L30 16 V24 L20 30 L10 24 V16 Z" fill="none" stroke="hsl(200, 80%, 85%)" strokeWidth="1" />
  </svg>
);

const PaperJSIcon = () => (
  <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-10 md:h-10">
    <rect x="8" y="6" width="24" height="28" rx="3" fill="none" stroke="hsl(45, 90%, 80%)" strokeWidth="1.5" />
    <path d="M14 14 Q20 10 26 14 Q22 20 26 26 Q20 22 14 26 Q18 20 14 14" fill="hsl(45, 90%, 80%)" opacity="0.5" />
  </svg>
);

const I18nIcon = () => (
  <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-10 md:h-10">
    <circle cx="20" cy="20" r="14" fill="none" stroke="hsl(170, 70%, 80%)" strokeWidth="1.5" />
    <ellipse cx="20" cy="20" rx="8" ry="14" fill="none" stroke="hsl(170, 70%, 80%)" strokeWidth="1" />
    <line x1="6" y1="20" x2="34" y2="20" stroke="hsl(170, 70%, 80%)" strokeWidth="1" />
  </svg>
);

/* ── Treasure Chest SVG ── */
const TreasureChest = ({ open }: { open: boolean }) => (
  <svg viewBox="0 0 200 140" className="w-48 md:w-64 mx-auto transition-all duration-700" style={{ filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.15))" }}>
    {/* Chest body */}
    <rect x="20" y="70" width="160" height="60" rx="8" fill="hsl(30, 50%, 45%)" stroke="hsl(30, 50%, 35%)" strokeWidth="3" />
    <rect x="30" y="80" width="140" height="40" rx="4" fill="hsl(30, 50%, 55%)" />
    {/* Metal bands */}
    <rect x="20" y="85" width="160" height="6" fill="hsl(45, 80%, 55%)" rx="2" />
    <rect x="20" y="105" width="160" height="6" fill="hsl(45, 80%, 55%)" rx="2" />
    {/* Lock */}
    <circle cx="100" cy="95" r="8" fill="hsl(45, 90%, 55%)" stroke="hsl(45, 80%, 40%)" strokeWidth="2" />
    <rect x="96" y="91" width="8" height="8" rx="1" fill="hsl(45, 80%, 40%)" />
    {/* Lid */}
    <g style={{
      transformOrigin: "100px 70px",
      transform: open ? "rotateX(70deg) translateY(-30px)" : "rotateX(0deg)",
      transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
    }}>
      <path d="M20 70 Q20 30 100 25 Q180 30 180 70 Z" fill="hsl(30, 50%, 50%)" stroke="hsl(30, 50%, 35%)" strokeWidth="3" />
      <path d="M35 65 Q35 40 100 35 Q165 40 165 65 Z" fill="hsl(30, 50%, 60%)" />
      <rect x="20" y="60" width="160" height="6" fill="hsl(45, 80%, 55%)" rx="2" />
    </g>
    {/* Glow when open */}
    {open && (
      <ellipse cx="100" cy="75" rx="50" ry="15" fill="hsl(45, 100%, 70%)" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </ellipse>
    )}
  </svg>
);

/* ── Skill Categories ── */
const skillCategories = [
  {
    title: "Frontend",
    fruits: [
      { icon: <ReactIcon />, label: "React.js", color: "bg-ocean-mid/20 border-2 border-ocean-mid/40" },
      { icon: <AngularIcon />, label: "Angular", color: "bg-accent/15 border-2 border-accent/30" },
      { icon: <TypeScriptIcon />, label: "TypeScript", color: "bg-primary/15 border-2 border-primary/30" },
      { icon: <JSIcon />, label: "JavaScript", color: "bg-gold/20 border-2 border-gold/30" },
      { icon: <HTMLIcon />, label: "HTML5", color: "bg-accent/10 border-2 border-accent/20" },
      { icon: <CSSIcon />, label: "CSS/Tailwind", color: "bg-ocean-light border-2 border-ocean-mid/30" },
    ],
  },
  {
    title: "State & Tools",
    fruits: [
      { icon: <ReduxIcon />, label: "Redux", color: "bg-purple-100 border-2 border-purple-300" },
      { icon: <ReactIcon />, label: "React Query", color: "bg-ocean-mid/15 border-2 border-ocean-mid/30" },
      { icon: <ReactIcon />, label: "Context API", color: "bg-ocean-light border-2 border-ocean-mid/20" },
      { icon: <I18nIcon />, label: "I18n", color: "bg-teal-100 border-2 border-teal-300" },
    ],
  },
  {
    title: "Backend & Dev",
    fruits: [
      { icon: <NodeIcon />, label: "Node.js", color: "bg-green-100 border-2 border-green-300" },
      { icon: <PaperJSIcon />, label: "Paper.js", color: "bg-sand border-2 border-sand-dark/30" },
      { icon: <WebpackIcon />, label: "Webpack", color: "bg-sky-100 border-2 border-sky-300" },
      { icon: <GitIcon />, label: "Git", color: "bg-orange-100 border-2 border-orange-300" },
    ],
  },
];

const SkillsSection = () => {
  const [chestOpen, setChestOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setChestOpen(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6 bg-sand-gradient">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4">
          Devil Fruit <span className="text-gradient-ocean">Powers</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-lg mx-auto">
          Open the treasure chest to reveal my skills — each one a Devil Fruit power!
        </p>

        {/* Treasure Chest */}
        <div className="mb-16">
          <TreasureChest open={chestOpen} />
        </div>

        {/* Skill categories with devil fruit icons */}
        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => (
            <div key={category.title}>
              <h3 className="font-display text-xl text-center mb-8 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {category.fruits.map((fruit, i) => (
                  <DevilFruitIcon
                    key={fruit.label}
                    color={fruit.color}
                    delay={catIdx * 300 + i * 150}
                    label={fruit.label}
                  >
                    {fruit.icon}
                  </DevilFruitIcon>
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
