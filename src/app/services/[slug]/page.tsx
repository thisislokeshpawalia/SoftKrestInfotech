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
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-6`}
              >
                {service.icon}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-heading)] mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                {service.description}
              </p>
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

      {/* Process */}
      <section className="py-24 bg-white">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
