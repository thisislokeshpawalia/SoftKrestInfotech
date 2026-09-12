import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import SectionReveal from "@/components/SectionReveal";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, guides, and case studies from SoftKrestInfotech — your source for software development, AI, and digital transformation knowledge.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />
        <div className="container-custom relative z-10">
          <SectionReveal>
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                Blog & Resources
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-heading)] mb-6">
                Insights &{" "}
                <span className="gradient-text">Thought Leadership</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Expert perspectives on software development, AI integration,
                and digital transformation to help your business thrive.
              </p>
            </div>
          </SectionReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-light to-transparent" />
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <SectionReveal key={post.slug} delay={index * 100}>
                <article className="group bg-white rounded-2xl overflow-hidden border border-border card-hover h-full flex flex-col">
                  {/* Post Visual */}
                  <div className="h-48 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/10 text-7xl font-bold font-[family-name:var(--font-heading)]">
                        {post.category.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-text-light mb-3">
                      <time>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-text-primary mb-3 group-hover:text-accent transition-colors leading-tight">
                      {post.title}
                    </h2>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-bg-light text-text-light text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all"
                    >
                      Read More
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
                </article>
              </SectionReveal>
            ))}
          </div>

          {/* Newsletter */}
          <SectionReveal>
            <div className="mt-20 bg-gradient-to-r from-primary to-bg-dark rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-heading)] mb-3">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-300 text-sm mb-6 max-w-xl mx-auto">
                Get the latest insights, tips, and case studies delivered
                straight to your inbox. No spam — just valuable content.
              </p>
              <NewsletterForm />
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
