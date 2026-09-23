"use client";

import { useState } from "react";
import { projects, categories } from "@/data/portfolio";
import SectionReveal from "@/components/SectionReveal";
import CTABand from "@/components/CTABand";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />
        <div className="container-custom relative z-10">
          <SectionReveal>
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                Our Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-heading)] mb-6">
                Projects That Speak{" "}
                <span className="gradient-text">For Themselves</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Explore our portfolio of real-world projects that have helped
                businesses grow, modernize, and succeed.
              </p>
            </div>
          </SectionReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-light to-transparent" />
      </section>

      {/* Filter + Grid */}
      <section className="py-24 bg-bg-light">
        <div className="container-custom">
          {/* Category Filter */}
          <SectionReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-accent text-white shadow-lg shadow-accent/30"
                      : "bg-white text-text-secondary border border-border hover:border-accent/30 hover:text-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((project, index) => (
              <SectionReveal key={project.slug} delay={index * 100}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-accent/30 card-hover">
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
                      {/* Overlay + Hover CTA */}
                      <div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-5 py-2.5 bg-white text-text-primary rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors shadow-lg"
                            >
                              Visit Site ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Industry badge */}
                    <div className="absolute bottom-3 left-4 z-20 pointer-events-none">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-full font-medium">
                        {project.industry}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm text-text-light mb-2">
                      {project.client}
                    </p>
                    <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent/5 text-accent text-xs rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {project.highlights.slice(0, 3).map((h) => (
                        <div
                          key={h}
                          className="flex items-center gap-2 text-xs text-text-secondary"
                        >
                          <svg
                            className="w-4 h-4 text-ai-accent shrink-0"
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
                          {h}
                        </div>
                      ))}
                    </div>
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
