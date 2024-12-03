"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const COOLDOWN_HOURS = 2; // Hours to wait between submissions
const COOLDOWN_MS = COOLDOWN_HOURS * 60 * 60 * 1000; // Convert hours to milliseconds

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [cooldownRemaining, setCooldownRemaining] = useState<number>(0);

  useEffect(() => {
    // Check cooldown on component mount and every minute
    const checkCooldown = () => {
      const lastSubmission = localStorage.getItem('lastFormSubmission');
      if (lastSubmission) {
        const timeSinceLastSubmission = Date.now() - parseInt(lastSubmission);
        const remainingTime = Math.max(0, COOLDOWN_MS - timeSinceLastSubmission);
        setCooldownRemaining(remainingTime);
      }
    };

    checkCooldown();
    const interval = setInterval(checkCooldown, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const formatCooldownTime = (ms: number): string => {
    const hours = Math.floor(ms / (60 * 60 * 1000));
    const minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
    return `${hours}h ${minutes}m`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if user is in cooldown period
    const lastSubmission = localStorage.getItem('lastFormSubmission');
    if (lastSubmission) {
      const timeSinceLastSubmission = Date.now() - parseInt(lastSubmission);
      if (timeSinceLastSubmission < COOLDOWN_MS) {
        setSubmitStatus('error');
        return;
      }
    }

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
        // Store submission timestamp
        localStorage.setItem('lastFormSubmission', Date.now().toString());
        // Update cooldown
        setCooldownRemaining(COOLDOWN_MS);
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
            <div className="text-sm text-yellow-500/80">
              Note: You can submit another message in {formatCooldownTime(cooldownRemaining)}
            </div>
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
            {cooldownRemaining > 0 && (
              <div className="absolute top-0 left-0 right-0 bg-yellow-500/10 text-center py-2 rounded-t-3xl">
                You can submit another message in {formatCooldownTime(cooldownRemaining)}
              </div>
            )}
            
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
                    disabled={cooldownRemaining > 0}
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    className="w-full px-4 py-3 bg-white/5 rounded-full border border-white/10 focus:border-yellow-500/50 focus:outline-none focus:ring-1 focus:ring-yellow-500/50 transition-colors"
                    disabled={cooldownRemaining > 0}
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
                    disabled={cooldownRemaining > 0}
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    required
                    className="w-full px-4 py-3 bg-white/5 rounded-full border border-white/10 focus:border-yellow-500/50 focus:outline-none focus:ring-1 focus:ring-yellow-500/50 transition-colors"
                    disabled={cooldownRemaining > 0}
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
                  disabled={cooldownRemaining > 0}
                />
              </div>

              {submitStatus === 'error' && cooldownRemaining > 0 ? (
                <div className="text-red-500 text-sm">
                  Please wait {formatCooldownTime(cooldownRemaining)} before submitting another message.
                </div>
              ) : submitStatus === 'error' ? (
                <div className="text-red-500 text-sm">
                  Something went wrong. Please try again.
                </div>
              ) : null}

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || cooldownRemaining > 0}
                  className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : cooldownRemaining > 0 ? `Wait ${formatCooldownTime(cooldownRemaining)}` : 'Send'}
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
