export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  icon: string;
  color: string;
  technologies: string[];
  features: string[];
  process: { step: string; title: string; description: string }[];
  relatedProjects: string[];
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Dev",
    description:
      "We craft high-performance, visually stunning websites that convert visitors into customers. From responsive business websites to complex web portals and e-commerce platforms, our team delivers pixel-perfect solutions using cutting-edge technologies.",
    shortDescription:
      "Business websites, landing pages, e-commerce, web portals",
    icon: "🌐",
    color: "from-blue-500 to-cyan-400",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "WordPress",
      "Shopify",
      "MongoDB",
    ],
    features: [
      "Custom responsive website design & development",
      "E-commerce platforms with payment integration",
      "Progressive Web Apps (PWA)",
      "Content Management Systems (CMS)",
      "Landing pages optimized for conversion",
      "Web portal development",
      "API development & integration",
      "Performance optimization & Core Web Vitals",
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description:
          "We understand your business goals, target audience, and competitive landscape to define the perfect strategy.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "Our designers create stunning UI/UX mockups that align with your brand and maximize user engagement.",
      },
      {
        step: "03",
        title: "Develop",
        description:
          "Our engineers build your website using modern frameworks, ensuring speed, security, and scalability.",
      },
      {
        step: "04",
        title: "Deploy",
        description:
          "We launch your website with thorough testing, performance optimization, and ongoing support.",
      },
    ],
    relatedProjects: ["careseva", "ishakulam"],
  },
  {
    slug: "app-development",
    title: "App Development",
    shortTitle: "App Dev",
    description:
      "Build powerful mobile applications that users love. We develop native and cross-platform apps for iOS and Android that deliver seamless experiences, from concept to App Store deployment.",
    shortDescription: "iOS, Android, cross-platform mobile apps",
    icon: "📱",
    color: "from-purple-500 to-pink-400",
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "REST APIs",
      "GraphQL",
      "AWS",
    ],
    features: [
      "Native iOS & Android app development",
      "Cross-platform apps with React Native / Flutter",
      "UI/UX design for mobile interfaces",
      "App Store & Play Store deployment",
      "Push notifications & real-time features",
      "Offline-first architecture",
      "Backend & API development",
      "App maintenance & updates",
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description:
          "We map out your app's user flows, features, and technical requirements through detailed consultation.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "We create intuitive, beautiful mobile interfaces with interactive prototypes for your review.",
      },
      {
        step: "03",
        title: "Develop",
        description:
          "Agile development sprints with regular demos, ensuring your app meets every requirement.",
      },
      {
        step: "04",
        title: "Deploy",
        description:
          "Store submission, launch support, and ongoing maintenance to keep your app performing at its best.",
      },
    ],
    relatedProjects: ["careseva"],
  },
  {
    slug: "seo-services",
    title: "SEO Services",
    shortTitle: "SEO",
    description:
      "Dominate search engine rankings and drive organic traffic that converts. Our data-driven SEO strategies combine technical optimization, compelling content, and strategic link building to grow your online visibility.",
    shortDescription: "On-page/off-page SEO, local SEO, content strategy",
    icon: "📈",
    color: "from-green-500 to-emerald-400",
    technologies: [
      "Google Analytics",
      "Search Console",
      "SEMrush",
      "Ahrefs",
      "Screaming Frog",
      "Schema Markup",
      "Core Web Vitals",
      "Content Strategy",
    ],
    features: [
      "Comprehensive SEO audit & strategy",
      "On-page optimization (meta tags, content, structure)",
      "Off-page SEO & link building",
      "Local SEO for regional businesses",
      "Technical SEO (speed, crawlability, indexing)",
      "Content strategy & keyword research",
      "Monthly reporting & analytics",
      "Competitor analysis & benchmarking",
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        description:
          "Complete technical and content audit of your website to identify opportunities and issues.",
      },
      {
        step: "02",
        title: "Strategize",
        description:
          "Develop a customized SEO roadmap with keyword targets, content plans, and technical fixes.",
      },
      {
        step: "03",
        title: "Optimize",
        description:
          "Implement on-page, off-page, and technical SEO improvements across your digital presence.",
      },
      {
        step: "04",
        title: "Measure",
        description:
          "Track rankings, traffic, and conversions with detailed monthly reports and continuous optimization.",
      },
    ],
    relatedProjects: ["ishakulam"],
  },
  {
    slug: "hosting-maintenance",
    title: "Hosting & Maintenance",
    shortTitle: "Hosting",
    description:
      "Keep your digital assets secure, fast, and always online. Our managed hosting and maintenance services ensure your websites and applications perform at peak efficiency with 99.9% uptime guarantee.",
    shortDescription: "Managed hosting, domain, SSL, uptime monitoring",
    icon: "🛡️",
    color: "from-orange-500 to-amber-400",
    technologies: [
      "AWS",
      "Vercel",
      "Netlify",
      "DigitalOcean",
      "CloudFlare",
      "Docker",
      "SSL/TLS",
      "CI/CD",
    ],
    features: [
      "Managed cloud hosting (AWS, Vercel, Netlify)",
      "Domain registration & DNS management",
      "SSL certificate installation & renewal",
      "24/7 uptime monitoring & alerts",
      "Regular backups & disaster recovery",
      "Security patches & vulnerability scanning",
      "Performance monitoring & optimization",
      "Dedicated support & SLA commitment",
    ],
    process: [
      {
        step: "01",
        title: "Assess",
        description:
          "We evaluate your current infrastructure and requirements to recommend the optimal hosting solution.",
      },
      {
        step: "02",
        title: "Setup",
        description:
          "Configure servers, SSL, CDN, and security layers for maximum performance and protection.",
      },
      {
        step: "03",
        title: "Monitor",
        description:
          "24/7 monitoring with automated alerts, proactive issue resolution, and regular health checks.",
      },
      {
        step: "04",
        title: "Maintain",
        description:
          "Ongoing updates, backups, security patches, and performance tuning to keep everything running smoothly.",
      },
    ],
    relatedProjects: ["careseva", "ishakulam"],
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    shortTitle: "Custom SW",
    description:
      "Transform your business operations with tailor-made software solutions. From enterprise resource planning to SaaS platforms, we build scalable, secure software that automates workflows and drives efficiency.",
    shortDescription: "ERP, CRM, SaaS products, workflow automation",
    icon: "⚙️",
    color: "from-red-500 to-rose-400",
    technologies: [
      "Node.js",
      "Python",
      "Java",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Microservices",
      "Docker",
    ],
    features: [
      "Custom ERP & CRM systems",
      "SaaS product development",
      "Workflow automation tools",
      "Database design & optimization",
      "Third-party API integrations",
      "Real-time dashboards & reporting",
      "Role-based access control & security",
      "Scalable microservices architecture",
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description:
          "Deep-dive into your business processes to identify automation opportunities and define software requirements.",
      },
      {
        step: "02",
        title: "Architect",
        description:
          "Design the system architecture, database schema, and user interfaces for scalability and performance.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "Agile development with sprint reviews, ensuring alignment with your business needs at every stage.",
      },
      {
        step: "04",
        title: "Scale",
        description:
          "Deploy, train your team, and provide ongoing support to ensure the software grows with your business.",
      },
    ],
    relatedProjects: [],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    shortTitle: "AI",
    description:
      "Harness the power of artificial intelligence to supercharge your business. From intelligent chatbots to custom ML models, we integrate AI capabilities that automate tasks, enhance decision-making, and create competitive advantages.",
    shortDescription: "Chatbots, AI integrations, automation, ML models",
    icon: "🤖",
    color: "from-emerald-500 to-teal-400",
    technologies: [
      "Python",
      "TensorFlow",
      "OpenAI API",
      "LangChain",
      "NLP",
      "Computer Vision",
      "Hugging Face",
      "Vector DBs",
    ],
    features: [
      "AI-powered chatbots & virtual assistants",
      "Custom machine learning models",
      "Natural Language Processing (NLP)",
      "AI integrations into existing systems",
      "Predictive analytics & data insights",
      "Process automation with AI",
      "Computer vision solutions",
      "Recommendation engines",
    ],
    process: [
      {
        step: "01",
        title: "Explore",
        description:
          "Identify AI opportunities in your business, assess data readiness, and define success metrics.",
      },
      {
        step: "02",
        title: "Prototype",
        description:
          "Build rapid prototypes to validate AI solutions with real data and measure potential impact.",
      },
      {
        step: "03",
        title: "Develop",
        description:
          "Engineer production-ready AI models with rigorous testing, optimization, and integration.",
      },
      {
        step: "04",
        title: "Evolve",
        description:
          "Continuously monitor, retrain, and improve AI models to adapt to changing business needs.",
      },
    ],
    relatedProjects: [],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
