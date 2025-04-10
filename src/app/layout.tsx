import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aytacgedik.github.io'),
  title: "Aytac Gedik | Senior Software Engineer | Portfolio & Resume", 
  description: "Explore the portfolio, projects, skills, and professional experience of Aytac Gedik, a Senior Software Engineer specializing in Full-Stack & Mobile Development with React, Next.js, .NET Core, and AI integration.", 
  keywords: [ 
      "Aytac Gedik",
      "Software Engineer",
      "Senior Software Engineer",
      "Full-Stack Developer",
      "Mobile Developer",
      "React Developer",
      "Next.js Developer",
      ".NET Core Developer",
      "TypeScript",
      "C#",
      "Python",
      "React Native",
      "AI Integration",
      "Portfolio",
      "Resume",
      "CV",
      "Web Development",
      "Software Development",
      "Cloud",
      "AWS",
      "Firebase",
      "API Development"
  ],
  authors: [{ name: "Aytac Gedik", url: "https://www.linkedin.com/in/aytacgedik/" }], 
  creator: "Aytac Gedik",
  openGraph: {
    title: "Aytac Gedik | Senior Software Engineer Portfolio", 
    description: "Discover the projects, skills, and experience of Senior Software Engineer Aytac Gedik.",
    url: "https://aytacgedik.github.io",
    siteName: "Aytac Gedik Portfolio",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Aytac Gedik - Senior Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website", 
  },

  robots: {
    index: true, 
    follow: true, 
    googleBot: { 
      index: true,
      follow: true,
    },
  },

 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
