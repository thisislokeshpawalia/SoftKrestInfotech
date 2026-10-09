import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://softkrestinfotech.com"),
  title: {
    default: "SoftKrestInfotech | Turning Ideas into Intelligent Software Solutions",
    template: "%s | SoftKrestInfotech",
  },
  description:
    "SoftKrestInfotech is a full-service software solutions company offering web development, mobile app development, SEO, hosting, custom software, and AI solutions. Transform your business with intelligent technology.",
  keywords: [
    "Software development company in Varanasi",
    "Web development services in Varanasi",
    "Best app developers in Uttar Pradesh",
    "Custom software solutions India",
    "AI development company in India",
    "SEO agency in Varanasi",
    "SoftKrestInfotech",
  ],
  authors: [{ name: "SoftKrestInfotech" }],
  creator: "SoftKrestInfotech",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://softkrestinfotech.com",
    siteName: "SoftKrestInfotech",
    title: "SoftKrestInfotech | Turning Ideas into Intelligent Software Solutions",
    description:
      "From modern websites to AI-powered platforms — we build software that grows your business.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SoftKrestInfotech - Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftKrestInfotech | Intelligent Software Solutions",
    description:
      "From modern websites to AI-powered platforms — we build software that grows your business.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.svg",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SoftKrestInfotech",
  url: "https://softkrestinfotech.com",
  logo: "https://softkrestinfotech.com/logo.png",
  description:
    "Full-service software solutions company offering web development, mobile app development, SEO, hosting, custom software, and AI solutions.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9220379644",
    contactType: "customer service",
    areaServed: ["IN", "AE", "GB", "US"],
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Varanasi",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  email: "softkrestinfotech@gmail.com",
  sameAs: [
    "https://www.linkedin.com/company/softkrestinfotech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
