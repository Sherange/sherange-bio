import { useState } from 'react';
import { Cpu, Terminal, Sparkles, Shield, Binary, Network, Bot } from 'lucide-react';

export default function AISoftwareSection() {
  const [activeTab, setActiveTab] = useState<'workflow' | 'edge'>('workflow');

  const intersections = [
    { title: 'AI + Mobile Runtimes', desc: 'Running quantized models directly on Apple Neural Engine & Android NNAPI for sub-second offline inferences.' },
    { title: 'Privacy-First Edge Health', desc: 'Synthesizing sensitive biometric telemetry into actionable lifestyle guidance without cloud data leakage.' },
    { title: 'Intelligent Developer Workflows', desc: 'Leveraging modern LLM-driven tooling to accelerate component architecture, rigorous refactoring, and test coverage.' },
    { title: 'Context-Aware UIs', desc: 'Building interfaces that anticipate user intent through continuous telemetry analysis rather than static forms.' },
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Next Generation Paradigms
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
            Exploring the next generation of software
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0 font-normal">
          Investigating the convergence of mobile architectures, on-device intelligence, and LLM-assisted developer tooling.
        </p>
      </div>

      {/* Main Feature Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left 7 Columns: Intersections & Engineering Focus */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="p-7 sm:p-8 rounded-3xl bg-[#0D0E13] border border-white/[0.08] relative overflow-hidden">
            {/* Subtle Gradient Spot */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex items-center gap-2 text-xs font-mono text-violet-400 uppercase tracking-wider mb-3">
              <Bot className="w-4 h-4" />
              <span>AI-Assisted Engineering Workflow</span>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Modern software development is evolving rapidly. In my day-to-day workflow at Tinkerer Borg and Differential, I actively leverage advanced AI development environments including <strong className="text-white font-semibold">Claude</strong>, <strong className="text-white font-semibold">Cursor</strong>, and <strong className="text-white font-semibold">Gemini</strong> to orchestrate rapid feature prototyping, automate complex refactors, and stress-test test suites.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.06] text-center">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="text-xs font-bold text-white block">Claude</span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">Architecture & logic</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="text-xs font-bold text-white block">Cursor</span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">Agentic refactoring</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="text-xs font-bold text-white block">Gemini</span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">Multimodal analysis</span>
              </div>
            </div>
          </div>

          {/* Intersections Bento Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {intersections.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0B0C10] border border-white/[0.07] hover:border-violet-500/30 transition-colors"
              >
                <h4 className="text-sm font-bold text-slate-100 mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right 5 Columns: Futuristic On-Device Telemetry / Neural Inference Visualizer */}
        <div className="lg:col-span-5">
          <div className="h-full rounded-3xl bg-[#0A0B0E] border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute bottom-0 right-0 w-52 h-52 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono uppercase text-slate-300">
                    Edge Neural Inference Pipeline
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Zero Cloud Roundtrip
                </span>
              </div>

              {/* Simulation diagram */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
                  <span className="text-slate-400">1. Wearable Sensors</span>
                  <span className="text-cyan-400">Heart / SpO2 / Accel</span>
                </div>

                <div className="flex justify-center text-slate-600 text-[10px]">
                  ↓ raw biometric stream (local memory buffer)
                </div>

                <div className="p-3.5 rounded-xl bg-violet-950/20 border border-violet-500/30 space-y-1">
                  <div className="flex items-center justify-between text-violet-300 font-semibold">
                    <span>2. Quantized Mobile Model</span>
                    <span className="text-[10px]">18ms latency</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans">
                    On-device classification evaluates sleep architecture & stress anomalies without transmitting raw personal data.
                  </p>
                </div>

                <div className="flex justify-center text-slate-600 text-[10px]">
                  ↓ validated private insight
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
                  <span className="text-slate-400">3. Actionable UI Insight</span>
                  <span className="text-emerald-400">Rendered Instantly</span>
                </div>
              </div>
            </div>

            {/* Privacy summary */}
            <div className="pt-6 border-t border-white/[0.06] mt-6">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  Focusing on privacy-preserving intelligence where models serve the user, and sensitive telemetry never leaves the physical smartphone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
