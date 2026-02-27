import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Ficode Software Solutions Pvt. Ltd.",
    period: "Dec 2024 – Sep 2025",
    project: "VPOP Pre-Orthopaedic Planning Software",
    highlights: [
      "Built and maintained core UI screens in React.js using React Query and Context API",
      "Implemented multilingual support (I18n) across the application",
      "Extended Paper.js to create custom drawing tools for orthopaedic planning, fixing rendering issues and adding advanced shapes/tools",
      "Developed the Multi-View Drawing Screen, enabling synchronized interactions across multiple views",
      "Contributed to improving the performance and usability of a medical planning platform",
    ],
    tech: ["React.js", "React Query", "Context API", "JavaScript", "HTML5 Canvas", "Paper.js"],
    color: "border-l-accent",
    projectUrl: "https://vpop-pro.com/",
  },
  {
    role: "Frontend Developer",
    company: "IGZY (KocharTech)",
    period: "Feb 2024 – Nov 2024",
    project: "Cloud Surveillance Platform",
    highlights: [
      "Integrated React.js inside an existing Laravel MVC project using Webpack",
      "Built Live View and Playback UI for cloud surveillance cameras",
      "Implemented smooth video playback using FFmpeg for HLS/MP4 streams",
      "Used Form.io to create dynamic forms and configurations for IGZY's IoT workflows",
      "Improved user experience and frontend structure across the monitoring platform",
    ],
    tech: ["React.js", "Laravel", "Webpack", "FFmpeg", "Form.io"],
    color: "border-l-primary",
    projectUrl: "https://igzy.com/",
  },
  {
    role: "Frontend Engineer",
    company: "KocharTech",
    period: "Mar 2022 – Feb 2024",
    project: "Enterprise Product Suite",
    highlights: [
      "Developed new features and enhanced the UI of an Angular-based enterprise product",
      "Built and maintained Chrome Extensions for Freshdesk and Zendesk, improving agent workflows",
      "Worked on UI/UX improvements for decision trees, visual guides, and knowledge modules",
    ],
    tech: ["Angular", "Chrome Extensions", "TypeScript"],
    color: "border-l-ocean-mid",
    projectUrl: "https://knowmax.ai/",
  },
  {
    role: "Internship Trainee",
    company: "KocharTech",
    period: "Nov 2021 – Mar 2022",
    project: "Tata Neu Workflows",
    highlights: [
      "Integrated FreshChat and Freshdesk for Tata Neu workflows",
      "Automated repetitive tasks using Python + Selenium, generating reports and uploading them to an FTP server",
    ],
    tech: ["Python", "Selenium", "FreshChat", "Freshdesk"],
    color: "border-l-gold",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4">
          Voyage <span className="text-gradient-fire">Log</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-16 max-w-lg mx-auto">
          Islands I've conquered across the Grand Line of my career.
        </p>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.role + exp.company}
              className={`bg-card rounded-lg border border-border ${exp.color} border-l-4 p-6 md:p-8 hover:shadow-md transition-shadow`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-display text-lg text-foreground">{exp.role}</h3>
                  <p className="font-body text-sm text-muted-foreground flex items-center gap-1">
                    <Briefcase className="h-3.5 w-3.5" />
                    {exp.company}
                  </p>
                </div>
                <span className="font-body text-xs text-muted-foreground flex items-center gap-1 shrink-0">
                  <Calendar className="h-3.5 w-3.5" />
                  {exp.period}
                </span>
              </div>

              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <p className="font-body text-sm font-semibold text-primary">{exp.project}</p>
                {exp.projectUrl && (
                  <a
                    href={exp.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Open Preview
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              <ul className="space-y-2 mb-4">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="font-body text-sm text-muted-foreground pl-4 relative before:content-['⚓'] before:absolute before:left-0 before:text-[10px]">
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-body text-xs font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
