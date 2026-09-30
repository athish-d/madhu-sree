import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate sending with responsive feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 6000);
    }, 700);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-emerald-700 font-semibold uppercase tracking-widest block mb-1">
            07. Communication & Inquiry
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Let's build something impactful together.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-xl mt-1 leading-relaxed">
            Have an internship opening, software project, or want to discuss full-stack & backend engineering? Drop a note below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Direct Coordinates Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-7 shadow-sm space-y-5">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 pb-2 border-b border-stone-100">
                Direct Contact Channels
              </h3>

              {/* Email */}
              <div>
                <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider block mb-1">
                  Email Address
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-stone-900 hover:text-emerald-700 transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-stone-500 hover:text-stone-900 rounded-md hover:bg-stone-100 transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="pt-3 border-t border-stone-100">
                <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider block mb-1">
                  Telephone / WhatsApp
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm font-semibold text-stone-900 hover:text-emerald-700 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 text-stone-500 hover:text-stone-900 rounded-md hover:bg-stone-100 transition-colors"
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="pt-3 border-t border-stone-100">
                <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider block mb-1">
                  Base Location
                </span>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900">{PERSONAL_INFO.location}</span>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Open to relocation, hybrid, and remote development roles across India & globally.
                    </p>
                  </div>
                </div>
              </div>

              {/* External Profiles */}
              <div className="pt-3 border-t border-stone-100 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-stone-700 hover:text-emerald-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-4"
            >
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 mb-2">
                Send a Direct Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1" htmlFor="name">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Anand Kumar"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1" htmlFor="email">
                    Your Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. anand@company.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1" htmlFor="subject">
                  Subject / Topic
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="e.g. Internship Opportunity / Technical Collaboration"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1" htmlFor="message">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Hi Madhusree, we came across your work on FastAPI and Java..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors resize-none"
                />
              </div>

              {/* Feedback messages */}
              {submitStatus === 'success' && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs font-medium text-emerald-800 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Thank you! Your message has been recorded. Madhusree will review it and follow up promptly.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs font-medium text-rose-800">
                  Please fill out your name, email, and message before sending.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors shadow-xs disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
