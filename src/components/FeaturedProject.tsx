import { useState, useEffect } from 'react';
import { Activity, Radio, ArrowUpRight, Zap, Heart, Moon, ShieldAlert, Cpu } from 'lucide-react';
import { FEATURED_PROJECT } from '../data/portfolioData';

interface FeaturedProjectProps {
  onOpenDetails: () => void;
}

export default function FeaturedProject({ onOpenDetails }: FeaturedProjectProps) {
  const [activeTab, setActiveTab] = useState<'biometrics' | 'sleep' | 'ambient'>('biometrics');
  const [heartRate, setHeartRate] = useState(72);
  const [pulsePhase, setPulsePhase] = useState(0);

  // Subtle real-time heart rate variation simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate(prev => 70 + Math.floor(Math.sin(Date.now() / 1500) * 4));
      setPulsePhase(p => (p + 1) % 100);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="work" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Subtitle */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold">
          {FEATURED_PROJECT.badge}
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {FEATURED_PROJECT.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-2 font-normal">
            {FEATURED_PROJECT.shortDescription}
          </p>
        </div>

        <button
          onClick={onOpenDetails}
          className="mt-6 md:mt-0 px-6 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/35 flex items-center gap-2 self-start md:self-auto group"
        >
          <span>Explore Project Case Study</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {/* Hero-Scale Featured Showcase Card */}
      <div className="relative rounded-3xl bg-[#0C0D11] border border-white/[0.09] shadow-2xl overflow-hidden group">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[250px] bg-violet-600/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Card Top: Controls & SignalR Telemetry Status Bar */}
        <div className="p-6 sm:p-8 border-b border-white/[0.07] flex flex-wrap items-center justify-between gap-4 bg-[#101116]/80 backdrop-blur-md">
          {/* Mockup Mode Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-white/[0.04] border border-white/[0.08] rounded-xl">
            <button
              onClick={() => setActiveTab('biometrics')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'biometrics'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Biometric Stream</span>
            </button>

            <button
              onClick={() => setActiveTab('sleep')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'sleep'
                  ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>Sleep Insights</span>
            </button>

            <button
              onClick={() => setActiveTab('ambient')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'ambient'
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Radio className="w-3.5 h-3.5" />
              <span>Spatial Radar</span>
            </button>
          </div>

          {/* Real-time Status Badges */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SignalR: 12ms live</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/20">
              <Zap className="w-3.5 h-3.5" />
              <span>-30% alert latency</span>
            </div>
          </div>
        </div>

        {/* Card Body: Interactive High-Tech Dashboard Mockup */}
        <div className="p-6 sm:p-10">
          {activeTab === 'biometrics' && (
            <div className="space-y-6">
              {/* Telemetry Metrics Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[11px] font-mono text-slate-500 block uppercase">Heart Rate</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                      {heartRate}
                    </span>
                    <span className="text-xs text-cyan-400 font-medium">BPM</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 mt-1 block">Resting baseline normal</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[11px] font-mono text-slate-500 block uppercase">SpO2 Blood Oxygen</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-white">98.5</span>
                    <span className="text-xs text-blue-400 font-medium">%</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 mt-1 block">Continuous monitoring</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[11px] font-mono text-slate-500 block uppercase">Ambient Movement</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-white">Active</span>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">Living Zone radar</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[11px] font-mono text-slate-500 block uppercase">Emergency Invariants</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">Zero</span>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">No distress detected</span>
                </div>
              </div>

              {/* Animated Real-Time Biometric ECG / Telemetry Canvas */}
              <div className="relative p-5 rounded-2xl bg-[#090A0D] border border-white/[0.07] overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono uppercase text-slate-300">
                      Live Telemetry Waveform (SignalR Binary Buffer)
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">Sampling Rate: 250 Hz</span>
                </div>

                {/* SVG Animated Pulse Line */}
                <div className="h-32 sm:h-44 w-full relative">
                  <svg className="w-full h-full" viewBox="0 0 1000 160" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="waveGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="waveStroke" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="50%" stopColor="#06B6D4" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>

                    {/* Background Grid Lines */}
                    <line x1="0" y1="40" x2="1000" y2="40" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
                    <line x1="0" y1="80" x2="1000" y2="80" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                    <line x1="0" y1="120" x2="1000" y2="120" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />

                    {/* Area under curve */}
                    <path
                      d="M0,80 Q50,80 100,75 T200,85 T300,78 T380,80 L395,20 L405,145 L415,60 L425,90 L440,80 T550,82 T650,76 T730,80 L745,22 L755,140 L765,65 L775,88 L790,80 T900,82 T1000,80 L1000,160 L0,160 Z"
                      fill="url(#waveGlow)"
                    />

                    {/* Wave Path */}
                    <path
                      d="M0,80 Q50,80 100,75 T200,85 T300,78 T380,80 L395,20 L405,145 L415,60 L425,90 L440,80 T550,82 T650,76 T730,80 L745,22 L755,140 L765,65 L775,88 L790,80 T900,82 T1000,80"
                      fill="none"
                      stroke="url(#waveStroke)"
                      strokeWidth="2.5"
                    />

                    {/* Animated scanning pulse dot */}
                    <circle cx={(pulsePhase * 10) % 1000} cy="80" r="4" fill="#06B6D4">
                      <animate attributeName="opacity" values="1;0.4;1" dur="1s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sleep' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Sleep Duration</span>
                  <p className="text-2xl font-bold font-mono text-white mt-1">7h 48m</p>
                  <span className="text-xs text-emerald-400 mt-1 block">94% Sleep Quality Index</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Deep + REM Phase</span>
                  <p className="text-2xl font-bold font-mono text-violet-300 mt-1">3h 52m</p>
                  <span className="text-xs text-slate-400 mt-1 block">Optimal neuro-recovery</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Resting Heart Rate</span>
                  <p className="text-2xl font-bold font-mono text-cyan-300 mt-1">54 BPM</p>
                  <span className="text-xs text-slate-400 mt-1 block">-3 BPM vs monthly average</span>
                </div>
              </div>

              {/* Sleep stage architecture visual */}
              <div className="p-5 rounded-2xl bg-[#090A0D] border border-white/[0.07]">
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
                  <span>Sleep Stage Distribution (Recharts Engine)</span>
                  <span>11:30 PM — 07:18 AM</span>
                </div>
                <div className="h-20 w-full flex items-end gap-1.5 pt-4">
                  {[20, 25, 40, 85, 90, 80, 45, 30, 25, 70, 95, 80, 35, 20, 60, 85, 90, 40, 20, 15].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t transition-all duration-300 hover:brightness-125"
                      style={{
                        height: `${h}%`,
                        backgroundColor:
                          h > 75 ? '#8B5CF6' : h > 40 ? '#3B82F6' : '#06B6D4',
                      }}
                      title={`Stage value: ${h}%`}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-3 border-t border-white/[0.05] mt-3">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-violet-500 inline-block" /> Deep Sleep</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-blue-500 inline-block" /> REM Sleep</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-cyan-500 inline-block" /> Light Sleep</span>
                  </div>
                  <span>AI Insight: Consistent circadian timing</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ambient' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Living Space</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-lg font-bold text-white">Occupied</span>
                  </div>
                  <span className="text-xs text-slate-400 mt-1 block">Radar sensor reading active</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Bedroom Zone</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                    <span className="text-lg font-bold text-slate-300">Vacant</span>
                  </div>
                  <span className="text-xs text-slate-400 mt-1 block">Last verified 18m ago</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Emergency Dispatch</span>
                  <div className="flex items-center gap-2 mt-1">
                    <ShieldAlert className="w-4 h-4 text-emerald-400" />
                    <span className="text-lg font-bold text-emerald-400">Standby (Normal)</span>
                  </div>
                  <span className="text-xs text-slate-400 mt-1 block">Sub-100ms automated trigger</span>
                </div>
              </div>

              {/* Spatial Floorplan / React-Konva Canvas Representation */}
              <div className="p-6 rounded-2xl bg-[#090A0D] border border-white/[0.07] flex flex-col items-center justify-center text-center py-10 relative">
                <div className="w-48 h-48 rounded-full border border-cyan-500/20 flex items-center justify-center relative">
                  <div className="w-32 h-32 rounded-full border border-blue-500/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center">
                      <Radio className="w-6 h-6 text-cyan-400 animate-pulse" />
                    </div>
                  </div>
                  {/* Radar sweep beam */}
                  <div className="absolute inset-0 rounded-full border-t border-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
                </div>
                <p className="text-xs font-mono text-slate-400 mt-4">
                  React-Konva 2D Spatial Floorplan & Radar Telemetry Mesh
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Processes live room occupancy events with zero camera privacy invasion.
                </p>
              </div>
            </div>
          )}

          {/* Project Deliverables and Highlights */}
          <div className="mt-8 pt-6 border-t border-white/[0.07] grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <span className="text-xs font-mono uppercase text-slate-500 block mb-2">Key Engineering Work</span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {FEATURED_PROJECT.highlights.slice(0, 4).map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs font-mono uppercase text-slate-500 block mb-2">Technologies Used</span>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                {FEATURED_PROJECT.technologies.map((t, idx) => (
                  <span key={t} className="text-slate-300 font-medium">
                    {t}
                    {idx < FEATURED_PROJECT.technologies.length - 1 && (
                      <span className="text-slate-600 ml-2">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
