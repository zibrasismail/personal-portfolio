"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_GET_FORM_KEY!, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        console.error('Form submission failed:', await response.text());
        setSubmitStatus('error');
      }
    } catch (err: unknown) {
      console.error('Form submission error:', err instanceof Error ? err.message : 'Unknown error');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center space-y-6"
          >
            <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-8 h-8 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">Thank You!</h2>
            <p className="text-gray-400">
              I appreciate you reaching out. I&apos;ll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full transition-colors"
            >
              <span>Send Another Message</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Contact <span className="text-yellow-500">Me</span>
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative z-10"
          >
            <form 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Honeypot field to prevent spam */}
              <input 
                type="hidden" 
                name="_gotcha" 
                style={{ display: 'none !important' }} 
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    required
                    className="w-full px-4 py-3 bg-white/5 rounded-full border border-white/10 focus:border-yellow-500/50 focus:outline-none focus:ring-1 focus:ring-yellow-500/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    className="w-full px-4 py-3 bg-white/5 rounded-full border border-white/10 focus:border-yellow-500/50 focus:outline-none focus:ring-1 focus:ring-yellow-500/50 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile No."
                    className="w-full px-4 py-3 bg-white/5 rounded-full border border-white/10 focus:border-yellow-500/50 focus:outline-none focus:ring-1 focus:ring-yellow-500/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    required
                    className="w-full px-4 py-3 bg-white/5 rounded-full border border-white/10 focus:border-yellow-500/50 focus:outline-none focus:ring-1 focus:ring-yellow-500/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <textarea
                  name="message"
                  placeholder="Message *"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 rounded-2xl border border-white/10 focus:border-yellow-500/50 focus:outline-none focus:ring-1 focus:ring-yellow-500/50 transition-colors resize-none"
                />
              </div>

              {submitStatus === 'error' && (
                <div className="text-red-500 text-sm">
                  Something went wrong. Please try again.
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
