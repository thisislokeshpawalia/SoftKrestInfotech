import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata = {
  title: "EduGrow - School Digital Partnership Program",
  description: "Empowering schools with technology & digital growth. SoftKrestInfotech is your AI-powered digital growth partner for modern schools.",
};

export default function EduGrowPage() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-bg-dark"
        style={{ backgroundImage: "url('/images/edugrow-hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-bg-dark/85 z-0" />
        <div className="absolute inset-0 z-0 mix-blend-overlay">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent opacity-40 blur-[100px]" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <SectionReveal>
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6 border border-accent/20">
              Introducing EduGrow
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
              Empowering Schools with <br className="hidden md:block" />
              <span className="gradient-text">Technology & Digital Growth</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              AI-powered digital growth partner for modern schools. We simplify admissions, streamline operations, and build your digital presence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                Book a Free Digital Audit
              </Link>
              <a 
                href="/brochures/SoftKrest_Infotech_School_Deck_Print.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-white/20 text-white hover:bg-white/10 w-full sm:w-auto flex items-center justify-center gap-2"
                download
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Brochure
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-bg-light">
        <div className="container-custom">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                Common Digital Challenges
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Schools already do great work. The challenge is making that work visible and easy to access for parents.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Outdated Website", desc: "Information may be difficult to find, update or use on mobile." },
              { title: "Admission Enquiries", desc: "Parents may not have a simple enquiry or callback process." },
              { title: "Inactive Social Media", desc: "School achievements and activities may not be consistently showcased." },
              { title: "Manual Processes", desc: "Attendance, performance and communication can remain fragmented." },
              { title: "Disconnected Vendors", desc: "Website, content and software needs may be handled separately." },
            ].map((challenge, i) => (
              <SectionReveal key={i} delay={i * 100}>
                <div className="bg-white p-6 rounded-2xl border border-border h-full text-center hover:border-accent/30 transition-colors">
                  <h3 className="font-bold text-text-primary mb-3">{challenge.title}</h3>
                  <p className="text-sm text-text-secondary">{challenge.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section className="py-24 bg-white relative">
        <div className="container-custom">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                The Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                One Digital Partner for Your School
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Three connected pillars — starting with what the school needs today.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionReveal delay={100}>
              <div className="bg-blue-600 rounded-2xl p-8 text-white h-full transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6">01. Digital Presence</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><span className="text-blue-200">✓</span> Website</li>
                  <li className="flex items-center gap-3"><span className="text-blue-200">✓</span> Admission Enquiry</li>
                  <li className="flex items-center gap-3"><span className="text-blue-200">✓</span> SEO & Google</li>
                  <li className="flex items-center gap-3"><span className="text-blue-200">✓</span> WhatsApp / Contact</li>
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <div className="bg-teal-600 rounded-2xl p-8 text-white h-full transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6">02. Digital Operations</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><span className="text-teal-200">✓</span> Dashboard</li>
                  <li className="flex items-center gap-3"><span className="text-teal-200">✓</span> Attendance</li>
                  <li className="flex items-center gap-3"><span className="text-teal-200">✓</span> Performance</li>
                  <li className="flex items-center gap-3"><span className="text-teal-200">✓</span> Parent Communication</li>
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={300}>
              <div className="bg-green-700 rounded-2xl p-8 text-white h-full transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6">03. Digital Growth</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><span className="text-green-200">✓</span> Photography</li>
                  <li className="flex items-center gap-3"><span className="text-green-200">✓</span> Content & Social Media</li>
                  <li className="flex items-center gap-3"><span className="text-green-200">✓</span> Admission Campaigns</li>
                  <li className="flex items-center gap-3"><span className="text-green-200">✓</span> Lead Tracking</li>
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-bg-light">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <SectionReveal>
                <span className="inline-block px-4 py-1.5 bg-ai-accent/10 text-ai-accent rounded-full text-sm font-semibold mb-4">
                  AI-Powered by Design
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-6">
                  Smart tools introduced only when the school is ready for them.
                </h2>
                <div className="space-y-6 mt-8">
                  {[
                    { title: "Admission Enquiry Chatbot", desc: "Answers parents' common questions and captures enquiries on website and WhatsApp." },
                    { title: "Automated Follow-ups", desc: "Reminders and callback workflows so no enquiry is forgotten." },
                    { title: "Content Assistance", desc: "Faster captions, post ideas and admission creatives from school events." },
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-text-primary mb-1">{feature.title}</h4>
                        <p className="text-text-secondary">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>
            <div className="lg:w-1/2">
              <SectionReveal delay={200}>
                <div className="bg-white p-8 rounded-3xl border border-border shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 text-center text-text-primary">Getting Started is Simple</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <h4 className="font-bold text-blue-900">Step 1: Free Digital Audit</h4>
                      <p className="text-sm text-blue-800 mt-1">Review of website, Google presence, and enquiry process.</p>
                    </div>
                    <div className="p-4 bg-teal-50 rounded-xl border border-teal-100">
                      <h4 className="font-bold text-teal-900">Step 2: Digital Presence Starter</h4>
                      <p className="text-sm text-teal-800 mt-1">Mobile-first website, enquiry form, WhatsApp, and basic SEO.</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                      <h4 className="font-bold text-green-900">Step 3: Growth Partner</h4>
                      <p className="text-sm text-green-800 mt-1">Social media, admission campaigns, and dashboards.</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-bg-dark text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5" />
        <div className="container-custom relative z-10">
          <SectionReveal>
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
              Let's Build Your School's Digital Future
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
              Start with a professional digital presence. Grow with content and admissions. Digitize school operations step-by-step.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Book a Free Digital Audit
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
