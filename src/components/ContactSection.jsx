import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { portfolioData } from "../data/portfolioData";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { email, location, socials } = portfolioData.personal;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission and construct mailto link
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");

      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setSubmitted(false);
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 bg-background/50" ref={ref}>
      <div className="section-container">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle mx-auto">
            I'm open to opportunities, collaboration, and conversations about software development and technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Contact Info & Socials */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Start a Conversation
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Whether you're recruiting for software development internships, exploring backend collaboration, or want to discuss hackathon projects, my inbox is always open.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <motion.a
                href={`mailto:${email}`}
                className="flex items-center gap-4 glass-card p-4 sm:p-5 rounded-2xl hover:border-primary/50 transition-colors group cursor-pointer"
                whileHover={{ x: 6 }}
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(100,255,218,0.2)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-muted-foreground">Direct Email</p>
                  <p className="text-foreground font-semibold truncate group-hover:text-primary transition-colors text-sm sm:text-base">
                    {email}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>

              <motion.div
                className="flex items-center gap-4 glass-card p-4 sm:p-5 rounded-2xl border border-white/10"
                whileHover={{ x: 6 }}
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground">Location</p>
                  <p className="text-foreground font-semibold text-sm sm:text-base">
                    {location}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Media Links */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Professional Networks:
              </h4>
              <div className="flex gap-4">
                <motion.a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3 glass-card-hover rounded-xl text-muted-foreground hover:text-primary transition-colors text-sm font-semibold"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GithubIcon className="w-5 h-5 text-primary" />
                  <span>GitHub</span>
                </motion.a>

                <motion.a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3 glass-card-hover rounded-xl text-muted-foreground hover:text-primary transition-colors text-sm font-semibold"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LinkedinIcon className="w-5 h-5 text-primary" />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-foreground font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/60 border border-white/10 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/60"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-foreground font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/60 border border-white/10 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/60"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-foreground font-medium">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background/60 border border-white/10 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/60 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="w-full glow-button text-primary-foreground font-semibold py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer text-sm uppercase tracking-wider font-mono disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : submitted ? (
                  <span className="flex items-center gap-2 text-white">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Message Prepared!</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </span>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
