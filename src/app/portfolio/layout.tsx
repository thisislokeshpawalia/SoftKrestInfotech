import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Our Work",
  description:
    "Explore SoftKrestInfotech's portfolio of web development, app development, and AI projects including CareSeva and IshaKulam.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
