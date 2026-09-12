import Link from "next/link";
import { services } from "@/data/services";
import { projects } from "@/data/portfolio";
import StatsBar from "@/components/StatsBar";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTABand from "@/components/CTABand";
import LeadMagnet from "@/components/LeadMagnet";
import SectionReveal from "@/components/SectionReveal";
import HeroSection from "@/components/HeroSection";

const techLogos = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", "Flutter",
  "AWS", "MongoDB", "PostgreSQL", "Docker", "TensorFlow", "Tailwind CSS",
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview */}
      <section className="py-24 bg-bg-light relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="container-custom">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                Solutions That Drive Growth
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                We offer a comprehensive suite of software solutions designed to
                take your business to the next level.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <SectionReveal key={service.slug} delay={index * 100}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block bg-white rounded-2xl p-8 border border-border hover:border-accent/30 card-hover h-full"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-text-primary mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
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
                  </span>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-24 bg-white relative">
        <div className="container-custom">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-ai-accent/10 text-ai-accent rounded-full text-sm font-semibold mb-4">
                Our Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                Featured Projects
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Real-world solutions that have made a difference for our
                clients.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, index) => (
              <SectionReveal key={project.slug} delay={index * 150}>
                <div className="group bg-bg-light rounded-2xl overflow-hidden border border-border hover:border-accent/30 card-hover">
                  {/* Project Visual */}
                  <div
                    className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/20 text-8xl font-bold font-[family-name:var(--font-heading)]">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {project.industry}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-text-primary mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-accent/5 text-accent text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all"
                      >
                        View Details
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
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-text-light hover:text-accent transition-colors"
                        >
                          Live Site ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal>
            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 btn-primary"
              >
                View All Projects
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
          </SectionReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Tech Stack
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-text-primary">
                Technologies We Master
              </h2>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="flex flex-wrap justify-center gap-4">
              {techLogos.map((tech, index) => (
                <div
                  key={tech}
                  className="px-6 py-3 bg-bg-light rounded-xl border border-border hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-sm font-medium text-text-secondary group-hover:text-accent transition-colors font-[family-name:var(--font-code)]">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand />

      {/* Lead Magnet Popup */}
      <LeadMagnet />
    </>
  );
}
