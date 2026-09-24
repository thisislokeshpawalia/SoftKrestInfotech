"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const codeLines = [
  "const buildDreams = async () => {",
  "  const vision = await analyze(yourIdea);",
  "  const solution = design(vision);",
  "  const product = await develop(solution);",
  "  return deploy(product); // 🚀",
  "};",
];

const floatingElements = [
  { text: "React", x: "10%", y: "20%", delay: 0 },
  { text: "AI", x: "85%", y: "15%", delay: 1 },
  { text: "Next.js", x: "75%", y: "75%", delay: 2 },
  { text: "Python", x: "15%", y: "70%", delay: 3 },
  { text: "Cloud", x: "90%", y: "45%", delay: 1.5 },
  { text: "API", x: "5%", y: "45%", delay: 2.5 },
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(drawParticles);
    };

    resize();
    createParticles();
    drawParticles();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-gradient-hero w-full">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.6 }}
      />

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-accent/10 rounded-full blur-[100px]" />
      </div>

      {/* Floating tech labels */}
      {floatingElements.map((el) => (
        <div
          key={el.text}
          className="absolute hidden lg:block z-10 px-3 py-1.5 glass rounded-lg text-xs font-[family-name:var(--font-code)] text-accent/60 animate-float"
          style={{
            left: el.x,
            top: el.y,
            animationDelay: `${el.delay}s`,
            animationDuration: `${6 + el.delay}s`,
          }}
        >
          {el.text}
        </div>
      ))}

      <div className="container-custom relative z-10 pt-32 pb-20 lg:py-32 mt-12 lg:mt-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-ai-accent rounded-full animate-pulse" />
                AI-Powered Software Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-heading)] leading-tight mb-6 animate-fade-in-up animation-delay-200">
              Turning Ideas into{" "}
              <span className="gradient-text">Intelligent Software</span>{" "}
              Solutions
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl animate-fade-in-up animation-delay-400">
              From modern websites to AI-powered platforms — we build software
              that grows your business. Expert development for startups, SMEs,
              and enterprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 flex-wrap animate-fade-in-up animation-delay-600">
              <Link href="/contact" className="btn-primary text-center">
                Get a Free Quote
              </Link>
              <Link href="/portfolio" className="btn-secondary text-center">
                View Our Work
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-12 animate-fade-in-up animation-delay-800">
              <div className="flex -space-x-3">
                {["P", "R", "A", "S"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-ai-accent border-2 border-bg-dark flex items-center justify-center text-white text-xs font-bold"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Trusted by growing businesses
                </p>
              </div>
            </div>
          </div>

          {/* Right: Code animation */}
          <div className="hidden lg:block animate-fade-in-right animation-delay-400">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl" />

              {/* Code window */}
              <div className="relative glass rounded-2xl overflow-hidden">
                {/* Window header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-gray-500 ml-2 font-[family-name:var(--font-code)]">
                    softkrest.ts
                  </span>
                </div>

                {/* Code content */}
                <div className="p-6 font-[family-name:var(--font-code)] text-sm">
                  {codeLines.map((line, i) => (
                    <div
                      key={i}
                      className="flex gap-4 py-1 opacity-0 animate-fade-in-left"
                      style={{
                        animationDelay: `${800 + i * 200}ms`,
                        animationFillMode: "forwards",
                      }}
                    >
                      <span className="text-gray-600 select-none w-6 text-right">
                        {i + 1}
                      </span>
                      <span className="text-gray-300">
                        {line.split(" ").map((word, wi) => {
                          let color = "text-gray-300";
                          if (
                            [
                              "const",
                              "async",
                              "await",
                              "return",
                            ].includes(word)
                          )
                            color = "text-purple-400";
                          else if (word.includes("(") || word.includes(")"))
                            color = "text-blue-400";
                          else if (word.includes("=>")) color = "text-cyan-400";
                          else if (word.includes("//"))
                            color = "text-green-400";
                          return (
                            <span key={wi} className={color}>
                              {word}{" "}
                            </span>
                          );
                        })}
                      </span>
                    </div>
                  ))}

                  {/* Blinking cursor */}
                  <div className="flex gap-4 py-1">
                    <span className="text-gray-600 select-none w-6 text-right">
                      7
                    </span>
                    <span className="w-2 h-5 bg-accent animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-6 -right-6 glass rounded-xl p-4 animate-float animation-delay-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-ai-accent/20 flex items-center justify-center text-ai-accent text-sm">
                    ✓
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">
                      Deployed
                    </p>
                    <p className="text-gray-400 text-[10px]">
                      Production ready
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-6 glass rounded-xl p-4 animate-float animation-delay-600">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent text-sm">
                    ⚡
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">
                      99.9% Uptime
                    </p>
                    <p className="text-gray-400 text-[10px]">
                      Always available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-light to-transparent z-10" />
    </section>
  );
}
