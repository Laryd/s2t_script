import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="py-24 bg-brand relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-dark/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span className="text-sm text-white/80">Start your free trial today</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
          Ready to elevate your content with perfect transcriptions?
        </h2>

        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Join over 500 content creators, filmmakers, and businesses who rely on
          S2T_script for professional-grade transcriptions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="xl"
            className="bg-white text-brand hover:bg-white/90 font-semibold shadow-xl group"
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
            <a href="#contact">Talk to Sales</a>
          </Button>
        </div>

        <p className="mt-6 text-sm text-white/50">
          No credit card required · First 30 minutes free · Cancel anytime
        </p>
      </div>
    </section>
  );
}
