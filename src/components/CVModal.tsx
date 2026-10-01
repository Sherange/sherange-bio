import { X, Printer, Download, Mail, Phone, ExternalLink, ShieldCheck, MapPin } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, TECH_STACK } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Container */}
      <div className="relative w-full max-w-4xl bg-[#0E1015] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#14161E] border-b border-white/10 flex items-center justify-between shrink-0 no-print">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <h3 className="text-sm font-bold text-white tracking-wide">
              Curriculum Vitae — {PERSONAL_INFO.name}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 bg-[#0B0C10] text-slate-200 font-sans print:p-0 print:bg-white print:text-black">
          {/* CV Header */}
          <div className="border-b border-white/10 pb-6 print:border-black">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight print:text-black uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-blue-400 print:text-black mt-1">
              Senior Software Engineer
            </p>
            <p className="text-xs font-mono text-slate-400 print:text-black mt-1">
              React | TypeScript | React Native | Flutter | Real-Time Systems | APIs
            </p>

            {/* Contact row */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 print:text-black mt-3">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-blue-400 print:text-black" />
                <span>{PERSONAL_INFO.email}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-blue-400 print:text-black" />
                <span>{PERSONAL_INFO.phone}</span>
              </span>
              <span>•</span>
              <span>GitHub</span>
              <span>•</span>
              <span>LinkedIn</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400 print:text-black font-bold mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-black leading-relaxed">
              Senior Software Engineer with 6+ years of professional experience building and delivering production web and cross-platform mobile applications using React, TypeScript, React Native, Flutter, and Dart. Experienced in designing scalable frontend architectures, integrating REST and GraphQL APIs, building real-time applications with WebSockets/SignalR, implementing authentication and role-based access control, and optimizing application performance.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 print:text-black leading-relaxed mt-2">
              Strong background in end-to-end product development, from translating requirements and UI designs into production features through testing, debugging, CI/CD, and App Store/Google Play releases. Experienced working with distributed international teams and using modern AI-assisted development workflows with Cursor, Claude, and ChatGPT.
            </p>
          </div>

          {/* Core Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400 print:text-black font-bold mb-3">
              CORE TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-black">
              <div>
                <strong className="text-white print:text-black">Frontend:</strong> React, TypeScript, JavaScript ES6+, React Native, Flutter, Dart
              </div>
              <div>
                <strong className="text-white print:text-black">Architecture & State:</strong> React Query, Redux Toolkit, Redux, Zustand, Context API, Riverpod
              </div>
              <div>
                <strong className="text-white print:text-black">APIs & Data:</strong> REST APIs, Apollo GraphQL, Axios, Firebase, Pub/Sub
              </div>
              <div>
                <strong className="text-white print:text-black">Real-Time:</strong> WebSockets, SignalR
              </div>
              <div>
                <strong className="text-white print:text-black">UI & Visualization:</strong> Tailwind CSS, SCSS, Recharts, React-Konva, Three.js, Canvas
              </div>
              <div>
                <strong className="text-white print:text-black">Testing:</strong> Jest, Vitest, React Testing Library, Detox, ESLint
              </div>
              <div>
                <strong className="text-white print:text-black">Build & CI/CD:</strong> Vite, GitHub Actions, Fastlane, App Store Connect, Google Play Console
              </div>
              <div>
                <strong className="text-white print:text-black">AI-Assisted:</strong> Claude, Cursor, Gemini, ChatGPT
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400 print:text-black font-bold mb-4">
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white print:text-black">
                        {exp.company} {exp.product ? `— ${exp.product}` : ''}
                      </h3>
                      <p className="text-xs text-slate-400 print:text-black font-medium">
                        {exp.role}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 print:text-black">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-300 print:text-black">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="border-t border-white/10 pt-6 print:border-black">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400 print:text-black font-bold mb-3">
              EDUCATION
            </h2>
            <div className="space-y-3">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="text-xs">
                  <p className="font-bold text-white print:text-black">{edu.degree}</p>
                  <p className="text-slate-400 print:text-black font-mono">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
