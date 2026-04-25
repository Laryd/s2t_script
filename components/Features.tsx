import React from "react";
import { Video, Mic2, Captions, Gift, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Video Transcriptions",
    description: "Accurate transcriptions for interviews, webinars, documentaries, and all video content formats.",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/15 border-blue-500/25",
    glow: "icon-glow-blue",
    hoverShadow: "hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_30px_rgba(59,130,246,0.12)]",
  },
  {
    icon: Mic2,
    title: "Podcast Transcriptions",
    description: "Turn your podcast episodes into searchable, readable text. Boost your SEO and reach new audiences.",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/15 border-violet-500/25",
    glow: "icon-glow-violet",
    hoverShadow: "hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_30px_rgba(139,92,246,0.12)]",
  },
  {
    icon: Captions,
    title: "Captioning & Subtitling",
    description: "Professionally timed captions and subtitles for accessibility compliance and global reach.",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/15 border-cyan-500/25",
    glow: "icon-glow-cyan",
    hoverShadow: "hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_30px_rgba(6,182,212,0.12)]",
  },
  {
    icon: Gift,
    title: "Loyalty Discounts",
    description: "Returning clients enjoy progressive discounts. The more you transcribe, the more you save.",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/15 border-amber-500/25",
    glow: "icon-glow-amber",
    hoverShadow: "hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_30px_rgba(251,191,36,0.12)]",
  },
  {
    icon: Shield,
    title: "100% Happy Guarantee",
    description: "Not satisfied? We'll redo it or refund you — no questions asked. Your satisfaction is our priority.",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/15 border-emerald-500/25",
    glow: "icon-glow-emerald",
    hoverShadow: "hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_30px_rgba(52,211,153,0.12)]",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Standard 48-hour delivery with rush options available. We never miss a deadline.",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/15 border-rose-500/25",
    glow: "icon-glow-rose",
    hoverShadow: "hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_30px_rgba(244,63,94,0.12)]",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 relative">
      <div className="glow-separator" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/06 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center text-xs font-bold text-blue-400/80 uppercase tracking-[0.22em] mb-5 px-3.5 py-1.5 glass rounded-full">
            Why Choose Us
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Everything you need for{" "}
            <span className="gradient-text">perfect transcriptions</span>
          </h2>
          <p className="text-white/45 text-lg leading-relaxed">
            From quick podcasts to large-scale video projects, we have the tools
            and talent to deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, description, iconColor, iconBg, glow, hoverShadow }) => (
            <div
              key={title}
              className={`glass-card rounded-3xl p-7 group cursor-default ${hoverShadow}`}
            >
              <div
                className={`w-12 h-12 rounded-2xl ${iconBg} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className={`w-6 h-6 ${iconColor} ${glow}`} />
              </div>
              <h3 className="font-syne text-lg font-semibold text-white mb-2">
                {title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="glow-separator mt-28" />
    </section>
  );
}
