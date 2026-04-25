"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@s2tscript.com",
    href: "mailto:hello@s2tscript.com",
    iconColor: "text-blue-400 icon-glow-blue",
    iconBg: "bg-blue-500/15 border-blue-500/25",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 700 000 000",
    href: "tel:+254700000000",
    iconColor: "text-violet-400 icon-glow-violet",
    iconBg: "bg-violet-500/15 border-violet-500/25",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Nairobi, Kenya",
    href: null,
    iconColor: "text-cyan-400 icon-glow-cyan",
    iconBg: "bg-cyan-500/15 border-cyan-500/25",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri, 8am–6pm EAT",
    href: null,
    iconColor: "text-emerald-400 icon-glow-emerald",
    iconBg: "bg-emerald-500/15 border-emerald-500/25",
  },
];

const inputClass =
  "w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-28 relative">
      <div className="glow-separator" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/07 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center text-xs font-bold text-blue-400/80 uppercase tracking-[0.22em] mb-5 px-3.5 py-1.5 glass rounded-full">
            Contact
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Get in touch{" "}
            <span className="gradient-text">with our team</span>
          </h2>
          <p className="text-white/45 text-lg">
            Have a question or ready to start a project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-3xl p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7 text-emerald-400 icon-glow-emerald" />
                  </div>
                  <h3 className="font-syne text-xl font-semibold text-white mb-2">
                    Message sent!
                  </h3>
                  <p className="text-white/45 text-sm">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Jane Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="How can we help?"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-glow w-full py-4 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="glass-card rounded-3xl p-6">
              <h3 className="font-syne font-semibold text-white mb-5">
                Contact Information
              </h3>
              <ul className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href, iconColor, iconBg }) => (
                  <li key={label} className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-xl ${iconBg} border flex items-center justify-center shrink-0`}>
                      <Icon className={`w-4 h-4 ${iconColor}`} />
                    </div>
                    <div>
                      <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest mb-0.5">
                        {label}
                      </div>
                      {href ? (
                        <a href={href} className="text-sm text-white/60 hover:text-white transition-colors font-medium">
                          {value}
                        </a>
                      ) : (
                        <div className="text-sm text-white/60 font-medium">{value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/12 rounded-full blur-[40px] pointer-events-none" />
              <div className="relative">
                <h4 className="font-syne font-semibold text-white mb-2">Urgent project?</h4>
                <p className="text-sm text-white/45 mb-5 leading-relaxed">
                  We offer same-day turnaround for rush projects. Get in touch and
                  we'll prioritize your order.
                </p>
                <a
                  href="mailto:rush@s2tscript.com"
                  className="btn-glass text-sm px-5 py-2.5 rounded-xl inline-block font-semibold"
                >
                  Email Rush Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glow-separator mt-28" />
    </section>
  );
}
