import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export default function Hero({ onExploreWork, onContactClick }: HeroProps) {
  // Floating code fragments that drift very subtly
  const codeSnippets = [
    { text: 'const [telemetry, setStream] = useState();', x: '10%', y: '22%', delay: '0s' },
    { text: 'SignalR.on("iot:alert", handleDispatch);', x: '72%', y: '18%', delay: '2s' },
    { text: 'Widget build(BuildContext context)', x: '8%', y: '74%', delay: '4s' },
    { text: 'create<AppState>()((set) => ({ ... }))', x: '75%', y: '68%', delay: '1s' },
    { text: '<Canvas width={1920} height={1080} />', x: '45%', y: '84%', delay: '3s' },
  ];

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Gentle parallax factor
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 overflow-hidden bg-[#08090B] bg-grid-subtle">
      {/* Ambient gradient lights in background */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] opacity-40 transition-transform duration-1000 ease-out"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.35) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 75%)',
          transform: `translate(calc(-50% + ${mousePos.x * 0.8}px), ${mousePos.y * 0.8}px)`
        }}
      />
      <div 
        className="pointer-events-none absolute -bottom-20 right-10 w-[450px] h-[450px] rounded-full blur-[120px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
          transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)`
        }}
      />

      {/* Abstract delicate flowing SVG lines */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-15"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-100 350C250 150 500 550 850 320C1200 90 1400 480 1600 300"
          stroke="url(#hero-gradient-1)"
          strokeWidth="1.5"
          strokeDasharray="4 8"
        />
        <path
          d="M-50 480C300 280 650 620 950 420C1250 220 1500 550 1700 450"
          stroke="url(#hero-gradient-2)"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="hero-gradient-1" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="0.5" stopColor="#8B5CF6" stopOpacity="0.4" />
            <stop offset="1" stopColor="#06B6D4" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="hero-gradient-2" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8B5CF6" stopOpacity="0.6" />
            <stop offset="1" stopColor="#3B82F6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating small code fragments */}
      <div className="hidden lg:block pointer-events-none absolute inset-0 overflow-hidden">
        {codeSnippets.map((snippet, idx) => (
          <div
            key={idx}
            className="absolute font-mono text-[11px] text-slate-500/40 select-none animate-float-slow backdrop-blur-[1px]"
            style={{
              left: snippet.x,
              top: snippet.y,
              animationDelay: snippet.delay,
              transform: `translate(${mousePos.x * (idx % 2 === 0 ? 0.3 : -0.3)}px, ${mousePos.y * 0.3}px)`
            }}
          >
            {snippet.text}
          </div>
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Availability / Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-300 mb-8 backdrop-blur-sm shadow-sm transition-all hover:bg-white/[0.07] hover:border-white/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="tracking-wide">{PERSONAL_INFO.status}</span>
        </div>

        {/* Eyebrow text */}
        <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-blue-400 uppercase mb-4">
          {PERSONAL_INFO.heroEyebrow}
        </p>

        {/* Large Headline */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 max-w-3xl"
          style={{ textWrap: 'balance' }}
        >
          Building digital experiences that feel{' '}
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
            fast, intuitive, and alive.
          </span>
        </h1>

        {/* Supporting Line */}
        <p className="text-base sm:text-lg md:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl mb-10">
          {PERSONAL_INFO.heroSubheadline}
        </p>

        {/* Primary Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreWork}
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
          >
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </button>

          <button
            onClick={onContactClick}
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 text-blue-400" />
          </button>
        </div>

        {/* Core tech stack badges under hero */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs text-slate-400">
          <span className="text-slate-500 uppercase tracking-wider font-semibold text-[10px]">Specialized In:</span>
          <span className="text-slate-300 font-medium">React</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-300 font-medium">React Native</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-300 font-medium">Flutter</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-300 font-medium">TypeScript</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-300 font-medium">SignalR & Real-Time</span>
        </div>
      </div>

      {/* Scroll Indicator at bottom */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors text-[11px] font-mono tracking-widest uppercase cursor-pointer"
        aria-label="Scroll down to explore about section"
      >
        <span>SCROLL TO EXPLORE ↓</span>
      </a>
    </section>
  );
}
