import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 bg-ocean-gradient">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl md:text-5xl mb-4">
          Training <span className="text-gradient-ocean">Arc</span>
        </h2>
        <p className="text-muted-foreground font-body mb-12 max-w-md mx-auto">
          Where the journey began — building the foundation.
        </p>

        <div className="bg-card rounded-lg border border-border p-8 md:p-12 inline-block text-left max-w-lg w-full">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-ocean-light flex items-center justify-center shrink-0">
              <GraduationCap className="h-7 w-7 text-ocean-mid" />
            </div>
            <div>
              <h3 className="font-display text-xl text-foreground mb-1">Bachelor of Computer Applications</h3>
              <p className="font-body text-sm text-primary font-semibold mb-1">Guru Nanak Dev University, Amritsar</p>
              <p className="font-body text-xs text-muted-foreground">2017 – 2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
