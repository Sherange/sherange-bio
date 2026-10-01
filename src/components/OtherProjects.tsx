import { useState } from 'react';
import { ArrowUpRight, Smartphone, ShieldCheck, Clock, Layers } from 'lucide-react';
import { OTHER_PROJECTS, Project } from '../data/portfolioData';

interface OtherProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function OtherProjects({ onSelectProject }: OtherProjectsProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'mobile-apps':
        return Smartphone;
      case 'offline-ai':
        return ShieldCheck;
      case 'workforce-timesheet':
        return Clock;
      default:
        return Layers;
    }
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
          Selected Showcase
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
          Other Projects & Solutions
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-normal">
          From high-scale multi-tenant mobile applications to private edge AI inference on mobile hardware.
        </p>
      </div>

      {/* Grid of Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {OTHER_PROJECTS.map((project: Project) => {
          const Icon = getCategoryIcon(project.id);
          const isHovered = hoveredId === project.id;

          return (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-2xl bg-[#0D0E13] border border-white/[0.08] hover:border-white/20 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-blue-500/5 cursor-pointer overflow-hidden"
            >
              {/* Subtle accent glow on card top */}
              <div
                className="absolute top-0 right-0 w-44 h-44 rounded-full blur-[80px] pointer-events-none transition-opacity duration-300"
                style={{
                  background: project.accentColor,
                  opacity: isHovered ? 0.15 : 0.04,
                }}
              />

              <div>
                {/* Category and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Icon className="w-4 h-4" style={{ color: project.accentColor }} />
                    <span>{project.category}</span>
                  </div>
                  <span className="p-2 rounded-lg bg-white/[0.04] text-slate-400 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                  {project.shortDescription}
                </p>
              </div>

              {/* Technologies - Clean unboxed text with typographic separators */}
              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={tech} className="font-medium text-slate-300">
                      {tech}
                      {idx < Math.min(project.technologies.length, 4) - 1 && (
                        <span className="text-slate-600 ml-2">·</span>
                      )}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-slate-500 text-[11px]">+{project.technologies.length - 4} more</span>
                  )}
                </div>

                <span className="text-xs font-semibold text-blue-400 group-hover:text-blue-300 whitespace-nowrap ml-4">
                  View details →
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
