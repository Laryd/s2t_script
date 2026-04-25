import React from "react";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Human-Powered Accuracy",
    description:
      "Unlike automated tools, every transcript is handled by a trained human transcriber — meaning accents, technical terms, and complex dialogue are never a problem.",
  },
  {
    title: "99% Accuracy Guarantee",
    description:
      "We stand behind our work. If your transcript doesn't hit 99% accuracy, we'll redo it or refund you — no exceptions.",
  },
  {
    title: "Strict Confidentiality",
    description:
      "All files and transcripts are handled under NDA. Your sensitive content is never shared, stored beyond delivery, or used for training purposes.",
  },
  {
    title: "Multiple File Formats",
    description:
      "Receive your transcripts in DOCX, PDF, TXT, SRT, VTT, or any format that fits your workflow. We adapt to you.",
  },
  {
    title: "24/7 Support",
    description:
      "Our support team is available around the clock to handle urgent requests, answer questions, and ensure your projects run smoothly.",
  },
  {
    title: "Competitive Pricing",
    description:
      "Transparent per-minute pricing with no hidden fees. Volume discounts, loyalty rewards, and flexible plans to fit any budget.",
  },
];

const metrics = [
  { label: "Transcription accuracy", value: 99 },
  { label: "On-time delivery", value: 97 },
  { label: "Client satisfaction", value: 98 },
];

export default function Benefits() {
  return (
    <section className="py-28 relative">
      <div className="glow-separator" />

      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/08 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: benefits list */}
          <div>
            <span className="inline-flex items-center text-xs font-bold text-violet-400/80 uppercase tracking-[0.22em] mb-5 px-3.5 py-1.5 glass rounded-full">
              The S2T Advantage
            </span>
            <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Why professionals trust{" "}
              <span className="gradient-text">S2T_script</span>
            </h2>
            <p className="text-white/45 text-lg leading-relaxed mb-10">
              We're not a generic transcription platform. Every aspect of our
              service is designed to deliver quality, speed, and peace of mind.
            </p>

            <ul className="space-y-6">
              {benefits.map(({ title, description }) => (
                <li key={title} className="flex gap-4 group">
                  <div className="shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 icon-glow-blue group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-syne font-semibold text-white mb-1">{title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: stats panel */}
          <div className="relative">
            <div className="glass-strong rounded-3xl p-8 shadow-2xl shadow-black/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/12 rounded-full blur-[60px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-600/12 rounded-full blur-[40px]" />

              <div className="relative">
                <div className="mb-8">
                  <div className="font-syne text-7xl font-bold gradient-text leading-none mb-1">
                    99%
                  </div>
                  <div className="text-white/45 font-medium mt-2">Accuracy Guarantee</div>
                </div>

                <div className="space-y-5 mb-8">
                  {metrics.map(({ label, value }) => (
                    <div key={label}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white/55">{label}</span>
                        <span className="font-syne font-semibold text-white">{value}%</span>
                      </div>
                      <div className="h-2 glass rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                          style={{
                            width: `${value}%`,
                            boxShadow: "0 0 10px rgba(59,130,246,0.6)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="glow-separator mb-8" />

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "500+", label: "Clients worldwide" },
                    { value: "1M+", label: "Minutes transcribed" },
                  ].map(({ value, label }) => (
                    <div key={label} className="glass rounded-2xl p-4 text-center">
                      <div className="font-syne text-2xl font-bold gradient-text-static">
                        {value}
                      </div>
                      <div className="text-xs text-white/35 mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glow-separator mt-28" />
    </section>
  );
}
