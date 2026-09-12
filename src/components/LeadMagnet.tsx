"use client";

import { useState, useEffect } from "react";

export default function LeadMagnet() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed
    const dismissed = sessionStorage.getItem("leadMagnetDismissed");
    if (dismissed) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000); // Show after 30 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem("leadMagnetDismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-scale-in">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
        >
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Gradient header */}
        <div className="bg-gradient-to-r from-accent to-ai-accent p-8 text-center text-white">
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-2">
            Free Website Audit
          </h3>
          <p className="text-white/90 text-sm">
            Get a detailed analysis of your website&apos;s performance, SEO, and
            conversion potential — absolutely free!
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
              <button
                type="submit"
                className="w-full btn-primary py-3.5 text-center rounded-xl text-sm"
              >
                Get My Free Audit →
              </button>
              <p className="text-xs text-center text-gray-400">
                No spam, ever. We respect your privacy.
              </p>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="text-4xl mb-3">✅</div>
              <h4 className="font-semibold text-text-primary mb-1">
                Thank you!
              </h4>
              <p className="text-sm text-text-secondary">
                We&apos;ll send your free audit within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
