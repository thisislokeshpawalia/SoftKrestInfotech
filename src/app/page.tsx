import Link from "next/link";
import { services } from "@/data/services";
import { projects } from "@/data/portfolio";
import StatsBar from "@/components/StatsBar";
import CTABand from "@/components/CTABand";
import LeadMagnet from "@/components/LeadMagnet";
import SectionReveal from "@/components/SectionReveal";
import HeroSection from "@/components/HeroSection";

const techLogos = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", "Flutter",
  "AWS", "MongoDB", "PostgreSQL", "Docker", "TensorFlow", "Tailwind CSS",
];

// SVG icons for each service
function ServiceIcon({ iconName, className }: { iconName: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    web: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    app: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15.75h3" />
      </svg>
    ),
    seo: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    hosting: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    software: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    ai: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  };
  return <>{icons[iconName] ?? icons["web"]}</>;
}

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
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <ServiceIcon iconName={service.iconName} className="w-7 h-7 text-white" />
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
                Real-world solutions built for our clients — live and running.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <SectionReveal key={project.slug} delay={index * 150}>
                <div className="group bg-bg-light rounded-2xl overflow-hidden border border-border hover:border-accent/30 card-hover">
                  {/* Browser Frame Preview */}
                  <div className="relative bg-gray-900 overflow-hidden" style={{ height: "260px" }}>
                    {/* Browser chrome bar */}
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 border-b border-gray-700 relative z-10">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="flex-1 mx-3 flex items-center gap-2 bg-gray-700/50 rounded-md px-3 py-1">
                        <svg className="w-3 h-3 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-xs text-gray-300 font-mono truncate">{project.url}</span>
                      </div>
                    </div>
                    {/* Iframe preview */}
                    <div className="relative" style={{ height: "220px" }}>
                      <iframe
                        src={project.screenshotUrl}
                        title={`${project.title} website preview`}
                        className="w-full h-full border-0"
                        style={{
                          transform: "scale(0.7)",
                          transformOrigin: "top left",
                          width: "143%",
                          height: "143%",
                          pointerEvents: "none",
                        }}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />
                      {/* Overlay to prevent iframe interaction */}
                      <div className="absolute inset-0 z-10" />
                    </div>
                    {/* Industry badge */}
                    <div className="absolute bottom-3 left-4 z-20">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full font-medium">
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
