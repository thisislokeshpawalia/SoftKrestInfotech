import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for SoftKrestInfotech.com — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 bg-gradient-hero">
        <div className="container-custom relative z-10">
          <h1 className="text-4xl font-bold text-white font-[family-name:var(--font-heading)] mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-300">Last updated: September 2026</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-light to-transparent" />
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 border border-border prose prose-sm prose-gray">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
              1. Information We Collect
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              We collect information you provide directly to us, including your name, email address,
              phone number, and any other information you choose to provide when you contact us
              through our website, fill out a form, or communicate with us via email or WhatsApp.
            </p>

            <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-text-secondary mb-4 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="text-text-secondary mb-6 space-y-2 list-disc pl-5">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you project proposals, quotes, and related communications</li>
              <li>Improve our website and services</li>
              <li>Send periodic newsletters (if you opt-in)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
              3. Information Sharing
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties.
              This does not include trusted partners who assist us in operating our website or
              conducting our business, as long as those parties agree to keep this information
              confidential.
            </p>

            <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
              4. Data Security
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              We implement appropriate security measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no
              method of transmission over the Internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>

            <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
              5. Cookies & Analytics
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your
              browsing experience and collect analytics data. We use Google Analytics to understand
              how visitors interact with our website. You can control cookies through your browser
              settings.
            </p>

            <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
              6. Third-Party Links
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for
              the privacy practices or content of these external sites. We encourage you to review
              the privacy policies of any third-party site you visit.
            </p>

            <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
              7. Your Rights
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              You have the right to access, correct, or delete your personal information.
              You may also opt-out of receiving promotional communications at any time by
              contacting us or using the unsubscribe link in our emails.
            </p>

            <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
              8. Changes to This Policy
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted
              on this page with an updated revision date. We encourage you to review this policy
              periodically.
            </p>

            <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
              9. Contact Us
            </h2>
            <p className="text-text-secondary leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:contact@softkrestinfotech.com" className="text-accent hover:underline">
                contact@softkrestinfotech.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
