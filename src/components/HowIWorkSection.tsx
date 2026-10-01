import { HOW_I_WORK_STEPS } from '../data/portfolioData';
import { Compass, Hammer, Sparkles, Rocket } from 'lucide-react';

export default function HowIWorkSection() {
  const icons = [Compass, Hammer, Sparkles, Rocket];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-14 text-center max-w-2xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
          Methodology
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
          How I approach software
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3 font-normal">
          A disciplined engineering lifecycle turning ambiguous product concepts into resilient, maintainable software.
        </p>
      </div>

      {/* 4 Animated Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {HOW_I_WORK_STEPS.map((step, idx) => {
          const Icon = icons[idx];

          return (
            <div
              key={step.step}
              className="group relative p-7 rounded-2xl bg-[#0D0E12] border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between"
            >
              <div>
                {/* Step Index and Minimalist Line Art Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-bold text-slate-600 group-hover:text-blue-400 transition-colors">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] group-hover:border-blue-500/30 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-colors">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-slate-300 mb-4 font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Extra Details */}
              <div className="pt-4 border-t border-white/[0.05]">
                <p className="text-xs text-slate-500 group-hover:text-slate-400 leading-normal">
                  {step.details}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
