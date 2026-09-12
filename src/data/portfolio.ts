export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  url?: string;
  highlights: string[];
  color: string;
}

export const projects: Project[] = [
  {
    slug: "careseva",
    title: "CareSeva",
    client: "CareSeva Healthcare",
    industry: "Healthcare Tech",
    category: "Healthcare",
    description:
      "A modern medical solutions platform that streamlines healthcare services, appointment booking, and patient management with an intuitive digital experience.",
    longDescription:
      "CareSeva is a comprehensive healthcare technology platform designed to modernize medical service delivery. We built a responsive, patient-friendly website that simplifies appointment booking, provides health information, and connects patients with healthcare providers. The platform features an intuitive interface, fast load times, and accessibility compliance to ensure all patients can access healthcare services digitally.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    url: "https://careseva.co.in",
    highlights: [
      "Modern responsive design with patient-first UX",
      "Online appointment booking system",
      "Fast page loads with SSR optimization",
      "HIPAA-aware data handling practices",
      "Mobile-optimized for on-the-go access",
    ],
    color: "from-blue-500 to-cyan-400",
  },
  {
    slug: "ishakulam",
    title: "IshaKulam",
    client: "IshaKulam Educational Trust",
    industry: "EdTech",
    category: "Education",
    description:
      "A modern school landing page that showcases the institution's educational philosophy, programs, and achievements with an engaging, professional design.",
    longDescription:
      "IshaKulam needed a website that would reflect their commitment to modern education while being easy for staff to maintain. We delivered a beautiful, responsive landing page that effectively communicates the school's programs, faculty, achievements, and admission process. The design captures the school's vibrant culture and provides parents with all the information they need.",
    technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
    url: "https://ishakulam.com",
    highlights: [
      "Engaging visual design reflecting school culture",
      "Easy-to-navigate program information",
      "Photo galleries and event showcases",
      "Mobile-responsive for parent access on any device",
      "SEO optimized for local school searches",
    ],
    color: "from-purple-500 to-pink-400",
  },
  {
    slug: "enterprise-erp",
    title: "Enterprise ERP System",
    client: "Confidential",
    industry: "Manufacturing",
    category: "Enterprise",
    description:
      "A custom enterprise resource planning system that automates inventory management, order processing, and financial reporting for a mid-size manufacturing company.",
    longDescription:
      "We developed a comprehensive ERP solution tailored for manufacturing operations. The system integrates inventory management, order processing, supply chain tracking, and financial reporting into a single unified platform. Built with scalability in mind, it handles thousands of SKUs and processes hundreds of orders daily with real-time dashboard visibility.",
    technologies: [
      "Node.js",
      "React",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
    highlights: [
      "70% reduction in manual data entry",
      "Real-time inventory tracking across warehouses",
      "Automated financial reporting and analytics",
      "Role-based access for 50+ concurrent users",
      "99.9% uptime with cloud-native architecture",
    ],
    color: "from-orange-500 to-amber-400",
  },
  {
    slug: "ai-chatbot",
    title: "AI Customer Support Bot",
    client: "Confidential",
    industry: "E-Commerce",
    category: "AI",
    description:
      "An intelligent AI chatbot that handles 80% of customer support queries automatically, reducing response times and improving customer satisfaction.",
    longDescription:
      "We built a sophisticated AI-powered customer support chatbot for an e-commerce platform. Using natural language processing and machine learning, the bot understands customer intent, provides accurate answers, handles order tracking, processes returns, and escalates complex issues to human agents. The result was a dramatic improvement in response times and customer satisfaction scores.",
    technologies: [
      "Python",
      "OpenAI API",
      "LangChain",
      "FastAPI",
      "React",
      "PostgreSQL",
    ],
    highlights: [
      "80% of queries resolved without human intervention",
      "Average response time under 3 seconds",
      "30% improvement in customer satisfaction (CSAT)",
      "Multilingual support (English, Hindi)",
      "Seamless human handoff for complex issues",
    ],
    color: "from-emerald-500 to-teal-400",
  },
];

export const categories = [
  "All",
  "Healthcare",
  "Education",
  "Enterprise",
  "AI",
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
