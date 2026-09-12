export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-software-partner-india",
    title: "How to Choose the Right Software Partner in India",
    excerpt:
      "Finding the right software development partner can make or break your project. Here are the key factors to consider when evaluating Indian software companies for your next project.",
    category: "Business",
    date: "2026-09-01",
    readTime: "8 min read",
    author: "SoftKrestInfotech Team",
    tags: ["Software Development", "Outsourcing", "India", "Business Tips"],
  },
  {
    slug: "web-vs-app-development",
    title: "Web Development vs App Development: Which Does Your Business Need?",
    excerpt:
      "Understanding the differences between web and mobile app development is crucial for making the right investment. We break down the pros, cons, and ideal use cases for each approach.",
    category: "Technology",
    date: "2026-08-20",
    readTime: "6 min read",
    author: "SoftKrestInfotech Team",
    tags: [
      "Web Development",
      "App Development",
      "Business Strategy",
      "Technology",
    ],
  },
  {
    slug: "ai-integration-small-businesses",
    title: "AI Integration for Small Businesses: A Practical Guide",
    excerpt:
      "AI isn't just for big corporations anymore. Discover practical ways small businesses can leverage AI to automate tasks, improve customer service, and drive growth.",
    category: "AI",
    date: "2026-08-10",
    readTime: "10 min read",
    author: "SoftKrestInfotech Team",
    tags: [
      "Artificial Intelligence",
      "Small Business",
      "Automation",
      "Chatbots",
    ],
  },
  {
    slug: "careseva-case-study",
    title:
      "How CareSeva Modernized Medical Appointment Booking — A Case Study",
    excerpt:
      "Learn how we helped CareSeva build a modern healthcare platform that simplified appointment booking and improved patient experience with cutting-edge web technology.",
    category: "Case Study",
    date: "2026-07-25",
    readTime: "7 min read",
    author: "SoftKrestInfotech Team",
    tags: ["Healthcare", "Case Study", "Web Development", "Next.js"],
  },
  {
    slug: "signs-school-needs-modern-website",
    title: "10 Signs Your School Needs a Modern Website",
    excerpt:
      "Is your school's website driving parents away? Discover the telltale signs that it's time for a redesign and how a modern website can boost enrollment and engagement.",
    category: "Education",
    date: "2026-07-15",
    readTime: "5 min read",
    author: "SoftKrestInfotech Team",
    tags: [
      "Education",
      "Web Design",
      "School Website",
      "Digital Transformation",
    ],
  },
];
