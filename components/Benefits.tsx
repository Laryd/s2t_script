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

export default function Benefits() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="text-sm font-semibold text-brand uppercase tracking-widest">
              The S2T Advantage
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Why professionals trust{" "}
              <span className="text-brand">S2T_script</span>
            </h2>
            <p className="mt-4 text-slate-500 text-lg leading-relaxed">
              We are not a generic transcription platform. Every aspect of our
              service is designed to deliver quality, speed, and peace of mind.
            </p>

            <ul className="mt-10 space-y-5">
              {benefits.map(({ title, description }) => (
                <li key={title} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900">{title}</h4>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="bg-brand rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                <div className="text-5xl font-bold mb-2">99%</div>
                <div className="text-blue-200 font-medium mb-8">Accuracy Guarantee</div>

                <div className="space-y-4">
                  {[
                    { label: "Transcription", value: 99 },
                    { label: "On-time delivery", value: 97 },
                    { label: "Client satisfaction", value: 98 },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white/80">{label}</span>
                        <span className="font-semibold">{value}%</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/20 grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-white/60">Clients worldwide</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1M+</div>
                    <div className="text-sm text-white/60">Minutes transcribed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
