import { useState } from 'react';
import { MINDSET_PILLARS } from '../data/portfolioData';
import { Quote } from 'lucide-react';

export default function EngineeringMindset() {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto text-center">
      {/* Editorial Quote Box */}
      <div className="relative p-8 sm:p-12 md:p-16 rounded-3xl bg-[#0B0C10] border border-white/[0.08] shadow-2xl overflow-hidden">
        {/* Subtle Ambient Violet Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

        <Quote className="w-10 h-10 text-blue-500/40 mx-auto mb-6" />

        {/* Large Quote */}
        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight max-w-3xl mx-auto">
          “Good software isn't only about making something work. It's about making it{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
            reliable, understandable, and enjoyable
          </span>{' '}
          to use.”
        </blockquote>

        <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mt-6">
          — Sherange Fonseka · Engineering Principles
        </p>

        {/* Concept Pillars Grid */}
        <div className="mt-14 pt-10 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {MINDSET_PILLARS.map((pillar) => {
            const isActive = activePillar === pillar.name;

            return (
              <div
                key={pillar.name}
                onMouseEnter={() => setActivePillar(pillar.name)}
                onMouseLeave={() => setActivePillar(null)}
                className={`p-3.5 rounded-xl border text-center transition-all duration-200 cursor-default ${
                  isActive
                    ? 'bg-blue-950/40 border-blue-500/50 shadow-md shadow-blue-500/10'
                    : 'bg-white/[0.02] border-white/[0.06] hover:border-white/20'
                }`}
              >
                <span className="text-xs font-semibold text-slate-200 block">
                  {pillar.name}
                </span>
                <span className="text-[10px] text-slate-400 mt-1 line-clamp-2 block leading-tight font-normal">
                  {pillar.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
