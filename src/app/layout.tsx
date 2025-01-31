import type { Metadata } from "next";
import "./globals.css";

import { geistSans } from "@/app/fonts";
import { ThemeProvider } from "@/components/themeProvider";

export const metadata: Metadata = {
  title: "Mikhailok - Full-Stack Web Developer",
  description:
    "Full-Stack dev passionate about building AI tools and performant apps. I work with Django, FastAPI, React, and modern stacks. Always exploring new tech 💻.",
  keywords: [
    "JavaScript",
    "Python",
    "Django",
    "FastAPI",
    "Flask",
    "Next.js",
    "React",
    "Vue",
    "Docker",
    "PostgreSQL",
    "TypeScript",
    "Redis",
    "REST API",
    "MySQL",
  ],
  openGraph: {
    title: "Mikhailok",
    description: "Mikhailok - Full-Stack Web Developer",
    url: "https://mikhailok.me",
    siteName: "Mikhailok",
    images: [
      {
        url: "https://mikhailok.me/ogImage.png",
        width: 1200,
        height: 630,
        alt: "Mikhailok - Full-Stack Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikhailok",
    description: "Mikhailok - Full-Stack Web Developer",
    images: ["https://mikhailok.me/ogImage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
