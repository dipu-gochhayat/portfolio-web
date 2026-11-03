import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const studentFaqs = [
  {
    question: "What roles and opportunities are you currently seeking?",
    answer: "I am actively seeking Software Development Internships, Summer Trainee roles, and collaborative open-source or hackathon opportunities where I can apply Java, backend architecture, and cybersecurity concepts."
  },
  {
    question: "What is your primary development stack and core focus?",
    answer: "My core programming language is Java along with foundational C. I specialize in Object-Oriented Programming (OOP), Data Structures & Algorithms, relational databases (MySQL, Firebase), and Android mobile application engineering."
  },
  {
    question: "How do you approach hackathons and rapid project development?",
    answer: "I prioritize identifying real-world problem statements, defining clear architectural boundaries (e.g. Android client with Firebase backend or Python OSINT service), and ensuring responsive, reliable user experiences under tight deadlines."
  },
  {
    question: "How can recruiters or teammates get in touch with you?",
    answer: "Feel free to reach out directly through the contact form below or drop an email. I typically respond within 24 hours!"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            Common Inquiries
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-400">
            Quick answers about my availability, coursework, and technical interests.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {studentFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-[#0c1426]/75 border border-slate-800 backdrop-blur-md overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-semibold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
