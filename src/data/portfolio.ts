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
  screenshotUrl?: string;
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
    screenshotUrl: "https://careseva.co.in",
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
    screenshotUrl: "https://ishakulam.com",
    highlights: [
      "Engaging visual design reflecting school culture",
      "Easy-to-navigate program information",
      "Photo galleries and event showcases",
      "Mobile-responsive for parent access on any device",
      "SEO optimized for local school searches",
    ],
    color: "from-purple-500 to-pink-400",
  },
];

export const categories = ["All", "Healthcare", "Education"];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
