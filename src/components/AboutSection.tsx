import { useState, useEffect } from 'react';
import { Terminal, ShieldCheck, Clock, MapPin, Sparkles, Copy, Check, Code2, Cpu } from 'lucide-react';
import { PERSONAL_INFO, TERMINAL_COMMANDS } from '../data/portfolioData';

export default function AboutSection() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  
  // Terminal state
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; out: string }>>([
    { cmd: 'whoami', out: TERMINAL_COMMANDS.whoami },
    { cmd: 'role', out: TERMINAL_COMMANDS.role },
    { cmd: 'focus', out: TERMINAL_COMMANDS.focus },
    { cmd: 'currently', out: TERMINAL_COMMANDS.currently }
  ]);
  const [inputCmd, setInputCmd] = useState('');
  const [isTypingInit, setIsTypingInit] = useState(false);

  // Live Time in Sri Lanka (GMT+5:30)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Colombo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCommand = (cmdToRun: string) => {
    const normalized = cmdToRun.trim().toLowerCase();
    let output = '';

    if (normalized === 'clear') {
      setTerminalHistory([]);
      setInputCmd('');
      return;
    }

    if (TERMINAL_COMMANDS[normalized]) {
      output = TERMINAL_COMMANDS[normalized];
    } else if (normalized === 'help') {
      output = 'Available commands: whoami, role, focus, currently, skills, location, contact, clear';
    } else {
      output = `zsh: command not found: ${normalized}. Type 'help' for available commands.`;
    }

    setTerminalHistory((prev) => [...prev, { cmd: cmdToRun, out: output }]);
    setInputCmd('');
  };

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="mb-14">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
          Background & Philosophy
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
          More than just writing code.
        </h2>
      </div>

      {/* Main Grid: Left side text, Right side Developer Identity Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Side: Thoughtful Narrative */}
        <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
          {PERSONAL_INFO.aboutParagraphs.map((para, idx) => (
            <p key={idx} className="text-slate-300/90">
              {para}
            </p>
          ))}

          {/* Quick highlight points with clean typographic separation */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/30 transition-colors">
              <span className="text-xs font-mono uppercase text-blue-400 block mb-1">Architecture</span>
              <p className="text-sm font-medium text-slate-200">
                Scalable state machines, SignalR IoT telemetry, & offline resilience.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/30 transition-colors">
              <span className="text-xs font-mono uppercase text-violet-400 block mb-1">Delivery</span>
              <p className="text-sm font-medium text-slate-200">
                Automated Fastlane pipelines, store signing & multi-tenant releases.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Animated Developer Identity Card */}
        <div className="lg:col-span-5">
          <div className="relative group">
            {/* Ambient card glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-violet-600/30 to-cyan-500/20 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-700" />

            <div className="relative bg-[#101115] border border-white/[0.09] rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:border-white/20">
              {/* Card Header: Avatar representation & Verified Status */}
              <div className="flex items-start justify-between mb-6 pb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-4">
                  {/* Distinctive Engineer Monogram Avatar with ambient ring */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-700 p-[1.5px] shadow-lg shadow-blue-500/20">
                      <div className="w-full h-full bg-[#0E1015] rounded-[14px] flex items-center justify-center">
                        <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-br from-blue-300 via-white to-cyan-200 bg-clip-text text-transparent">
                          SF
                        </span>
                      </div>
                    </div>
                    {/* Live status dot */}
                    <span 
                      className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#101115]" 
                      title="Active" 
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {PERSONAL_INFO.shortName}
                      </h3>
                      <span title="Verified Senior Engineer">
                        <ShieldCheck className="w-4 h-4 text-blue-400" />
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium">
                      Senior Software Engineer
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-1 font-mono">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>Colombo, Sri Lanka</span>
                    </div>
                  </div>
                </div>

                {/* Copy Email quick button */}
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Core Specialization tags - Clean unboxed metadata */}
              <div className="mb-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                  Core Technologies
                </span>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <span className="text-blue-400">React</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-cyan-400">React Native</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-violet-400">Flutter</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-indigo-300">TypeScript</span>
                </div>
              </div>

              {/* Live Status and Local Clock */}
              <div className="space-y-3 pt-4 border-t border-white/[0.06] text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>Local Time (GMT+5:30)</span>
                  </span>
                  <span className="font-mono text-slate-200 tabular-nums">
                    {currentTime || 'Loading...'}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Availability</span>
                  </span>
                  <span className="text-emerald-400 font-medium">
                    Immediate / Remote
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Domain Experience</span>
                  </span>
                  <span className="font-mono text-slate-200">
                    6+ Years In Production
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Special Visual Element: Interactive Developer Code Terminal */}
      <div className="mt-16">
        <div className="rounded-2xl bg-[#0B0C10] border border-white/[0.08] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          {/* Terminal Window Top Bar */}
          <div className="bg-[#121318] px-4 py-3 border-b border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-slate-400 text-xs font-mono">sherange@mbp: ~/portfolio</span>
            </div>
            <div className="text-[11px] text-slate-500 hidden sm:flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5" />
              <span>interactive shell</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-5 sm:p-6 space-y-4 max-h-96 overflow-y-auto">
            {terminalHistory.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-cyan-400 font-bold">$</span>
                  <span className="text-white font-medium">{item.cmd}</span>
                </div>
                <div className="text-slate-400 pl-4 border-l border-white/10 leading-relaxed">
                  {item.out}
                </div>
              </div>
            ))}

            {/* Input Prompt */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (inputCmd.trim()) {
                  handleRunCommand(inputCmd);
                }
              }}
              className="flex items-center gap-2 pt-2"
            >
              <span className="text-cyan-400 font-bold">$</span>
              <input
                type="text"
                value={inputCmd}
                onChange={(e) => setInputCmd(e.target.value)}
                placeholder="type 'help', 'skills', or 'contact'..."
                className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-slate-600 font-mono text-xs sm:text-sm"
              />
              <span className="w-2 h-4 bg-cyan-400 animate-pulse" />
            </form>
          </div>

          {/* Quick command buttons */}
          <div className="px-5 py-2.5 bg-[#0e0f14] border-t border-white/[0.05] flex flex-wrap items-center gap-2 text-[11px]">
            <span className="text-slate-500">Quick run:</span>
            {['whoami', 'role', 'focus', 'currently', 'skills', 'contact'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleRunCommand(cmd)}
                className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 transition-colors font-mono"
              >
                ${cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
