export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  icon: string;
  iconName: string;
  color: string;
  technologies: string[];
  features: string[];
  benefits: { title: string; description: string }[];
  pricing: { label: string; description: string; features: string[] }[];
  faqs: { question: string; answer: string }[];
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
    iconName: "web",
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
    benefits: [
      {
        title: "Convert More Visitors",
        description:
          "We design with conversion in mind — clear CTAs, fast load times, and intuitive navigation that turn visitors into paying customers.",
      },
      {
        title: "Built for Growth",
        description:
          "Our websites are scalable and built on modern stacks so they grow with your business without costly rebuilds.",
      },
      {
        title: "Google-Ready from Day One",
        description:
          "Every site ships with SEO best practices, Core Web Vitals optimization, and structured data baked in.",
      },
    ],
    pricing: [
      {
        label: "Landing Page",
        description: "Starting at ₹8,000",
        features: [
          "Single responsive page",
          "Contact form integration",
          "SEO-ready HTML structure",
          "Mobile-first design",
          "Delivered in 5–7 days",
        ],
      },
      {
        label: "Business Website",
        description: "Starting at ₹20,000",
        features: [
          "5–10 pages",
          "CMS integration",
          "Blog setup",
          "Analytics integration",
          "1 month free support",
        ],
      },
      {
        label: "E-Commerce / Portal",
        description: "Starting at ₹50,000",
        features: [
          "Full product catalog",
          "Payment gateway (Razorpay / Stripe)",
          "Admin dashboard",
          "Order management",
          "3 months free support",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer:
          "A simple landing page takes 5–7 days. A business website (5–10 pages) typically takes 2–4 weeks. Larger e-commerce or web portal projects are 6–12 weeks. We always give you a detailed timeline upfront.",
      },
      {
        question: "Will my website work on mobile and tablets?",
        answer:
          "Absolutely. Every website we build is mobile-first and fully responsive. We test on real devices across iOS and Android before delivery.",
      },
      {
        question: "Can I update the website myself after it's built?",
        answer:
          "Yes! We integrate a CMS (like WordPress or a custom admin panel) so you can update content, add blogs, and manage pages without any coding knowledge.",
      },
      {
        question: "Do you provide hosting and domain as well?",
        answer:
          "Yes, we offer complete hosting & domain packages as part of our Hosting & Maintenance service. We can also deploy on your existing hosting if you prefer.",
      },
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
    iconName: "app",
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
    benefits: [
      {
        title: "One Codebase, Two Platforms",
        description:
          "Using React Native or Flutter, we build apps that run natively on both iOS and Android — cutting your cost nearly in half vs separate builds.",
      },
      {
        title: "App Store Ready",
        description:
          "We handle the complete submission process to Google Play and Apple App Store, including compliance checks and metadata optimization.",
      },
      {
        title: "Offline & Real-Time Capable",
        description:
          "Our apps work even without internet and sync seamlessly when reconnected — perfect for field teams, healthcare, and logistics.",
      },
    ],
    pricing: [
      {
        label: "MVP App",
        description: "Starting at ₹40,000",
        features: [
          "Core feature set",
          "iOS or Android",
          "Basic backend (Firebase)",
          "User auth & onboarding",
          "App Store submission",
        ],
      },
      {
        label: "Cross-Platform App",
        description: "Starting at ₹80,000",
        features: [
          "iOS & Android both",
          "Custom backend + API",
          "Push notifications",
          "Admin dashboard",
          "3 months support",
        ],
      },
      {
        label: "Enterprise App",
        description: "Custom Pricing",
        features: [
          "Complex business logic",
          "ERP / CRM integrations",
          "Offline sync",
          "Role-based access",
          "SLA-backed support",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I build a native app or a cross-platform app?",
        answer:
          "For most businesses, cross-platform (React Native / Flutter) is the smart choice — same quality experience on both iOS and Android at roughly half the cost. We recommend native only for very performance-intensive apps like AR/VR or complex graphics.",
      },
      {
        question: "How long does app development take?",
        answer:
          "An MVP with core features typically takes 8–12 weeks. A full-featured cross-platform app with backend takes 16–24 weeks. We follow agile sprints so you see progress every 2 weeks.",
      },
      {
        question: "What happens after the app is launched?",
        answer:
          "We provide a free bug-fix period after launch, followed by optional monthly maintenance plans that include OS updates, security patches, and new feature development.",
      },
      {
        question: "Will my app data be secure?",
        answer:
          "Yes. We implement industry-standard security — encrypted storage, secure API communication (HTTPS), JWT auth, and data validation. For healthcare apps, we follow HIPAA-aware practices.",
      },
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
    iconName: "seo",
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
    benefits: [
      {
        title: "Sustainable Organic Traffic",
        description:
          "Unlike paid ads, SEO brings compounding returns. Once you rank, you get free clicks month after month — with no cost per click.",
      },
      {
        title: "Local Domination",
        description:
          "We specialize in local SEO for businesses in Varanasi, UP and across India — appearing in Google Maps, local packs, and 'near me' searches.",
      },
      {
        title: "Transparent Monthly Reports",
        description:
          "You get a detailed monthly report showing exactly which keywords improved, how much traffic grew, and what we're doing next.",
      },
    ],
    pricing: [
      {
        label: "Starter SEO",
        description: "₹5,000/month",
        features: [
          "10 target keywords",
          "On-page optimization",
          "Google Business Profile setup",
          "Monthly report",
          "3-month minimum",
        ],
      },
      {
        label: "Growth SEO",
        description: "₹12,000/month",
        features: [
          "30 target keywords",
          "Technical SEO fixes",
          "Link building (5/month)",
          "Content optimization",
          "Bi-weekly check-in",
        ],
      },
      {
        label: "Aggressive SEO",
        description: "₹25,000/month",
        features: [
          "Unlimited keywords",
          "Full technical overhaul",
          "Link building (20+/month)",
          "Blog content (4/month)",
          "Weekly strategy calls",
        ],
      },
    ],
    faqs: [
      {
        question: "How long before I see SEO results?",
        answer:
          "SEO is a long-term investment. Most clients start seeing measurable ranking improvements within 2–3 months, with significant traffic growth at 4–6 months. Local SEO (Google Maps, local packs) can show results faster — sometimes within 4–6 weeks.",
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer:
          "No ethical SEO company can guarantee specific rankings — Google's algorithm constantly changes. What we guarantee is a proven, white-hat strategy, consistent execution, and transparent reporting on your progress.",
      },
      {
        question: "What's the difference between on-page and off-page SEO?",
        answer:
          "On-page SEO is everything on your website — content quality, meta tags, page speed, URL structure. Off-page SEO is external — backlinks from other websites, citations, and brand mentions. Both are critical and we work on them together.",
      },
      {
        question: "Can you do SEO for my existing website?",
        answer:
          "Absolutely. We start with a full audit of your existing site, identify what's holding you back, and create a prioritized action plan to improve your rankings without rebuilding anything.",
      },
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
    iconName: "hosting",
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
    benefits: [
      {
        title: "Never Go Down",
        description:
          "We monitor your site 24/7 and respond to any downtime within minutes — so your customers always find you online.",
      },
      {
        title: "Security You Can Trust",
        description:
          "Regular security scans, automatic SSL renewal, firewall configuration, and prompt patching keep hackers out.",
      },
      {
        title: "Hands-Off Peace of Mind",
        description:
          "We handle everything — updates, backups, DNS, domain renewal — so you can focus entirely on running your business.",
      },
    ],
    pricing: [
      {
        label: "Basic Hosting",
        description: "₹1,500/month",
        features: [
          "Shared cloud hosting",
          "Free SSL certificate",
          "Daily backups",
          "Uptime monitoring",
          "Email support",
        ],
      },
      {
        label: "Managed Hosting",
        description: "₹4,000/month",
        features: [
          "VPS / dedicated resources",
          "CDN integration",
          "Weekly security scans",
          "CMS updates included",
          "Priority support",
        ],
      },
      {
        label: "Enterprise Hosting",
        description: "₹10,000+/month",
        features: [
          "AWS / DigitalOcean VPS",
          "Load balancing & auto-scaling",
          "Daily database backups",
          "24/7 on-call support",
          "SLA guarantee",
        ],
      },
    ],
    faqs: [
      {
        question: "What happens if my website goes down?",
        answer:
          "Our monitoring system detects downtime within 60 seconds and alerts our team immediately. For managed hosting clients, we respond and begin remediation within 15 minutes — 24/7, including weekends and holidays.",
      },
      {
        question: "Can you migrate my existing website to better hosting?",
        answer:
          "Yes, we handle complete website migrations — files, databases, email accounts, and DNS — with zero downtime. We run both old and new hosting in parallel during transition.",
      },
      {
        question: "Is my website data backed up?",
        answer:
          "Yes. We perform automated daily backups stored in a separate geographic location. In case of data loss or accidental deletion, we can restore your website within 1–2 hours.",
      },
      {
        question: "Do you include domain registration?",
        answer:
          "Yes, we can register and manage your domain (.in, .com, .co.in, etc.) on your behalf. Domain renewal is handled automatically — you'll never lose your domain due to accidental expiry.",
      },
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
    iconName: "software",
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
    benefits: [
      {
        title: "Built Exactly for Your Business",
        description:
          "Off-the-shelf software forces you to adapt your processes. Custom software adapts to your processes — eliminating workarounds and boosting team efficiency.",
      },
      {
        title: "Automate the Repetitive",
        description:
          "We identify manual, time-consuming tasks in your workflow and automate them — saving hours of work daily and reducing human error.",
      },
      {
        title: "Own Your Software",
        description:
          "No subscription lock-in, no vendor dependency. You own the code outright and can evolve it independently as your business grows.",
      },
    ],
    pricing: [
      {
        label: "Small Tool / Automation",
        description: "Starting at ₹30,000",
        features: [
          "Single-purpose tool",
          "Simple database",
          "User auth",
          "Basic dashboard",
          "1 month support",
        ],
      },
      {
        label: "Business Application",
        description: "Starting at ₹1,00,000",
        features: [
          "Multi-module system",
          "Role-based access",
          "Reporting & analytics",
          "Third-party integrations",
          "3 months support",
        ],
      },
      {
        label: "Enterprise / SaaS",
        description: "Custom Pricing",
        features: [
          "Multi-tenant architecture",
          "Subscription billing",
          "Microservices",
          "DevOps & CI/CD",
          "SLA-backed support",
        ],
      },
    ],
    faqs: [
      {
        question: "How is custom software different from using an off-the-shelf product?",
        answer:
          "Off-the-shelf software is built for the average business — you pay for features you don't need and work around missing ones. Custom software is built specifically for your workflows, your team, and your customers — resulting in dramatically higher adoption and efficiency.",
      },
      {
        question: "How long does custom software development take?",
        answer:
          "A small automation tool can take 4–6 weeks. A full business application (ERP, CRM) typically takes 3–6 months. Enterprise SaaS products are 6–12+ months. We break work into monthly sprints so you see real progress every step of the way.",
      },
      {
        question: "What if I need changes after the software is built?",
        answer:
          "That's completely normal! Software evolves with your business. We offer monthly retainer plans for ongoing feature development, bug fixes, and enhancements after the initial delivery.",
      },
      {
        question: "Is my business data secure in the software?",
        answer:
          "Security is built in from day one — encrypted data storage, HTTPS everywhere, JWT-based authentication, input validation, and regular security audits. For sensitive industries (healthcare, finance), we follow relevant compliance standards.",
      },
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
    iconName: "ai",
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
    benefits: [
      {
        title: "Automate Customer Support 24/7",
        description:
          "An AI chatbot handles FAQs, lead qualification, and basic support round the clock — with no additional headcount.",
      },
      {
        title: "Make Smarter Business Decisions",
        description:
          "AI-powered analytics surface patterns in your data that humans miss — helping you forecast demand, detect fraud, and optimize pricing.",
      },
      {
        title: "Competitive Advantage",
        description:
          "AI is no longer just for big corporations. We make AI accessible and affordable for SMEs — giving you a genuine edge over competitors still doing things manually.",
      },
    ],
    pricing: [
      {
        label: "AI Chatbot",
        description: "Starting at ₹20,000",
        features: [
          "Custom-trained on your data",
          "Website / WhatsApp integration",
          "Lead capture",
          "Handoff to human agent",
          "1 month support",
        ],
      },
      {
        label: "AI Integration",
        description: "Starting at ₹50,000",
        features: [
          "OpenAI / Gemini API integration",
          "Custom prompt engineering",
          "Document Q&A system",
          "API endpoints",
          "3 months support",
        ],
      },
      {
        label: "Custom ML Model",
        description: "Custom Pricing",
        features: [
          "Data collection & preprocessing",
          "Model training & validation",
          "API deployment",
          "Monitoring & retraining",
          "Full documentation",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a lot of data to use AI?",
        answer:
          "Not necessarily. For chatbots and document Q&A, you just need your existing content (FAQs, product info, manuals). For custom ML models, more data helps — but we can also use pre-trained models fine-tuned on smaller datasets.",
      },
      {
        question: "Can AI be integrated into my existing website or app?",
        answer:
          "Absolutely. We build AI as a layer on top of your existing systems — adding a chatbot to your website, a recommendation engine to your app, or an analytics dashboard to your admin panel — without rebuilding from scratch.",
      },
      {
        question: "Is an AI chatbot better than a human support agent?",
        answer:
          "AI chatbots are best for handling repetitive, high-volume queries instantly at any time of day. We recommend a hybrid model — AI handles 80% of queries automatically and escalates complex ones to a human agent for the best customer experience.",
      },
      {
        question: "How accurate are the AI models you build?",
        answer:
          "Accuracy depends on data quality and the problem type. For common NLP tasks, we target 90%+ accuracy. We always start with a proof-of-concept phase to validate accuracy on your specific use case before full development.",
      },
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

