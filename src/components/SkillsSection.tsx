const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "CSS / Tailwind", level: 92 },
  { name: "Next.js", level: 80 },
  { name: "HTML & Accessibility", level: 88 },
  { name: "Git & DevOps", level: 75 },
  { name: "UI/UX Design", level: 70 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-sand-gradient">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4">
          Devil Fruit <span className="text-gradient-ocean">Powers</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-16 max-w-lg mx-auto">
          Skills I've mastered across my journey on the Grand Line.
        </p>

        <div className="grid gap-5">
          {skills.map((skill) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between items-center mb-2">
                <span className="font-body font-bold text-sm text-foreground">{skill.name}</span>
                <span className="font-body text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-3 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-ocean-mid to-accent transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
