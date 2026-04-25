import React from "react";
import { FileText, PenLine, Captions, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Audio & Video Transcription",
    description:
      "We convert your spoken word into accurate written text. Our human transcribers handle all accents, technical jargon, and complex subject matter with precision.",
    features: ["Multi-speaker identification", "Timestamps on request", "All file formats"],
    iconColor: "text-blue-400",
    iconBg: "from-blue-600/25 to-blue-900/20",
    glow: "icon-glow-blue",
    dot: "bg-blue-400",
    link: "text-blue-400 hover:text-blue-300",
    hoverBorder: "group-hover:border-blue-500/25",
  },
  {
    icon: PenLine,
    title: "Transcription Editing",
    description:
      "Have an existing rough transcription? Our expert editors will clean it up, correct errors, improve readability, and ensure it meets professional standards.",
    features: ["Grammar & punctuation", "Verbatim or clean read", "Style consistency"],
    iconColor: "text-violet-400",
    iconBg: "from-violet-600/25 to-violet-900/20",
    glow: "icon-glow-violet",
    dot: "bg-violet-400",
    link: "text-violet-400 hover:text-violet-300",
    hoverBorder: "group-hover:border-violet-500/25",
  },
  {
    icon: Captions,
    title: "Captioning",
    description:
      "ADA-compliant, broadcast-ready closed captions for video content. Perfect for social media, e-learning platforms, and broadcast media.",
    features: ["SRT, VTT, SCC formats", "Character limit compliance", "Broadcast standards"],
    iconColor: "text-cyan-400",
    iconBg: "from-cyan-600/25 to-cyan-900/20",
    glow: "icon-glow-cyan",
    dot: "bg-cyan-400",
    link: "text-cyan-400 hover:text-cyan-300",
    hoverBorder: "group-hover:border-cyan-500/25",
  },
  {
    icon: Globe,
    title: "Subtitling",
    description:
      "Reach global audiences with professionally timed subtitles. We handle translation subtitles and SDH subtitles for the deaf and hard of hearing.",
    features: ["Multiple languages", "SDH subtitles", "Timed to frame"],
    iconColor: "text-emerald-400",
    iconBg: "from-emerald-600/25 to-emerald-900/20",
    glow: "icon-glow-emerald",
    dot: "bg-emerald-400",
    link: "text-emerald-400 hover:text-emerald-300",
    hoverBorder: "group-hover:border-emerald-500/25",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/07 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/07 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center text-xs font-bold text-cyan-400/80 uppercase tracking-[0.22em] mb-5 px-3.5 py-1.5 glass rounded-full">
            Our Services
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Full-spectrum{" "}
            <span className="gradient-text">transcription solutions</span>
          </h2>
          <p className="text-white/45 text-lg">
            From raw recordings to polished, accessible content — we do it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map(
            ({ icon: Icon, title, description, features, iconColor, iconBg, glow, dot, link, hoverBorder }) => (
              <div
                key={title}
                className={`glass-card rounded-3xl p-8 group border border-white/[0.09] ${hoverBorder} transition-all duration-300`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${iconBg} border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-7 h-7 ${iconColor} ${glow}`} />
                </div>

                <h3 className="font-syne text-xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-5">{description}</p>

                <ul className="space-y-2 mb-6">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-white/55">
                      <span className={`w-1.5 h-1.5 rounded-full ${dot} shrink-0`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${link} transition-colors group/link`}
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
