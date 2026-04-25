import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Aurora orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/12 rounded-full blur-[150px] animate-scale-pulse pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-violet-600/18 rounded-full blur-[100px] animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-500/12 rounded-full blur-[80px] animate-blob2 pointer-events-none" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-strong rounded-3xl p-12 sm:p-16 max-w-4xl mx-auto relative overflow-hidden">
          {/* Inner tinted glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/05 to-violet-600/05 rounded-3xl pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 icon-glow-amber" />
              <span className="text-xs font-semibold text-white/65 uppercase tracking-[0.2em]">
                Start your free trial today
              </span>
            </div>

            <h2 className="font-syne text-3xl sm:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
              Ready to elevate your content with{" "}
              <span className="gradient-text">perfect transcriptions?</span>
            </h2>

            <p className="text-white/45 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Join over 500 content creators, filmmakers, and businesses who rely on
              S2T_script for professional-grade transcriptions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#"
                className="btn-glow animate-glow-pulse inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl text-base"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="btn-glass inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl text-base"
              >
                Talk to Sales
              </a>
            </div>

            <p className="text-sm text-white/25">
              No credit card required · First 30 minutes free · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
