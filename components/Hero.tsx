import React from "react";
import { ArrowRight, CheckCircle2, Mic, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: CheckCircle2, value: "99%", label: "Accuracy Rate" },
  { icon: Clock, value: "24hr", label: "Turnaround" },
  { icon: Users, value: "500+", label: "Happy Clients" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light opacity-90" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Mic className="w-4 h-4 text-blue-300" />
            <span className="text-sm text-blue-200 font-medium">
              Professional Transcription Services
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6 animate-fade-up">
            Taking Transcription{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              to Another Level
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed animate-fade-up animate-delay-100">
            Crystal-clear, human-powered transcriptions for audio, video, podcasts and
            more. Delivered fast, with industry-leading accuracy.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up animate-delay-200">
            <Button
              size="xl"
              className="bg-white text-brand hover:bg-white/90 shadow-xl font-semibold group"
              asChild
            >
              <a href="#">
                Get Started Free
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="xl"
              variant="outline-white"
              className="font-semibold"
              asChild
            >
              <a href="#pricing">View Pricing</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg animate-fade-up animate-delay-300">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center"
              >
                <Icon className="w-5 h-5 text-blue-300 mx-auto mb-1" />
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-xs text-white/60">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
