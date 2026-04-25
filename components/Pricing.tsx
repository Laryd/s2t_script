"use client";

import React, { useState } from "react";
import { Check, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic",
    pricePerMin: 1.5,
    pricePerHour: 80,
    description: "Perfect for occasional use and small projects",
    features: [
      "Human transcription",
      "5-day delivery",
      "Standard accuracy (98%)",
      "DOCX & PDF formats",
      "Email support",
    ],
    notIncluded: ["Rush delivery", "Priority support", "Custom formatting"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    pricePerMin: 2.5,
    pricePerHour: 130,
    description: "Our most popular plan for regular creators",
    features: [
      "Human transcription",
      "48-hour delivery",
      "High accuracy (99%+)",
      "All file formats",
      "Speaker identification",
      "Priority support",
      "Timestamps included",
    ],
    notIncluded: ["Same-day delivery"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    pricePerMin: null,
    pricePerHour: null,
    description: "Custom solutions for high-volume teams",
    features: [
      "Everything in Professional",
      "Same-day delivery",
      "Dedicated account manager",
      "Custom formatting",
      "API access",
      "Volume discounts",
      "NDA & compliance",
      "24/7 phone support",
    ],
    notIncluded: [],
    cta: "Contact Us",
    popular: false,
  },
];

export default function Pricing() {
  const [perHour, setPerHour] = useState(false);

  return (
    <section id="pricing" className="py-28 relative">
      <div className="glow-separator" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/05 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center text-xs font-bold text-amber-400/80 uppercase tracking-[0.22em] mb-5 px-3.5 py-1.5 glass rounded-full">
            Pricing
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Simple,{" "}
            <span className="gradient-text">transparent pricing</span>
          </h2>
          <p className="text-white/45 text-lg mb-8">
            No hidden fees. Pay only for what you need.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center glass-md rounded-full p-1.5 gap-1">
            {["Per Minute", "Per Hour"].map((label, i) => (
              <button
                key={label}
                onClick={() => setPerHour(i === 1)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                  (i === 1) === perHour
                    ? "btn-glow"
                    : "text-white/45 hover:text-white"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-start">
          {plans.map(
            ({ name, pricePerMin, pricePerHour, description, features, notIncluded, cta, popular }) => (
              <div
                key={name}
                className={cn(
                  "rounded-3xl p-8 relative transition-all duration-300",
                  popular
                    ? "glass-strong popular-glow scale-[1.04]"
                    : "glass-card"
                )}
              >
                {popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="btn-glow inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold">
                      <Zap className="w-3 h-3" />
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-syne text-xl font-bold text-white mb-1">{name}</h3>
                  <p className="text-sm text-white/40">{description}</p>
                </div>

                <div className="mb-8">
                  {pricePerMin !== null ? (
                    <div className="flex items-end gap-1">
                      <span className="font-syne text-5xl font-bold gradient-text-static">
                        ${perHour ? pricePerHour : pricePerMin}
                      </span>
                      <span className="text-white/35 text-sm mb-2">
                        /{perHour ? "hour" : "minute"}
                      </span>
                    </div>
                  ) : (
                    <span className="font-syne text-5xl font-bold gradient-text-static">
                      Custom
                    </span>
                  )}
                </div>

                <a
                  href="#"
                  className={cn(
                    "block w-full text-center py-3.5 rounded-2xl text-sm font-semibold mb-8 transition-all duration-300",
                    popular ? "btn-glow" : "btn-glass"
                  )}
                >
                  {cta}
                </a>

                <ul className="space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-blue-400 icon-glow-blue shrink-0 mt-0.5" />
                      <span className="text-white/60">{f}</span>
                    </li>
                  ))}
                  {notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm opacity-30">
                      <span className="w-4 h-4 shrink-0 mt-0.5 text-center text-white/30 leading-4">—</span>
                      <span className="text-white/35">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>

      <div className="glow-separator mt-28" />
    </section>
  );
}
