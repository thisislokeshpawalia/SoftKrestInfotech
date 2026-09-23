import type { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SoftKrestInfotech — our mission, vision, values, and the talented team behind our innovative software solutions.",
};

const values = [
  {
    icon: "🎯",
    title: "Client-Centric",
    description:
      "Every decision we make starts with understanding our client's needs. Your success is our success.",
  },
  {
    icon: "💡",
    title: "Innovation First",
    description:
      "We stay ahead of technology trends to deliver solutions that are modern, scalable, and future-proof.",
  },
  {
    icon: "🤝",
    title: "Transparency",
    description:
      "Open communication, honest timelines, and clear pricing. No surprises, just results.",
  },
  {
    icon: "⚡",
    title: "Excellence",
    description:
      "We take pride in delivering pixel-perfect, high-quality work that exceeds expectations.",
  },
];

const expertise = [
  { name: "Frontend", technologies: ["React", "Next.js", "Vue.js", "Flutter"], level: 95 },
  { name: "Backend", technologies: ["Node.js", "Python", "Java", "Go"], level: 90 },
  { name: "Mobile", technologies: ["React Native", "Flutter", "Swift", "Kotlin"], level: 88 },
  { name: "AI/ML", technologies: ["TensorFlow", "OpenAI", "LangChain", "NLP"], level: 85 },
  { name: "Cloud", technologies: ["AWS", "Vercel", "Docker", "Kubernetes"], level: 92 },
  { name: "Database", technologies: ["PostgreSQL", "MongoDB", "Redis", "Firebase"], level: 90 },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />
        <div className="container-custom relative z-10">
          <SectionReveal>
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-heading)] mb-6">
                Building the Future of{" "}
                <span className="gradient-text">Digital Solutions</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                SoftKrestInfotech is a full-service software solutions company
                dedicated to helping businesses harness the power of technology.
                We combine technical excellence with creative innovation to
                deliver solutions that make a real impact.
              </p>
            </div>
          </SectionReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-light to-transparent" />
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-bg-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <SectionReveal>
              <div className="bg-white rounded-2xl p-8 border border-border h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center text-2xl mb-6">
                  🎯
                </div>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                  Our Mission
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  To empower businesses of all sizes with intelligent,
                  high-quality software solutions that drive growth, efficiency,
                  and digital transformation. We believe every great idea
                  deserves world-class technology to bring it to life.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={150}>
              <div className="bg-white rounded-2xl p-8 border border-border h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ai-accent to-teal-500 flex items-center justify-center text-2xl mb-6">
                  🔭
                </div>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                  Our Vision
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  To become a globally recognized software partner known for
                  innovation, reliability, and delivering transformative digital
                  experiences. We envision a world where technology amplifies
                  human potential and business success.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-6">
                Why SoftKrestInfotech Exists
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Founded with a passion for technology and a commitment to
                quality, SoftKrestInfotech was born from the belief that
                businesses in India and beyond deserve access to world-class
                software development. Too many companies struggle with unreliable
                developers, missed deadlines, and subpar quality.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We set out to change that. Our team combines deep technical
                expertise with genuine care for our clients&apos; success. From
                healthcare platforms like CareSeva to educational websites like
                IshaKulam, every project we take on gets our full dedication and
                best practices. We don&apos;t just write code — we build
                partnerships that drive lasting results.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-bg-light">
        <div className="container-custom">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-ai-accent/10 text-ai-accent rounded-full text-sm font-semibold mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary">
                What Drives Us
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <SectionReveal key={value.title} delay={index * 100}>
                <div className="bg-white rounded-2xl p-6 border border-border card-hover text-center h-full">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {value.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Expertise */}
      <section className="py-24 bg-bg-dark">
        <div className="container-custom">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
                Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
                Technology Mastery
              </h2>
            </div>
          </SectionReveal>

          <div className="max-w-3xl mx-auto space-y-8">
            {expertise.map((skill, index) => (
              <SectionReveal key={skill.name} delay={index * 100}>
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-white font-semibold">
                      {skill.name}
                    </h3>
                    <span className="text-accent text-sm font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-ai-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-gray-400 font-[family-name:var(--font-code)]"
                      >
                        {tech}
                      </span>
                    ))}
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
