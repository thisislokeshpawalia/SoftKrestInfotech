import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import SectionReveal from "@/components/SectionReveal";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} Services`,
    description: service.description,
  };
}

// SVG icons map for service pages
function ServiceIconLarge({ iconName }: { iconName: string }) {
  const icons: Record<string, React.ReactNode> = {
    web: (
      <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    app: (
      <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15.75h3" />
      </svg>
    ),
    seo: (
      <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    hosting: (
      <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    software: (
      <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    ai: (
      <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  };
  return <>{icons[iconName] ?? icons["web"]}</>;
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "SoftKrestInfotech",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />
        <div className="container-custom relative z-10">
          <SectionReveal>
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Services
                </Link>
                <span>/</span>
                <span className="text-accent">{service.title}</span>
              </nav>

              <div
                className={`w-18 h-18 w-[4.5rem] h-[4.5rem] rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
              >
                <ServiceIconLarge iconName={service.iconName} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-heading)] mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {service.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 btn-primary"
              >
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </SectionReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-light to-transparent" />
      </section>

      {/* Features */}
      <section className="py-24 bg-bg-light">
        <div className="container-custom">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                What&apos;s Included
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Comprehensive {service.title.toLowerCase()} services tailored to
                your business needs.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.features.map((feature, index) => (
              <SectionReveal key={feature} delay={index * 80}>
                <div className="flex items-start gap-4 bg-white rounded-xl p-6 border border-border card-hover">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-text-primary font-medium text-sm">
                    {feature}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                Why Us
              </span>
              <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                Why Choose SoftKrestInfotech for {service.shortTitle}?
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <SectionReveal key={benefit.title} delay={index * 120}>
                <div className="text-center p-8 bg-bg-light rounded-2xl border border-border hover:border-accent/30 card-hover h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} mx-auto flex items-center justify-center mb-5`}>
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-bg-light">
        <div className="container-custom">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-ai-accent/10 text-ai-accent rounded-full text-sm font-semibold mb-4">
                Our Process
              </span>
              <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                How It Works
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {service.process.map((step, index) => (
              <SectionReveal key={step.step} delay={index * 150}>
                <div className="relative text-center">
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent/30 to-ai-accent/30" />
                  )}
                  <div
                    className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mx-auto flex items-center justify-center text-white text-xl font-bold font-[family-name:var(--font-heading)] mb-4`}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {step.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Pricing
              </span>
              <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                Transparent Pricing
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                No hidden fees. We work with budgets of all sizes — from startups to enterprises.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {service.pricing.map((plan, index) => (
              <SectionReveal key={plan.label} delay={index * 120}>
                <div className={`relative rounded-2xl border p-8 h-full flex flex-col ${index === 1 ? `border-accent/50 bg-accent/5 shadow-xl shadow-accent/10` : `border-border bg-bg-light`}`}>
                  {index === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-text-primary mb-2">
                      {plan.label}
                    </h3>
                    <p className={`text-2xl font-bold font-[family-name:var(--font-heading)] ${index === 1 ? "text-accent" : "text-text-primary"}`}>
                      {plan.description}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-text-secondary">
                        <svg className="w-5 h-5 text-ai-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${index === 1 ? "bg-accent text-white hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-lg" : "border border-border text-text-primary hover:border-accent hover:text-accent"}`}
                  >
                    Get Started
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal>
            <p className="text-center text-sm text-text-light mt-8">
              * All prices are indicative and may vary based on project complexity. Contact us for a custom quote.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-bg-dark">
        <div className="container-custom">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
                Technologies We Use
              </h2>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {service.technologies.map((tech) => (
                <div
                  key={tech}
                  className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                >
                  <span className="text-sm font-medium text-gray-300 font-[family-name:var(--font-code)]">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-bg-light">
        <div className="container-custom">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-ai-accent/10 text-ai-accent rounded-full text-sm font-semibold mb-4">
                FAQs
              </span>
              <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                Frequently Asked Questions
              </h2>
            </div>
          </SectionReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {service.faqs.map((faq, index) => (
              <SectionReveal key={faq.question} delay={index * 80}>
                <details className="group bg-white border border-border rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                    <span className="font-semibold text-text-primary text-sm md:text-base font-[family-name:var(--font-heading)]">
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-open:bg-accent/20 transition-colors">
                      <svg
                        className="w-4 h-4 text-accent transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-5 pt-2 text-text-secondary text-sm leading-relaxed border-t border-border">
                    {faq.answer}
                  </div>
                </details>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%]">
        <div className="container-custom text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-heading)] mb-6">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss your requirements and build something
              extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Request This Service
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                View Related Projects
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
