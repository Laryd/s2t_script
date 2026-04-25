import React from "react";
import { Twitter, Linkedin, Facebook, Youtube } from "lucide-react";

const footerLinks = {
  Company: ["About Us", "Blog", "Careers", "Press"],
  Services: ["Transcription", "Editing", "Captioning", "Subtitling"],
  Support: ["Help Center", "Pricing", "Contact", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
};

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-blue-600/05 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-white text-xs font-bold font-syne">S2</span>
              </div>
              <span className="font-syne text-xl font-bold text-white tracking-tight">
                S2T<span className="gradient-text-static">_script</span>
              </span>
            </a>
            <p className="text-white/30 text-sm leading-relaxed mb-6 max-w-xs">
              Professional, human-powered transcription services for creators,
              filmmakers, and businesses worldwide.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-syne text-xs font-bold text-white/50 uppercase tracking-widest mb-4">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/25 hover:text-white/70 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glow-separator mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/20">
          <p>© {new Date().getFullYear()} S2T_script. All rights reserved.</p>
          <p>Made with precision for creators who care about quality.</p>
        </div>
      </div>
    </footer>
  );
}
