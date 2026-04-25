import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Sparkles,
  Upload,
  Mic,
  Play,
} from "lucide-react";

const stats = [
  { icon: CheckCircle2, value: "99%", label: "Accuracy Rate", color: "text-blue-400", glow: "icon-glow-blue" },
  { icon: Clock, value: "24hr", label: "Turnaround", color: "text-violet-400", glow: "icon-glow-violet" },
  { icon: Users, value: "500+", label: "Happy Clients", color: "text-cyan-400", glow: "icon-glow-cyan" },
];

const waveHeights = [10,18,14,22,8,20,16,24,12,20,10,18,22,14,8,20,16,12,24,10,18,14,20,8,22,16,12,18];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated aurora orbs */}
      <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-blob pointer-events-none" />
      <div className="absolute top-1/3 right-1/5 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[100px] animate-blob2 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[80px] animate-blob-d5 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-indigo-500/15 rounded-full blur-[90px] animate-blob2-d3 pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-up">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 icon-glow-amber" />
              <span className="text-xs font-semibold text-white/70 uppercase tracking-[0.2em]">
                Professional Transcription Services
              </span>
            </div>

            <h1
              className="font-syne text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-6 animate-fade-up animate-delay-100 opacity-0"
            >
              Taking
              <br />
              Transcription{" "}
              <br />
              <span className="gradient-text">to Another</span>
              <br />
              <span className="gradient-text">Level.</span>
            </h1>

            <p
              className="text-lg text-white/50 max-w-lg mb-10 leading-relaxed animate-fade-up animate-delay-200 opacity-0"
            >
              Crystal-clear, human-powered transcriptions for audio, video,
              podcasts and more. Delivered fast, with industry-leading accuracy.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-up animate-delay-300 opacity-0"
            >
              <a
                href="#"
                className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base animate-glow-pulse"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#pricing"
                className="btn-glass inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base"
              >
                View Pricing
              </a>
            </div>

            <div
              className="grid grid-cols-3 gap-3 max-w-xs animate-fade-up animate-delay-400 opacity-0"
            >
              {stats.map(({ icon: Icon, value, label, color, glow }) => (
                <div key={label} className="glass-card rounded-2xl p-4 text-center">
                  <Icon className={`w-5 h-5 ${color} ${glow} mx-auto mb-2`} />
                  <div className="font-syne text-xl font-bold text-white">{value}</div>
                  <div className="text-[11px] text-white/40 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product mockup */}
          <div className="hidden lg:block relative animate-fade-up animate-delay-300 opacity-0">
            <div className="glass-strong rounded-3xl p-6 shadow-2xl shadow-black/50 animate-float">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <div className="flex-1 glass rounded-lg h-6 flex items-center px-3 ml-1">
                  <span className="text-white/25 text-xs">s2tscript.com/dashboard</span>
                </div>
              </div>

              {/* Drop zone */}
              <div className="glass rounded-2xl border border-dashed border-white/15 p-8 text-center mb-4 hover:border-blue-500/30 transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <p className="text-white/60 text-sm font-medium">Drop your audio here</p>
                <p className="text-white/25 text-xs mt-1">MP3, MP4, WAV, M4A, MOV supported</p>
              </div>

              {/* File row */}
              <div className="glass rounded-xl p-4 mb-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Mic className="w-4 h-4 text-blue-400 icon-glow-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/75 text-sm font-medium truncate">podcast_ep42_raw.mp3</p>
                    <p className="text-white/35 text-xs">52 min · Transcribed</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 shrink-0">
                    Done
                  </span>
                </div>
                {/* Waveform */}
                <div className="flex items-center gap-[3px] h-6">
                  {waveHeights.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-full bg-gradient-to-t from-blue-600 to-cyan-400 opacity-60"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 icon-glow-emerald" />
                  <span className="text-white/50 text-xs">99.2% accuracy</span>
                </div>
                <button className="btn-glow text-xs px-4 py-2 rounded-xl flex items-center gap-1.5">
                  <Play className="w-3 h-3" />
                  Download
                </button>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-5 -right-5 glass-md rounded-2xl px-4 py-3 animate-float-d2 shadow-lg shadow-black/30">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/70 text-xs font-medium">Live processing</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-8 glass-md rounded-2xl px-4 py-3 animate-float shadow-lg shadow-black/30">
              <p className="text-xs text-white/40 mb-0.5">Accuracy rate</p>
              <p className="font-syne text-white font-bold text-lg leading-none">
                99<span className="text-blue-400">%</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />
    </section>
  );
}
