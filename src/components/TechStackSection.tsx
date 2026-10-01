import { useState } from 'react';
import { TECH_STACK } from '../data/portfolioData';
import { Layers, Sparkles, Smartphone, Globe, Cpu, Wrench } from 'lucide-react';

export default function TechStackSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const categories = [
    { label: 'All', icon: Layers },
    { label: 'Mobile & Cross-Platform', icon: Smartphone },
    { label: 'Frontend & Web', icon: Globe },
    { label: 'Real-Time & Systems', icon: Cpu },
    { label: 'Testing & Tooling', icon: Wrench },
  ];

  const filteredTech =
    selectedCategory === 'All'
      ? TECH_STACK
      : TECH_STACK.filter((item) => item.category === selectedCategory);

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
            Tools I work with
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0 font-normal">
          Crafting performant interfaces with modern web standards, cross-platform runtimes, and real-time streaming pipelines.
        </p>
      </div>

      {/* Category Filter Controls - Single-line buttons */}
      <div className="flex items-center gap-1.5 p-1 bg-white/[0.04] border border-white/[0.07] rounded-xl mb-10 overflow-x-auto no-scrollbar">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.label;
          return (
            <button
              key={cat.label}
              onClick={() => setSelectedCategory(cat.label)}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all duration-150 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Interactive Technology Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredTech.map((tech) => {
          const isSelected = activeTech === tech.name;
          return (
            <div
              key={tech.name}
              onMouseEnter={() => setActiveTech(tech.name)}
              onMouseLeave={() => setActiveTech(null)}
              className={`group relative p-5 rounded-2xl bg-[#0F1014] border transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'border-blue-500/50 bg-[#14161C] -translate-y-1 shadow-xl shadow-blue-500/10'
                  : 'border-white/[0.07] hover:border-white/20 hover:-translate-y-0.5'
              }`}
            >
              {/* Card Header: Tech Name and Category separated cleanly */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </h3>
                <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-400">
                  {tech.level}
                </span>
              </div>

              {/* Clean unboxed metadata with dot separator */}
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3 font-normal">
                <span>{tech.category}</span>
              </div>

              {/* Engineering Application Context */}
              <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {tech.highlight}
              </p>

              {/* Subtle accent corner highlight on hover */}
              <div className="absolute top-0 right-0 w-8 h-8 rounded-tr-2xl bg-gradient-to-bl from-blue-500/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          );
        })}
      </div>

      {/* Continuous marquee of additional tooling */}
      <div className="mt-14 pt-8 border-t border-white/[0.06]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
          <span className="font-mono uppercase tracking-wider text-[11px] text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Workflow & Development Ecosystem</span>
          </span>
          <div className="flex flex-wrap items-center gap-3 text-slate-400 font-medium">
            <span>TanStack Query</span>
            <span className="text-slate-600">·</span>
            <span>Zustand</span>
            <span className="text-slate-600">·</span>
            <span>Apollo Client</span>
            <span className="text-slate-600">·</span>
            <span>Vite</span>
            <span className="text-slate-600">·</span>
            <span>GitHub Actions</span>
            <span className="text-slate-600">·</span>
            <span>App Store Connect</span>
            <span className="text-slate-600">·</span>
            <span>Google Play Console</span>
          </div>
        </div>
      </div>
    </section>
  );
}
