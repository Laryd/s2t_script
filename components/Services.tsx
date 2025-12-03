import React from "react";
import { FileText, PenLine, Captions, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Audio & Video Transcription",
    description:
      "We convert your spoken word into accurate written text. Our human transcribers handle all accents, technical jargon, and complex subject matter with precision.",
    features: ["Multi-speaker identification", "Timestamps on request", "All file formats"],
  },
  {
    icon: PenLine,
    title: "Transcription Editing",
    description:
      "Have an existing rough transcription? Our expert editors will clean it up, correct errors, improve readability, and ensure it meets professional standards.",
    features: ["Grammar & punctuation", "Verbatim or clean read", "Style consistency"],
  },
  {
    icon: Captions,
    title: "Captioning",
    description:
      "ADA-compliant, broadcast-ready closed captions for video content. Perfect for social media, e-learning platforms, and broadcast media.",
    features: ["SRT, VTT, SCC formats", "Character limit compliance", "Broadcast standards"],
  },
  {
    icon: Globe,
    title: "Subtitling",
    description:
      "Reach global audiences with professionally timed subtitles. We handle translation subtitles and SDH subtitles for the deaf and hard of hearing.",
    features: ["Multiple languages", "SDH subtitles", "Timed to frame"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-blue-300 uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Full-spectrum transcription solutions
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            From raw recordings to polished, accessible content — we do it all.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, description, features }) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-brand/40 border border-brand/50 flex items-center justify-center mb-5">
                <Icon className="w-7 h-7 text-blue-300" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">{description}</p>

              <ul className="space-y-2 mb-6">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-300 hover:text-white transition-colors group-hover:gap-2"
              >
                Learn more
                <ArrowRight className="w-4 h-4 transition-all" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
