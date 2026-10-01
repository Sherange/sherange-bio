import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Copy, Check, Send, Download, Sparkles, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenCV: () => void;
}

export default function ContactSection({ onOpenCV }: ContactSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  // Interactive message composer state
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail || !senderMessage) return;

    // Trigger user mail client with prefilled details
    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName || 'Visitor'}`);
    const body = encodeURIComponent(`Hi Sherange,\n\n${senderMessage}\n\nFrom: ${senderName} (${senderEmail})`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setSenderName('');
      setSenderEmail('');
      setSenderMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Editorial Pitch and Direct Channels */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for new projects & roles</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have an idea worth building?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed font-normal">
              Whether you're building a product, improving an existing application, or looking for someone to help turn an idea into reality, I'd love to hear from you.
            </p>
          </div>

          {/* Action Buttons: Get In Touch & Download CV */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-6 py-3.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </a>

            <button
              onClick={onOpenCV}
              className="px-6 py-3.5 text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>View & Download CV</span>
            </button>
          </div>

          {/* Direct channels cards */}
          <div className="space-y-3 pt-6 border-t border-white/[0.06]">
            {/* Email item */}
            <div className="p-4 rounded-xl bg-[#0D0E13] border border-white/[0.07] flex items-center justify-between group hover:border-blue-500/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 block">Direct Email</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 text-slate-500 hover:text-slate-300 rounded-lg hover:bg-white/5 transition-colors"
                title="Copy email"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone item */}
            <div className="p-4 rounded-xl bg-[#0D0E13] border border-white/[0.07] flex items-center justify-between group hover:border-blue-500/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 block">Direct Phone</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2 text-slate-500 hover:text-slate-300 rounded-lg hover:bg-white/5 transition-colors"
                title="Copy phone"
                aria-label="Copy phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social links row */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-[#0D0E13] border border-white/[0.07] hover:border-white/20 flex items-center gap-2.5 text-slate-300 hover:text-white transition-all group"
              >
                <Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium">LinkedIn Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-[#0D0E13] border border-white/[0.07] hover:border-white/20 flex items-center gap-2.5 text-slate-300 hover:text-white transition-all group"
              >
                <Github className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium">GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Instant Message Composer */}
        <div className="lg:col-span-6">
          <div className="p-7 sm:p-8 rounded-3xl bg-[#0D0E13] border border-white/[0.08] shadow-2xl relative">
            <h3 className="text-lg font-bold text-white mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-6 font-normal">
              Responses are typically delivered within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5 uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Alex Rivera"
                  className="w-full px-4 py-3 rounded-xl bg-[#14151B] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5 uppercase">
                  Your Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#14151B] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5 uppercase">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Tell me about your product, project roadmap, or mobile application goals..."
                  className="w-full px-4 py-3 rounded-xl bg-[#14151B] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-500/35 flex items-center justify-center gap-2"
              >
                {isSent ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Opening Mail Client...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Sherange</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
