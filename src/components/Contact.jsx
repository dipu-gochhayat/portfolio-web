import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const rawEmail = portfolioData.personal?.email || portfolioData.personal?.socials?.email || "alex.morgan.dev@example.com";
  const cleanEmail = rawEmail.replace('mailto:', '');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(cleanEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 relative bg-[#030303] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="section-label">
          <span>05 / Start A Conversation</span>
          <span>Open For Opportunities</span>
        </div>

        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.08]">
            Let's build something<br />
            <span className="font-serif-italic text-zinc-300 font-normal">
              meaningful.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal">
            Whether you're looking for an engineering intern, exploring a hackathon collaboration, or want to discuss backend architecture and cybersecurity, my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Email Card */}
            <div className="p-8 rounded-2xl bg-[#080808] border border-white/[0.08] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-400">
                <span>Direct Contact</span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <a
                  href={`mailto:${cleanEmail}`}
                  className="text-lg sm:text-xl font-medium text-white hover:text-zinc-300 transition-colors break-all"
                >
                  {cleanEmail}
                </a>
              </div>
            </div>

            {/* Location & Status */}
            <div className="p-8 rounded-2xl bg-[#080808] border border-white/[0.08] space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Location & Status
              </div>
              <div className="space-y-1">
                <div className="text-base font-medium text-white">
                  {portfolioData.personal.location}
                </div>
                <div className="text-xs text-zinc-400">
                  Nalanda Institute of Technology, Bhubaneswar
                </div>
              </div>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="live-dot" />
                <span>Available for Opportunities</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 rounded-2xl bg-[#080808] border border-white/[0.08] space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Social Profiles
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-zinc-300">
                <a
                  href={portfolioData.personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub ↗</span>
                </a>
                <a
                  href={portfolioData.personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn ↗</span>
                </a>
                <a
                  href={portfolioData.personal.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <TwitterIcon className="w-4 h-4" />
                  <span>Twitter ↗</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-[#080808] border border-white/[0.08]">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Message Transmitted.
                </h3>
                <p className="text-zinc-400 text-sm max-w-sm mx-auto">
                  Thank you for reaching out. I'll review your note and respond promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Alex Sharma"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Opportunity / Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or role..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                {error && (
                  <div className="text-rose-400 text-xs font-mono">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-xs font-mono uppercase tracking-widest text-black bg-white hover:bg-zinc-200 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Transmitting...</span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Send Message</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
