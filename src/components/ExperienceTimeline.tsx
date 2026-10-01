import { useState } from 'react';
import { EXPERIENCES, EDUCATION, Experience } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<string>(EXPERIENCES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
            Professional Experience
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0 font-normal">
          6+ years delivering scalable mobile and frontend software across international US, Australian, and European clients.
        </p>
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {EXPERIENCES.map((exp: Experience, index: number) => {
          const isExpanded = expandedId === exp.id;
          const isCurrent = exp.current;

          return (
            <div key={exp.id} className="relative group">
              {/* Timeline Node on Left */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                  isCurrent
                    ? 'bg-blue-600 border-blue-400 shadow-lg shadow-blue-500/50'
                    : 'bg-[#101115] border-white/30 group-hover:border-blue-400 group-hover:bg-blue-950'
                }`}
              >
                {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
              </div>

              {/* Experience Card */}
              <div
                onClick={() => toggleExpand(exp.id)}
                className={`rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                  isExpanded
                    ? 'bg-[#111218] border-blue-500/30 shadow-xl shadow-blue-500/5'
                    : 'bg-[#0E0F14] border-white/[0.07] hover:border-white/20 hover:bg-[#111217]'
                }`}
              >
                {/* Header row */}
                <div className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.company}
                      </span>
                      {exp.product && (
                        <span className="text-xs font-mono text-cyan-400">
                          — {exp.product}
                        </span>
                      )}
                      {isCurrent && (
                        <span className="text-[11px] font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                          Present
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm font-semibold text-slate-300">
                      {exp.role}
                    </h3>
                  </div>

                  {/* Metadata: Period & Location (Unboxed text with typographic separator) */}
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="text-slate-600 hidden sm:inline">·</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </span>
                    <span className="p-1.5 rounded-md bg-white/5 text-slate-400 group-hover:text-white transition-colors ml-2">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </div>
                </div>

                {/* Summary teaser */}
                <div className="px-6 sm:px-7 pb-4">
                  <p className="text-xs sm:text-sm text-slate-400 font-normal">
                    {exp.summary}
                  </p>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-white/[0.06] space-y-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                      Key Responsibilities & Deliverables
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill Tags */}
                    <div className="pt-3 border-t border-white/[0.04] flex flex-wrap items-center gap-2 text-xs">
                      <span className="text-[11px] font-mono text-slate-500 mr-1">Stack:</span>
                      {exp.skills.map((skill, idx) => (
                        <span key={skill} className="text-slate-400 font-medium">
                          {skill}
                          {idx < exp.skills.length - 1 && (
                            <span className="text-slate-600 ml-2">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Education Block at bottom of Timeline */}
      <div className="mt-20 pt-12 border-t border-white/[0.08]">
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className="w-5 h-5 text-blue-400" />
          <h3 className="text-xl font-bold text-white tracking-tight">
            Academic Background
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0E0F14] border border-white/[0.07] hover:border-white/15 transition-colors"
            >
              <h4 className="text-base font-semibold text-white mb-1">
                {edu.degree}
              </h4>
              <p className="text-xs font-mono text-blue-400 mb-2">
                {edu.institution}
              </p>
              <p className="text-xs text-slate-400 font-normal">
                Focus: {edu.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
