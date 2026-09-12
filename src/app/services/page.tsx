import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import SectionReveal from "@/components/SectionReveal";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore SoftKrestInfotech's full suite of software services — Web Development, App Development, SEO, Hosting, Custom Software, and AI Solutions.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />
        <div className="container-custom relative z-10">
          <SectionReveal>
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-heading)] mb-6">
                Solutions Tailored to{" "}
                <span className="gradient-text">Your Success</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                We offer a comprehensive suite of software services designed to
                address every aspect of your digital transformation journey.
              </p>
            </div>
          </SectionReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-light to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-bg-light">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <SectionReveal key={service.slug}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-6`}
                    >
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-3 mb-8">
                      {service.features.slice(0, 5).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-text-secondary"
                        >
                          <svg
                            className="w-5 h-5 text-ai-accent shrink-0 mt-0.5"
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
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services/${service.slug}`}
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4"
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
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div
                      className={`rounded-2xl bg-gradient-to-br ${service.color} p-8 relative overflow-hidden min-h-[300px] flex items-center justify-center`}
                    >
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white rounded-full" />
                        <div className="absolute bottom-4 left-4 w-24 h-24 border-2 border-white rounded-lg rotate-45" />
                      </div>
                      <div className="relative z-10 text-center">
                        <div className="text-7xl mb-4">{service.icon}</div>
                        <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-heading)]">
                          {service.title}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                          {service.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                How We Work
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Our proven 4-step process ensures every project is delivered on
                time, within budget, and exceeds expectations.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discover",
                icon: "🔍",
                desc: "We dive deep into your requirements, audience, and goals to define the perfect strategy.",
              },
              {
                step: "02",
                title: "Design",
                icon: "🎨",
                desc: "Our designers create stunning, user-centric interfaces that align with your brand identity.",
              },
              {
                step: "03",
                title: "Develop",
                icon: "⚡",
                desc: "Our engineers build robust, scalable solutions using cutting-edge technology stacks.",
              },
              {
                step: "04",
                title: "Deploy",
                icon: "🚀",
                desc: "We launch, monitor, and continuously optimize for peak performance and results.",
              },
            ].map((item, index) => (
              <SectionReveal key={item.step} delay={index * 150}>
                <div className="relative text-center">
                  {/* Connector line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent/30 to-ai-accent/30" />
                  )}

                  <div className="relative z-10">
                    <div className="w-24 h-24 rounded-2xl bg-bg-light border border-border mx-auto flex items-center justify-center text-4xl mb-6 group-hover:border-accent/30 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-accent text-sm font-bold font-[family-name:var(--font-code)]">
                      Step {item.step}
                    </span>
                    <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-text-primary mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm">{item.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
