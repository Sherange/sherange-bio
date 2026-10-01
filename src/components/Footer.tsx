import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#07080A] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Lockup */}
        <div className="text-center md:text-left">
          <p className="text-base font-bold text-white tracking-tight">
            {PERSONAL_INFO.shortName}
          </p>
          <p className="text-xs text-slate-500 font-mono mt-0.5">
            Software Engineer · Frontend · Mobile
          </p>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-blue-400 transition-colors p-1.5"
              aria-label="Email Sherange"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors p-1.5"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors p-1.5"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <div className="h-4 w-px bg-white/10" />

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors p-1"
            title="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/[0.04] text-center text-xs text-slate-600 font-mono">
        © 2026 {PERSONAL_INFO.shortName}. All rights reserved. Built with React & TypeScript.
      </div>
    </footer>
  );
}
