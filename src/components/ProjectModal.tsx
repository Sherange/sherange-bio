import { X, CheckCircle2, Cpu, Zap, Activity, ExternalLink } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0F1015] border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-5 bg-[#14151C] border-b border-white/10 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 block">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Metrics bar if available */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((m, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                  <span className="text-lg sm:text-xl font-bold font-mono text-cyan-400 block">
                    {m.value}
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Deep dive overview */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-500 mb-2">
              Architectural Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Deliverables & Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-500 mb-3">
              Key Engineering Highlights
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology stack */}
          <div className="pt-4 border-t border-white/[0.08]">
            <h4 className="text-xs font-mono uppercase text-slate-500 mb-2">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {project.technologies.map((t, idx) => (
                <span key={t} className="text-slate-300 font-medium">
                  {t}
                  {idx < project.technologies.length - 1 && (
                    <span className="text-slate-600 ml-2">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#121319] border-t border-white/10 flex items-center justify-between shrink-0">
          <span className="text-xs font-mono text-slate-500">
            Engineered by Sherange Fonseka
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
