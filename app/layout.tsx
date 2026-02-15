import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marc Anthony San Juan | Computer Engineer & Blockchain Developer",
  description: "Portfolio of Marc Anthony San Juan - Computer Engineering student specializing in blockchain technology, embedded systems, and AI-driven solutions. Experienced in full-stack development, IoT systems, and AI agents.",
  keywords: ["Marc Anthony San Juan", "Computer Engineer", "Blockchain Developer", "Embedded Systems", "Full Stack Developer", "AI Developer", "IoT", "Solana", "Next.js"],
  authors: [{ name: "Marc Anthony M San Juan" }],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: "Marc Anthony San Juan | Computer Engineer & Blockchain Developer",
    description: "Portfolio showcasing projects in blockchain, embedded systems, and AI development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}